<!--
  Written by `dotai init`. Rule files live in .claude/rules/ — edit those; the
  .github/instructions/ copies are generated from them.
  Layout and which files are generated: docs/layout.md
  Guide: https://app.notion.com/p/airalo/AI-Instruction-Files-31960d1f44df8059a749e5d2fe261b56
-->

# Project Structure

This is a Nuxt 4 app (`nuxt@^4`). It uses the Nuxt 4 `app/` source directory. `server/` and `public/` stay at the repo root.

## Top-level layout

| Path | What it holds |
|------|---------------|
| `app/` | All client/universal source (Nuxt `srcDir`). The `~` alias points here, so `~/types` resolves to `app/types`. |
| `app/app.vue` | Root component. Renders `<NuxtPage />`. |
| `app/pages/` | File-based routes (see Routing below). |
| `app/layouts/default.vue` | Shell: `SharedHeader`, page slot, `SharedAppStoreBanner`, `SharedFooter`. |
| `app/components/shared/` | App-wide UI: Header (folder), Footer (folder), Hero, Tabs, Search, Preloader, AppStoreBanner, ExampleView. |
| `app/components/list/` | Data rows/cards: `Country.vue`, `Package.vue`. |
| `app/types/index.ts` | The single home for shared TypeScript types (API models such as `Country`, `Region`, `Package`, `Operator`, plus UI prop types). |
| `app/assets/css/main.css` | Global CSS and the Tailwind v4 theme (`@theme { … }`). There is no `tailwind.config` file. |
| `app/assets/icons/` | Local SVG icons, registered as the `local` collection for `@nuxt/icon`. |
| `server/api/` | Nitro server routes (currently `countries.get.ts`, which proxies the Airalo countries API). |
| `public/` | Static files served as-is (`favicon.ico`, `images/` with logos and hero image). |
| `nuxt.config.ts` | Modules (`@nuxt/image`, `@nuxt/icon`), runtime config (`apiBase`, `apiBaseOld`), icon collection, Tailwind Vite plugin, dev port 4000. |
| `eslint.config.mjs` | `@antfu/eslint-config` + `eslint-plugin-vuejs-accessibility`. |
| `tsconfig.json` | Extends the generated `./.nuxt/tsconfig.json`. |

Generated and ignored: `.nuxt/`, `.output/`, `.nitro/`, `.cache/`, `dist/`, `node_modules/`. Never edit or commit these.

## Routing

`app/pages/index.vue` is the parent route. It renders Hero + Search + Tabs, then `<NuxtPage />` for its children:

- `/` → `app/pages/index/index.vue` (Local eSIMs)
- `/regional-esim` → `app/pages/index/regional-esim.vue`
- `/global-esim` → `app/pages/index/global-esim.vue`

The tab list is hard-coded in `app/components/shared/Tabs.vue` (`tabs: TabItem[]`). A new top-level tab needs both a page in `app/pages/index/` and an entry there.

TODO: decide where per-country/per-region detail routes (e.g. `/{slug}`) should live. No dynamic route exists yet.

## Component naming (auto-import)

Components are auto-imported, and their names include the directory path as a prefix. Do not add explicit `import` statements for them.

- `components/shared/Hero.vue` → `<SharedHero />`
- `components/shared/Header/index.vue` → `<SharedHeader />`
- `components/shared/Header/Navigation.vue` → `<SharedHeaderNavigation />`
- `components/list/Package.vue` → `<ListPackage />`
- A `.client.vue` suffix makes a component client-only (see `Preloader.client.vue`).

Icons: `<Icon name="local:<file-name-without-.svg>" />`. Images: `<nuxt-img>`.

## Module boundaries

No lint rule or tooling enforces import boundaries. These are the conventions the code follows today:

- Types are imported with `import type { … } from '~/types'`. Add a new shared type to `app/types/index.ts` rather than defining it inline in several components.
- `list/` and `shared/` components are presentational. They take data through props and import only types. Pages own the data. The mock objects in `app/pages/index/*.vue` are placeholders until API integration is done.
- `SharedExampleView` and the "Mock View" blocks in the pages are marked in the code as temporary ("This component should be removed").
- Server code (`server/`) must not import from `app/`, and `app/` must not import from `server/`. Call server routes over HTTP (`/api/...`).
- There is no Pinia/Vuex. State lives in local `<script setup>` refs.

## Where new files go

| New thing | Location |
|-----------|----------|
| Page / route | `app/pages/index/<name>.vue` for a tab under the hero. Anything else needs a human decision (see Routing TODO). |
| Reusable UI used across pages | `app/components/shared/`. Use a folder with `index.vue` when it has sub-parts (like `Header/`, `Footer/`). |
| Row/card that renders an API item | `app/components/list/` |
| Shared TS type or API model | `app/types/index.ts` |
| Composable (`useX`) | `app/composables/` (standard Nuxt auto-import dir; does not exist yet, so create it on first need) |
| Pure helper function | `app/utils/` (standard Nuxt auto-import dir; does not exist yet) |
| Server/API proxy route | `server/api/<name>.<method>.ts` (e.g. `regions.get.ts`) |
| SVG icon | `app/assets/icons/<name>.svg` |
| Static image | `public/images/` |
| Global CSS / theme tokens | `app/assets/css/main.css` (`@theme` block) |
| Public runtime config value | `runtimeConfig.public` in `nuxt.config.ts` |

Do not add a new top-level directory, or a new folder directly under `app/` beyond the Nuxt conventions above, without approval.

TODO: `server/api/countries.get.ts` has a bearer token hard-coded in source. A human needs to decide whether the token should move to private `runtimeConfig` / `.env`, and where.

## Tests

No test runner is installed and there are no test files. `eslint.config.mjs` already has an override for `tests/unit/**/*.ts`, which suggests `tests/unit/` is the intended location.

TODO: choose a test runner and confirm `tests/unit/` as the test location.

## Commands

- `yarn dev`: dev server on port 4000
- `yarn build` / `yarn generate` / `yarn preview`
- `yarn lint`: ESLint
- `yarn format`: Prettier (with `prettier-plugin-tailwindcss`)
- `npx tsc --noEmit`: type check. This needs `.nuxt/` to exist, because `tsconfig.json` extends `.nuxt/tsconfig.json`. `yarn install` creates it through the `postinstall` script (`nuxt prepare`).

Package manager is yarn 1 (`packageManager: yarn@1.22.22`). Node `>=20.0.0` (`package.json` `engines`).
