# Changelog

All notable changes to the Android app are recorded here. This project follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and semantic versioning.

Every entry includes a short "Why" so future readers know the reason behind the
change, not just what happened.

## [Unreleased]

### Added

- Project scaffolding (AGENTS.md, changelog, decision record) — establish conventions
  before implementation so every future change is tracked with rationale.
- Backlog and implementation plan — record upcoming work and the agreed milestone
  breakdown (stack, design parity with `web/`, API base URL) so implementation can
  proceed without re-deriving decisions. Why: the plan documents the choices made
  with the maintainer, including how the app reaches the deployed Rails API.
- Gradle project scaffold: version catalog (`libs.versions.toml`), AGP 8.13.2 +
  Gradle wrapper 8.14.5, JetBrains Mono bundled in `res/font/`, Material 3 theme
  matching the web palette, adaptive launcher icon, and a `BuildConfigTest` guarding
  the app id/version wiring. Why: a verified base (build + unit test + lint green,
  APK smoke-tested on the Pixel 10 Pro emulator) before feature work; see
  DECISIONS 002 for the toolchain rationale.
- Data layer: `WorkImage` model + `WorkImageDto` mapper, `ImagesRepository` with an
  OkHttp implementation hitting `GET /api/images`, shared `ApiJson` codec, and
  `API_BASE_URL` BuildConfig (defaults to the deployed Railway API, overridable via
  `-Pportfolio.apiBaseUrl`). Why: implements DECISIONS 001; the model mirrors the
  API contract exactly (`title`/`medium` null -> `""`) and the repository hides the
  transport so ViewModels depend only on the interface.
