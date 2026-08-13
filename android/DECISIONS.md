# Decision Record

Architectural decisions for the Android app. One entry per decision, in
chronological order, with context and consequences. Commit the entry in the same
commit as the code it documents.

## 001 — Networking: OkHttp + kotlinx.serialization (no Retrofit)

- **Date:** 2026-08-12
- **Status:** Accepted

### Context

The app's only API call is `GET /api/images`, which returns a small JSON array.
The repo values minimal dependencies ("platform first, only reach for a library
that earns its place"). Retrofit would add a dependency stack for a single
endpoint.

### Decision

Use OkHttp for the HTTP transport and kotlinx.serialization for JSON decoding,
wrapped behind a single `ImagesRepository` that exposes `suspend getImages()`.
No Retrofit.

### Alternatives considered

- **Retrofit + OkHttp + converter:** the Android standard, but heavy for one
  endpoint; pays off once the API grows to several endpoints.
- **HttpURLConnection:** no extra dependency but hand-rolled connection handling
  and no JSON parsing.

### Consequences

- Fewer dependencies, more visible plumbing (good for learning how the stack
  works end to end).
- The `ImagesRepository` interface hides the implementation, so Retrofit remains a
  drop-in replacement if the API grows — ViewModels are unaffected.
- Manual request/parse/error-handling code must stay small and well-tested.

## 002 — Toolchain: AGP 8.13 + Gradle 8.14 on JDK 24 (no AGP 9 yet)

- **Date:** 2026-08-12
- **Status:** Accepted

### Context

Scaffolding a fresh project in 2026, current stable Android library versions
(Compose 1.12, core-ktx 1.19, lifecycle 2.11) require AGP 9.1+. AGP 9 enables
built-in Kotlin by default: the `org.jetbrains.kotlin.android` plugin must be
removed and the Kotlin/Android DSL blocks change. There is no feature the app
needs that those newer libraries provide.

### Decision

Stay on the last AGP 8 line: AGP 8.13.2, Gradle wrapper 8.14.5 (runs on the
installed JDK 24), Kotlin 2.3.21, and pin the androidx stack to the latest
AGP-8-compatible set (Compose BOM 2025.06.01, core-ktx 1.17.0,
activity-compose 1.10.1, lifecycle 2.9.1). `android.builtInKotlin` is untouched
(defaults to legacy KGP wiring via `org.jetbrains.kotlin.android`).

### Alternatives considered

- **AGP 9.3.1 + Gradle 9.x + newest androidx:** current-gen but requires the
  built-in Kotlin migration, which is still churning (compose plugin wiring,
  KMP/plugin ecosystem catching up). Cost now for no immediate benefit.
- **JVM toolchain pinned to JDK 17/21:** unneeded — Gradle 8.14.5 natively
  supports running on JDK 24.

### Consequences

- Reproducible, well-documented version set; the build was verified green
  (`assembleDebug`, `test`, `lint`) and the APK smoke-tested on an emulator.
- A future AGP 9 migration is a single tracked task (update `libs.versions.toml`,
  drop the `kotlin-android` plugin, move `kotlin {}` config) with the whole
  androidx stack available to adopt at once.
- `compileSdk 36` is the ceiling until we move to AGP 9 (AGP 8.13 max is 36).
