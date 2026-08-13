# Android Portfolio App — Project Instructions

The Android app lives in this directory: a Jetpack Compose portfolio app that consumes
the Rails JSON API from `admin/` (deployed on Railway). The web frontend in `web/`
consumes the same API — treat it as the source of truth for the data contract.

## Repo structure

- `android/` — this app (Jetpack Compose, Kotlin)
- `admin/` — Rails 8 admin panel + JSON API (the app's backend)
- `web/` — React Router v7 portfolio frontend (shares the same API)

## API contract

The API is at `GET /api/images` and returns an array of objects:

```json
{ "id": 1, "title": "West Cork", "medium": "Oil on canvas", "year": 2024,
  "position": 1, "url": "https://res.cloudinary.com/..." }
```

- `title` may be null in the payload; normalize it in the model layer.
- `year` may be null.
- `url` is a Cloudinary image URL (the server already applies sizing transforms).
- No auth, no pagination yet. If the app needs more (pagination, dimensions), the
  plan must change the API in `admin/` first so the contract stays in sync with `web/`.

## Testing

Always write tests for new features, committed in the same commit as the feature.

- Unit tests for ViewModels and state holders (JUnit + Kotlin coroutines tests).
- Compose UI tests for screens (createComposeRule + Compose UI test APIs).
- Run `./gradlew test` before committing; fix failures, don't skip them.

## Code quality

- `./gradlew lint` must pass before committing.
- Keep functions small and single-purpose; extract helpers when a screen composable
  gets long.
- Follow Kotlin standard style (official kotlinlang code style).

## Architecture principles

- **MVVM**: screens are stateless composables; state lives in ViewModels; data flows
  one way (UiState → events → ViewModel → UiState).
- **Model layer mirrors the server contract.** A `WorkImage` data class matches the
  API payload shape, normalized at the fetch site (nullable `title` → non-null).
- **No UI dependencies unless the platform genuinely can't do it.** Prefer Compose
  Material 3 and the AndroidX libraries that come with it. Reach for a library only
  when it clearly earns its place.
- **Networking**: keep it minimal (e.g. a single Retrofit/OkHttp client or plain
  HttpURLConnection with coroutines — decide in the plan, don't add a heavy stack).
- **Error states**: network failures degrade gracefully; log via
  `Log.e`/`Log.w` so crashes are visible in logcat.
- **Prefer platform/AndroidX APIs** over third-party utility libraries.

## Deployment

- APK built with `./gradlew assembleDebug` (or `assembleRelease` with a signing
  config) — no CI deployment configured yet.

## Key conventions

- Images load with a library that handles caching/sizing (e.g. Coil) — the API
  already serves resized URLs, so keep transformations client-side minimal.
- Any public endpoint consumed here is validated server-side; client validation is
  UX only.

## Change recording

- Every change lands in `CHANGELOG.md` (Keep a Changelog format) under the
  "Unreleased" heading, with a one-line "Why" on each entry.
- Architectural decisions get a full rationale entry in `DECISIONS.md`
  (decision, context, alternatives considered, consequences) — commit it in the
  same commit as the code it documents.
- Both files are updated in the same commit as the change; never in a follow-up.
