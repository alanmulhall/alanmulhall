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
