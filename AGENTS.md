# Alan Mulhall — Project Instructions

## Repo structure

Monorepo with three apps:

- `web/` — React Router v7 (SSR) portfolio frontend, deployed to Vercel
- `admin/` — Rails 8 admin panel + JSON API, deployed to Railway
- `android/` — Jetpack Compose portfolio app (Kotlin), consumes the same Rails API

Each sub-app has its own `AGENTS.md` with app-specific conventions. The root
`AGENTS.md` (this file) covers shared cross-app rules; defer to the sub-app file
for anything specific to that platform.

## Testing

Always write tests for any new features or changes, for both client and server code.
Tests must be committed in the same commit as the feature — never in a separate follow-up.

- **Web (React Router):** Vitest + React Testing Library in `web/app/`
- **Admin (Rails):** RSpec + FactoryBot in `admin/spec/`
- **Android:** JUnit + Compose UI tests (Robolectric, JVM — no emulator required); run `./gradlew test`

## Code quality

**Web:** ESLint runs `complexity` (max 12) and `sonarjs/cognitive-complexity` (max 15) as errors.
If a function exceeds these thresholds, extract helpers — do not raise the limit.

**Admin:** RuboCop with Metrics cops enabled (`CyclomaticComplexity` ≤ 10, `AbcSize` ≤ 25,
`MethodLength` ≤ 30). The base config is `rubocop-rails-omakase`.

**Android:** `./gradlew lint` must pass before committing. Keep composables small;
extract helpers when a screen function gets long.

Web and admin linters run in the pre-commit hook and in CI — fix violations before committing.

## Architecture principles

- **No UI dependencies for components.** Use native platform APIs first (e.g. `<dialog>` for
  modals and lightboxes, `AbortSignal.timeout` for fetch). Only reach for a library if the
  platform genuinely can't do the job.
- **No validation libraries** (e.g. Zod) unless forms grow substantially beyond what a shared
  regex + trim pattern handles cleanly.
- **Server-side validation mirrors client-side.** Client validation is UX; the server action is
  the actual gate. Both should check the same rules.
- **Shared types live in `web/app/types.ts`.** The normalized `WorkImage` type is defined there
  and imported by both the loader and `WorkSlider`.

## Key conventions

- **Honeypot on forms.** Any public POST endpoint has a hidden `website` field; the action
  silently returns `{ success: true }` if it's filled (bots can't tell they were caught).
- **GA events** fire only on user actions, never on bot/automated paths. The GA loader script
  is gated to `import.meta.env.PROD` so local dev sessions don't pollute the property.
  All events are documented in `README.md`.
- **Native `<dialog>` for overlays.** Both `ContactModal` and `Lightbox` use `showModal()` for
  browser-native focus trapping, Escape handling, and top-layer rendering.
- **`console.error`/`warn` for silent failures.** When the app degrades gracefully (API down,
  upload failure, honeypot trigger), always log so the cause is visible in Vercel/Railway logs.

## API contract (shared)

All three apps ultimately depend on `GET /api/images` served by the admin Rails app.
Treat the admin controller as the source of truth — any change to the response shape
must be coordinated across web, android, and admin at the same time.

```json
{ "id": 1, "title": "West Cork", "medium": "Oil on canvas", "year": 2024,
  "position": 1, "url": "https://res.cloudinary.com/..." }
```

`title` and `year` may be null — normalize at the fetch site in each client
(`title ?? ""` in both the web loader and the Android repository layer).

## Deployment

- **Web → Vercel.** `VITE_*` env vars are build-time (require a redeploy to change).
  `process.env.*` vars in loader/action code are runtime. See `README.md` for the full list.
- **Admin → Railway.** `RAILS_MASTER_KEY` is required. `ADMIN_PASSWORD` must be set in
  production — the app fails closed (raises) if it is unset or blank.
- **Android:** APK built with `./gradlew assembleDebug` (or `assembleRelease` with a
  signing config). No CI deployment configured yet.

## Structured data

`web/app/seo.ts` exports `artistSchema` (Person) and `artworkListSchema(images)` (ItemList of
VisualArtwork). Both are embedded as JSON-LD in the rendered HTML. Update `SITE_URL` in that
file if the canonical domain ever changes.

## Branches

`newsletter-signup` is a long-running feature branch (Resend Audiences signup form). It needs a
rebase onto main before merging — `home.tsx` and `home.test.tsx` have significant divergence.
See `BACKLOG.md` for what's needed before it ships.
