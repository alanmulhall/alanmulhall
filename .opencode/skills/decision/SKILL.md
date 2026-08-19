---
name: decision
description: >
  Creates or updates DECISIONS.md with a structured decision record (context,
  decision, alternatives, consequences). Use when the user is making an
  architectural choice that needs documentation, or when recording a decision
  before implementing code.
---

# Decision Record

Record architectural decisions in `DECISIONS.md` with full rationale.

## Which DECISIONS.md

Each sub-app maintains its own. The root does **not** have one.

- `android/DECISIONS.md` — Android app decisions (exists, has 6 entries)
- `web/DECISIONS.md` — (does not exist yet; create if adding to web/)
- `admin/DECISIONS.md` — (does not exist yet; create if adding to admin/)

## Format

Each entry follows this structure:

```markdown
## NNN — Short title describing the decision

- **Date:** YYYY-MM-DD
- **Status:** Accepted

### Context

What is the situation? What constraint or problem needs solving?
Keep it factual — what existed before this decision?

### Decision

What did we choose? Be specific enough that a new contributor can understand
the choice without asking.

### Alternatives considered

- **Option A:** brief description — why it was rejected
- **Option B:** brief description — why it was rejected

### Consequences

What follows from this decision? Include both positive and negative effects.
Be concrete: "X is now possible" or "Y becomes harder".
```

## How to add

1. Read the existing `DECISIONS.md` for the target sub-app
2. Determine the next sequence number (NNN)
3. Add the entry at the end of the file
4. Use today's date
5. Write the context, decision, alternatives, and consequences
6. Commit the entry in the same commit as the code it documents

## Rules

- One entry per decision; don't combine multiple decisions in one entry
- Commit the decision record in the same commit as the code change
- Never put decision records in a separate follow-up commit
- Use imperative voice in the Decision section
- Keep the title concise but specific (max ~60 chars)
- Status is usually "Accepted"; use "Superseded by NNN" if a later decision
  replaces this one
