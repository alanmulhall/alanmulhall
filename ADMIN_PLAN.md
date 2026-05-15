# Admin App Plan

## Overview
A Rails 8 app to manage portfolio images and metadata, with:
- JSON API consumed by the React Router frontend
- Tabler-themed admin UI for uploading and managing images
- Cloudinary for image storage
- PostgreSQL database
- Hosted on Railway

## Folder Structure
```
alanmulhall/
├── web/      ← React Router portfolio frontend (current app)
└── admin/    ← Rails app (to be built)
```

## Stack
- Rails 8 (full, not API-only)
- PostgreSQL
- Active Storage + Cloudinary
- HTTP Basic Auth to protect admin routes
- Tabler (open source admin theme via CDN)
- RSpec + FactoryBot for tests
- Railway for hosting

## Rails App

### Image model
```
images: id | title | medium | year | position | created_at
```
- Image file attached via Active Storage (stored on Cloudinary in production, local disk in development)
- `position` integer controls slider order

### Admin UI (Tabler theme, HTTP Basic Auth protected)
- `GET  /admin/images`          — list with thumbnails, title, edit/delete buttons
- `GET  /admin/images/new`      — upload form (file + title + medium + year + position)
- `GET  /admin/images/:id/edit` — pre-populated edit form
- Up/down buttons to adjust position order

### JSON API (consumed by React Router frontend)
- `GET /api/images` — returns ordered array of images with Cloudinary URLs and metadata

### JSON response shape
```json
[
  {
    "id": 1,
    "title": "West Cork",
    "medium": "Oil on canvas",
    "year": 2024,
    "position": 1,
    "url": "https://res.cloudinary.com/..."
  }
]
```

## Tests (RSpec)
- Request spec: `GET /api/images` returns correct JSON, ordered by position
- Request spec: admin create requires Basic Auth
- Request spec: admin create uploads image and saves metadata
- Request spec: admin update changes metadata
- Request spec: admin delete removes image

## Gems
- `cloudinary`
- `rspec-rails`
- `factory_bot_rails`
- `shoulda-matchers`

## Environment Variables
- `CLOUDINARY_URL` — from Cloudinary dashboard
- `DATABASE_URL` — set automatically by Railway Postgres plugin
- `ADMIN_USERNAME` — HTTP Basic Auth username
- `ADMIN_PASSWORD` — HTTP Basic Auth password

## Railway Deploy
- Add `Procfile`: `web: bundle exec puma -C config/puma.rb`
- Configure `database.yml` to use `DATABASE_URL`
- Set env vars in Railway dashboard
- Provision Postgres plugin

## Frontend Integration (web/)
- Replace filesystem loader in `web/app/routes/home.tsx` with a fetch to `GET /api/images`
- Apply Cloudinary transform to URLs: append `w_1200,q_80,f_auto` for optimised delivery
- Update `getWorkImages` utility or replace it entirely with an API call

## Prerequisites
- rbenv + Ruby 3.3
- Rails 8 (`gem install rails`)
- Cloudinary account (free tier)
- Railway account
