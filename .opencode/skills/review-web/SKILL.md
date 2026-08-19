---
name: review-web
description: >
  Captures screenshots of a website at 3 standard viewports (desktop, tablet,
  mobile) using Chrome headless, then sends them to the vision agent for batch
  review with per-viewport and overall grades. Use when the user wants to review
  a website's visual quality, responsive layout, or cross-device appearance.
---

# Review Web

Captures 3 viewport screenshots of a website and batch-reviews them with the
vision agent.

## Standard viewports

| Viewport | Size | Why |
|---|---|---|
| Desktop | 1440×900 | Standard laptop/monitor width |
| Tablet portrait | 768×1024 | iPad-style portrait, tests mid-range layout |
| Mobile | 375×812 | iPhone-style portrait, tests narrow layout |

## Capture workflow

Given a URL, run 3 Chrome headless commands to capture each viewport:

```bash
# Desktop
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome \
  --headless --screenshot=/tmp/opencode/web-desktop.png \
  --window-size=1440,900 --disable-gpu "$URL"

# Tablet
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome \
  --headless --screenshot=/tmp/opencode/web-tablet.png \
  --window-size=768,1024 --disable-gpu "$URL"

# Mobile
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome \
  --headless --screenshot=/tmp/opencode/web-mobile.png \
  --window-size=375,812 --disable-gpu "$URL"
```

Ensure `/tmp/opencode/` exists before capturing.

## Review workflow

After all 3 screenshots are captured, launch the vision agent with a prompt
that includes all 3 image paths and asks for:

1. Per-viewport review (layout, typography, contrast, accessibility)
2. Per-viewport grade (A–F)
3. Cross-viewport overall grade
4. Systemic vs viewport-specific issues

Example vision agent prompt:

```
Please read and analyse THREE images of the same website at different viewport sizes.

Image 1 — Desktop (1440×900): /tmp/opencode/web-desktop.png
Image 2 — Tablet portrait (768×1024): /tmp/opencode/web-tablet.png
Image 3 — Mobile (375×812): /tmp/opencode/web-mobile.png

For each viewport, review layout, typography, contrast, UI elements, responsive
behaviour, and accessibility. Then provide per-viewport grades (A–F), an overall
cross-viewport grade, and a summary of systemic vs viewport-specific issues.
```

## Output

The skill returns the vision agent's full report including per-viewport grades
and an overall cross-viewport grade.
