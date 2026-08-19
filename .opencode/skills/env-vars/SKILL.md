---
name: env-vars
description: >
  Lists required environment variables for a platform and checks which ones
  are set. Use when the user wants to verify their env config, is setting up
  a new environment, or is debugging a deployment failure related to missing vars.
---

# Env Vars Checker

Lists required and optional environment variables for each platform and checks
which ones are currently set.

## Per-platform variables

### Web (React Router on Vercel)

**Runtime** (available in loader/action code via `process.env`):
- `RESEND_API_KEY` — required for contact form email delivery
- `RAILS_API_URL` — required; URL of the deployed admin API (default: `http://localhost:3000`)

**Build-time** (available via `import.meta.env.VITE_*`, require redeploy to change):
- `VITE_GA_ID` — Google Analytics measurement ID
- `VITE_LOGROCKET_APP_ID` — LogRocket app ID (optional)

### Admin (Rails on Railway)

**Required:**
- `RAILS_MASTER_KEY` — decrypts `credentials.yml.enc`
- `ADMIN_PASSWORD` — app fails closed (raises) if unset or blank
- `CLOUDINARY_CLOUD_NAME` — image hosting
- `CLOUDINARY_API_KEY` — image hosting
- `CLOUDINARY_API_SECRET` — image hosting

**Optional:**
- `ADMIN_USERNAME` — defaults to `admin`
- `FRONTEND_ORIGIN` — CORS allowed origin for the web frontend
- `DATABASE_URL` — set by Railway automatically

### Android

No env vars — the API base URL is set via `BuildConfig.API_BASE_URL` and can
be overridden at build time with `-Pportfolio.apiBaseUrl=<url>`.

## How to check

1. Determine which platform the user is asking about
2. List the variables above
3. For each variable, check if it's set: `printenv VAR_NAME` (web/admin) or
   grep `BuildConfig` (android)
4. Report which are set, which are missing, and whether they're required

## What to report

- Missing required vars (block deployment or runtime)
- Missing optional vars (degraded functionality)
- Vars that are set but empty (often a mistake)
