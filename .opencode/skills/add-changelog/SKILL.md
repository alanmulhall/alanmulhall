---
name: add-changelog
description: >
  Adds a changelog entry following Keep a Changelog format. Use when the user
  wants to record a change in CHANGELOG.md, or after completing a feature or
  fix that needs a changelog entry.
---

# Add Changelog Entry

Record a change in the project's `CHANGELOG.md` using
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/) format with a
"Why" line on every entry.

## Which CHANGELOG.md

Each sub-app maintains its own. The root does **not** have one.

- `android/CHANGELOG.md` — Android app changes
- `web/CHANGELOG.md` — (does not exist yet; create if adding to web/)
- `admin/CHANGELOG.md` — (does not exist yet; create if adding to admin/)

## Format

Every entry goes under `## [Unreleased]` and uses one of these categories:

- `### Added` — new features or assets
- `### Changed` — changes to existing behaviour
- `### Fixed` — bug fixes
- `### Removed` — removed features
- `### Deprecated` — soon-to-be-removed features

Each bullet must include a **Why** at the end of the line. Pattern:

```markdown
- Short description of what changed. Why: reason for the change.
```

## How to add

1. Read the existing `CHANGELOG.md` for the target sub-app
2. Determine the correct category (Added, Fixed, Changed, etc.)
3. Add the entry as a bullet under the appropriate `###` heading inside
   `## [Unreleased]`
4. If the `###` heading doesn't exist yet, create it
5. Write a one-sentence "Why" — the reason behind the change, not just what
   happened

## Rules

- Commit the changelog entry in the same commit as the code change
- Never put entries in a separate follow-up commit
- Keep entries under 2 lines (description + Why)
- Use imperative voice ("Add coverage", not "Added coverage")
- One entry per logical change; group related files under one bullet
