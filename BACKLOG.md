# Backlog

| Item | Details | Priority | Effort |
|---|---|---|---|
| Resolve Vercel config drift | `web/vercel.json` declares a `@vercel/static-build` while the app is `ssr: true` with a working server action, and `@vercel/react-router` is installed but unused in `react-router.config.ts`. Confirm which config the deployment actually honors and delete the misleading one. | Medium | Small |
| Rebase `newsletter-signup` onto main | The branch predates the shared `EMAIL_RE`, contact validation, loader error handling, honeypot, and `WorkImage` changes — `web/app/routes/home.tsx` and `home.test.tsx` will conflict. | Medium | Medium |
| Add honeypot to newsletter signup form | The footer signup form (on the `newsletter-signup` branch) ships in the initial HTML, so it is more bot-exposed than the contact modal. Reuse the hidden "website" field pattern from the contact form. Land with the branch. | Medium | Small |
| Set `RESEND_AUDIENCE_ID` in Vercel | Create an audience in the Resend dashboard and add its ID as an env var. The signup action fails closed without it, so this must be in place before the newsletter feature ships. | High | Small |
