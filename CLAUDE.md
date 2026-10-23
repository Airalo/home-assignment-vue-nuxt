# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Airalo eSIM storefront — a Nuxt 3 application for browsing and purchasing eSIMs (Local, Regional, Global). Built with Vue 3, TypeScript, and Tailwind CSS.

## Commands

- `npm run dev` — Start dev server with hot reload
- `npm run build` — Production build
- `npm run generate` — Static site generation
- `npm run preview` — Preview production build

No test runner or linter is configured.

## Architecture

### Routing (file-based)

- `/` → Local eSIMs (popular countries) — `pages/index/index.vue`
- `/regional-esim` → Regional eSIMs — `pages/index/regional-esim.vue`
- `/global-esim` → Global eSIM — `pages/index/global-esim.vue`

`pages/index.vue` is the parent route wrapper; child routes render inside it.

### API Integration

External API at `https://www.airalo.com/api/v2/` is proxied through Vite dev server (`/api` → `https://airalo.com`) and a Nuxt server route (`server/api/countries.get.ts`) to avoid CORS.

Key endpoints:

- Countries: `/api/v2/countries`, `/api/v2/countries?type=popular`, `/api/v2/countries/{slug}`
- Regions: `/api/v2/regions`, `/api/v2/regions/{slug}`
- Global: `/api/v2/regions/world`

Runtime config exposes `apiBase` ("/api/v2") and `apiBaseOld` ("https://airalo.com/api/v2").

### Components

- `components/shared/` — Reusable UI: Header, Footer, Hero, Tabs, Search, Preloader, AppStoreBanner, ExampleView
- `components/list/` — Data display: `Country.vue` (flag + name + expand arrow), `Package.vue` (eSIM card with gradient header, data/validity/price, buy button)
- `layouts/default.vue` — Wraps pages with Header, content slot, AppStoreBanner, Footer

### State Management

No Pinia/Vuex. Components use local reactive state via `<script setup>`. Pages currently contain mock data objects as placeholders for API integration.

### Styling

- Tailwind CSS with custom config: breakpoints (sm/md/lg/xl at 1110px), color palette (primary gray #4A4A4A, secondary #8A8A8A, body bg #FAFAFA), typography sizes (h1-h6, body, CTA), custom shadows and border radii
- Font: IBM Plex Sans (loaded via Google Fonts in nuxt.config.ts)
- Global styles in `assets/css/main.css`

### Icons & Images

- SVG icons in `assets/icons/`, rendered via `<nuxt-icon :name="...">`
- Images optimized with `<nuxt-img>` from @nuxt/image-edge
- External images from `cdn.airalo.com`

## Node Version

Requires Node >= 16.0.0 and < 20.0.0. Uses pnpm-compatible settings (`.npmrc`: `shamefully-hoist=true`).
