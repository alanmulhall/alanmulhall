# Alan Mulhall

[![Maintainability](https://qlty.sh/gh/alanmulhall/projects/alanmulhall/maintainability.svg)](https://qlty.sh/gh/alanmulhall/projects/alanmulhall)

## Environment Variables

### Web (`web/`, deployed to Vercel)

Local values go in `web/.env`.

| Variable | Required | Description |
|---|---|---|
| `RESEND_API_KEY` | Yes | Resend API key, used server-side to send contact-form emails. |
| `RAILS_API_URL` | Prod | Base URL of the admin API the home loader fetches images from. Defaults to `http://localhost:3000` in development. |
| `VITE_LOGROCKET_APP_ID` | No | LogRocket app slug (`org/project`). When set, enables client-side session replay; omit to disable. |
| `VERCEL_GIT_COMMIT_SHA` | Auto | Set by Vercel at build time; surfaced as the git hash in the footer. |

### Admin (`admin/`, Rails)

Local values go in `admin/.env` (see `admin/.env.example`).

| Variable | Required | Description |
|---|---|---|
| `CLOUDINARY_CLOUD_NAME` | Yes | Cloudinary account name for image hosting. |
| `CLOUDINARY_API_KEY` | Yes | Cloudinary API key. |
| `CLOUDINARY_API_SECRET` | Yes | Cloudinary API secret. |
| `ADMIN_USERNAME` | Yes | Username for the admin UI (defaults to `admin`). |
| `ADMIN_PASSWORD` | Yes | Password for the admin UI. In production the app fails closed (admin requests error) if this is unset or blank; the `password` fallback applies only in development/test. |
| `FRONTEND_ORIGIN` | Yes | URL of the React Router frontend, used for CORS. |
| `DATABASE_URL` | Auto | Production database connection; provided automatically by the host. |
| `RAILS_MASTER_KEY` | Yes | Decrypts Rails credentials. Local value in `config/master.key`; in production provided by the host. |

## Analytics Events

| Event | Properties | Description |
|---|---|---|
| `slide_viewed` | `slide_position` (int), `slide_title` (string) | Fired when a slide becomes active, including on initial page load |
| `slider_next` | — | Fired when the Next button is clicked |
| `slider_prev` | — | Fired when the Previous button is clicked |
| `lightbox_opened` | `slide_position` (int), `slide_title` (string) | Fired when a slide image is clicked to open the lightbox |
| `instagram_click` | — | Fired when the Instagram link in the header is clicked |
| `contact_modal_opened` | — | Fired when the contact modal is opened |
| `contact_modal_closed` | — | Fired when the contact modal is closed |
| `contact_submit_clicked` | — | Fired when the contact form is submitted with valid data |
| `contact_sent` | — | Fired when the contact form is successfully sent |
| `generate_lead` | — | GA4 recommended event; fired when the contact form is successfully sent |
| `contact_failed` | — | Fired when the contact form fails to send |

## Session Replay

LogRocket session recording is initialized client-side in `web/app/root.tsx`. It is
enabled only when the `VITE_LOGROCKET_APP_ID` environment variable is set (e.g. in
Vercel), so it stays off in local development unless you configure it.

## Opencode

### Subagents

| Agent | Purpose | Model |
|---|---|---|
| `reviewer` | Reviews code for quality, correctness, and adherence to AGENTS.md conventions. Auto-detects platform (web/admin/android) and applies the right rules. Returns a grade (A–F). | claude-fable-5 |
| `vision` | Analyses screenshots for visual quality. Detects platform (web/android) and reports layout, typography, contrast, and accessibility issues. Returns a grade (A–F). | claude-sonnet-4-6 |

### Skills

| Skill | Purpose | Example |
|---|---|---|
| `review-web` | Captures 3 viewport screenshots (desktop, tablet, mobile) and batch-reviews them with the vision agent. | `review-web https://www.alanmulhall.com/` |
| `review-android` | Captures screenshots on 3 device profiles (small_phone, medium_phone, medium_tablet) and batch-reviews them with the vision agent. | `review-android` |
| `api-contract` | Checks that the API response shape in admin/ matches what web/ and android/ expect. | `api-contract` |
| `add-changelog` | Adds a changelog entry following Keep a Changelog format with a "Why" line. | `add-changelog android Added "Added dark mode toggle"` |
| `env-vars` | Lists required env vars for a platform and checks which ones are set. | `env-vars web` |
| `decision` | Creates or updates DECISIONS.md with a structured decision record. | `decision android "Use Coil for image loading"` |

### Example: review a website

```
review-web https://www.alanmulhall.com/
```

Returns a per-viewport grade and an overall cross-viewport grade.

### Example: review Android app screenshots

```
review-android
```

Captures 3 device profiles and returns per-profile grades plus an overall cross-profile grade.

### Example: check API contract

```
api-contract
```

Reads the admin controller, web loader, and Android DTO to verify they agree on the response shape.

### Example: add a changelog entry

```
add-changelog android Added "Added dark mode toggle to viewer screen"
```

Adds the entry under `## [Unreleased] / ### Added` in `android/CHANGELOG.md`.

### Example: check env vars

```
env-vars admin
```

Lists required vars and reports which are set, missing, or empty.

### Example: record a decision

```
decision android "Use Coil for image loading instead of Glide"
```

Creates the next numbered entry in `android/DECISIONS.md` with context, alternatives, and consequences.

### Example: code review

```
task reviewer — review the android codebase
```

The reviewer agent reads all production files and returns issues with file:line references and a grade.
