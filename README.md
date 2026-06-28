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
| `ADMIN_PASSWORD` | Yes | Password for the admin UI. |
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
