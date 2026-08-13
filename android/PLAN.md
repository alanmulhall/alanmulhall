# Android App Plan — Alan Mulhall Portfolio

## Goal

A minimal Jetpack Compose portfolio app for Android that mirrors the `web/`
frontend's design and behavior, consuming the same Rails JSON API from `admin/`
(deployed on Railway). Works on phones and tablets.

## Source of truth

- **API contract:** `admin/` + `web/` (see `../admin/app/controllers/api/images_controller.rb`
  and `web/app/types.ts`). Treat `web/` as the reference for both the data shape and
  the interaction design.
- **Backend:** `GET /api/images` on `https://alanmulhall-production.up.railway.app`,
  no auth, no pagination. Returns `{ id, title, medium, year, position, url }`.
  `title` and `year` may be null — normalize at the fetch site (`title ?? ""`, mirrors
  `web/app/routes/home.tsx`).

## Design parity (from `web/`)

- **Colors:** white background, near-black text, gray `#9CA3AF` for muted mono labels
  (Tailwind `text-gray-400`).
- **Type:** JetBrains Mono everywhere — bundled TTF in `res/font/`, no font download
  dependency. Header 28sp, labels 12sp uppercase.
- **Layout:** full-screen column — header (`Alan Mulhall` + `contact` underline link),
  full-bleed single-image slider, footer (`Alan Mulhall | © 2026`).
- **Slider:** swipe with drag-follow (Compose `HorizontalPager` provides this), tap
  image → full-screen lightbox viewer. Phones show a mono position counter
  (`01 / 12`); tablets (width ≥ 840dp) show left/right side arrows instead — the web
  `md:` breakpoint.
- **Viewer:** near-black overlay, image contained, tap or back dismisses, plus
  pinch-zoom (`detectTransformGestures` → `graphicsLayer`, clamped so it can't zoom
  out past contain).

## Stack

- Kotlin 2.x + Jetpack Compose (Material 3, BOM), minSdk 26 / targetSdk 35.
- OkHttp + kotlinx.serialization (no Retrofit; the repository interface keeps it
  swappable). Coil for image loading/caching.
- lifecycle-viewmodel-compose; no navigation library — the viewer is a state-driven
  overlay handled with `BackHandler`.
- Gradle wrapper 8.14 / AGP 8.11 (JDK 24 compatible — verify at scaffold time), version
  catalog in `gradle/libs.versions.toml`.

## Architecture (MVVM)

```
android/
  settings.gradle.kts, build.gradle.kts, gradle/libs.versions.toml, gradle wrapper
  app/src/main/java/com/alanmulhall/portfolio/
    MainActivity.kt
    ui/theme/       Color, Type (JetBrains Mono), Theme (light scheme)
    ui/gallery/     GalleryScreen, GalleryViewModel, UiState (Loading/Success/Empty/Error)
    ui/viewer/      ViewerScreen (lightbox, back handling, pinch-zoom)
    data/           WorkImage, WorkImageDto + mapper, ImagesRepository (interface),
                    OkHttpImagesRepository, JsonConfig
  app/src/test/java/...   Repository (MockWebServer) + ViewModel (coroutines-test) tests
  app/src/androidTest/... Compose UI tests (gallery renders, empty state)
  CHANGELOG.md, BACKLOG.md, docs/DECISIONS.md, PLAN.md
```

- Screens are stateless composables; state lives in `GalleryViewModel`; data flows
  one way.
- **Degrade gracefully** like the web loader: network/HTTP failure → Empty state with
  a retry action; `Log.w`/`Log.e` on failures so they're visible in logcat.
- **Base URL:** a single `API_BASE_URL` BuildConfig constant defaulting to
  `https://alanmulhall-production.up.railway.app` (the deployed API — the app does not
  assume a locally running Rails). Overridable via a Gradle property for local testing.
- **No `admin/` changes for v1** — `url` (1200px Cloudinary) is plenty for a
  single-image viewer. Thumbnails only matter if a grid layout is added later.

## Testing

- Unit tests for the repository (OkHttp MockWebServer + a JSON fixture) and the
  ViewModel (kotlinx-coroutines-test), committed in the same commit as the code.
- Compose UI tests for the gallery screen (renders works, empty state).
- Gates: `./gradlew test`, `./gradlew lint`, `./gradlew assembleDebug` must pass
  before commit.

## Milestones

| # | Milestone | Effort | Deliverables |
|---|---|---|---|
| 1 | Scaffold | S | Gradle project, version catalog, theme + JetBrains Mono, `MainActivity`, wrapper |
| 2 | Data layer | M | `WorkImage`/DTO/mapper, `ImagesRepository` + OkHttp impl, base URL config; MockWebServer + mapper tests |
| 3 | Gallery + viewer | L | Slider (header/footer/counter/arrows), viewer lightbox with pinch-zoom, Loading/Success/Empty/Error states; ViewModel + Compose tests |
| 4 | Responsive + polish | M | Tablet breakpoint, back handling, retry UX, lint/quality pass |
| 5 | CI (optional) | S | GitHub Actions: lint + unit tests + `assembleDebug` on push |

Each milestone updates `CHANGELOG.md` and `docs/DECISIONS.md` in the same commit
(see `android/AGENTS.md`).

## Out of scope for v1 (backlog)

- Thumbnail/grid layout (needs a thumbnail endpoint in `admin/`).
- Firebase App Distribution (already in `BACKLOG.md`).
- Pagination, auth, offline cache, dark mode.
