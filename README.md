# Alan Mulhall

[![Maintainability](https://qlty.sh/gh/alanmulhall/projects/alanmulhall/maintainability.svg)](https://qlty.sh/gh/alanmulhall/projects/alanmulhall)

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
| `newsletter_signup` | — | Fired when the email updates signup is successfully submitted |
