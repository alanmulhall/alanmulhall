---
name: api-contract
description: >
  Checks that the API response shape in admin/ matches what web/ and android/
  expect. Use when the user wants to verify the API contract is in sync across
  all three clients, or after changing the admin controller or models.
---

# API Contract Check

The API contract is defined by the admin controller and consumed by web and
android. All three must agree on the response shape.

## Source of truth

The admin controller at `admin/app/controllers/api/images_controller.rb`
defines the response:

```json
{ "id": 1, "title": "West Cork", "medium": "Oil on canvas", "year": 2024,
  "position": 1, "url": "https://res.cloudinary.com/..." }
```

## How to check

### 1. Read the admin controller

Read `admin/app/controllers/api/images_controller.rb` and extract the exact
fields rendered in the JSON response.

### 2. Read the web consumer

Read `web/app/routes/home.tsx` — the loader fetches `GET /api/images` and
maps the response. Check that:
- Every field the controller sends is consumed or explicitly ignored
- Null handling matches (`title ?? ""`, `year ?? null`)
- No fields are assumed that the controller doesn't send

### 3. Read the web types

Read `web/app/types.ts` — the `WorkImage` interface should match what the
loader produces after normalization.

### 4. Read the android consumer

Read `android/app/src/main/java/com/alanmulhall/portfolio/data/WorkImageDto.kt`
— the `@Serializable` data class should match the wire shape exactly. Check
that nullable fields (`title`, `medium`, `year`) match the controller.

### 5. Read the android domain model

Read `android/app/src/main/java/com/alanmulhall/portfolio/data/WorkImage.kt`
— check that `toWorkImage()` normalizes the same way as the web loader.

## What to report

- Fields present in the controller but missing from a client (dangerous)
- Fields assumed by a client but not sent by the controller (will crash)
- Nullability mismatches (controller sends null, client assumes non-null)
- Normalization mismatches (different default values for null fields)

## Verdict

- **Sync** — all three clients agree on the contract
- **Drift** — mismatches found, specify which field and which client
