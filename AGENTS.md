<!--
  Written by `dotai init`. AGENTS.md is the canonical instruction file for this
  repo — every other tool file points here, so edit this one.
  Layout and which files are generated: docs/layout.md
  Guide: https://app.notion.com/p/airalo/AI-Instruction-Files-31960d1f44df8059a749e5d2fe261b56
-->

# home-assignment-vue-nuxt

Airalo eSIM storefront home assignment. Users browse Local, Regional and Global eSIMs.
Nuxt 4, Vue 3 (`<script setup lang="ts">`), TypeScript, Tailwind CSS v4. Node `^22.23.4 || ^24.15.0 || >=26.0.0` (`engines` in `package.json`), yarn 1.22.22 (`packageManager` in `package.json`).

The task spec is in `README.md` (user story, acceptance criteria, API endpoints, Figma link).

## Commands

- `yarn dev`: dev server on port 4000 (`devServer.port` in `nuxt.config.ts`)
- `yarn build` / `yarn generate` / `yarn preview`
- `yarn lint`: `eslint .`
- `yarn format`: `prettier --write .` (rewrites the whole repo, see Off Limits)
- `postinstall` runs `nuxt prepare`, which generates `.nuxt/`. `tsconfig.json` extends `.nuxt/tsconfig.json`, so typecheck fails until it exists.

## Architecture

Nuxt 4 layout: app code lives under `app/`, server code under `server/`.

- `app/app.vue`: root
- `app/layouts/default.vue`: wraps pages with header, content, app store banner and footer
- `app/pages/index.vue`: parent route. Renders Hero, Search and Tabs, then `<NuxtPage />` for the child routes:
  - `/` → `app/pages/index/index.vue` (Local / popular countries)
  - `/regional-esim` → `app/pages/index/regional-esim.vue`
  - `/global-esim` → `app/pages/index/global-esim.vue`
- `app/components/shared/`: Header, Footer, Hero, Tabs, Search, Preloader (`.client.vue`), AppStoreBanner, ExampleView
- `app/components/list/`: `Country.vue` (flag + name row), `Package.vue` (eSIM card)
- `app/types/index.ts`: shared types (`Country`, `Region`, `Package`, `Operator`, etc.). Import with `import type { ... } from '~/types'`.
- `server/api/countries.get.ts`: Nitro route at `/api/countries`. Proxies `https://www.airalo.com/api/v2/countries`.
- `app/assets/css/main.css`: Tailwind v4 config through `@theme` (breakpoints, colours, font sizes, line heights, tracking, radii, shadows, spacing). There is no `tailwind.config.*` file.

Current state: the pages hold mock data and render `SharedExampleView`, which is marked for removal. The real data fetching has not been written yet. Look for `<!-- You need to develop here -->`.

API: `runtimeConfig.public` exposes `apiBase` (`/api/v2`) and `apiBaseOld` (`https://airalo.com/api/v2`). No dev proxy is configured in `nuxt.config.ts`, and the only server route is `/api/countries`. Nothing currently serves `/api/v2`.
TODO: decide how regions, the country/region `{slug}` endpoints and the global endpoint get fetched (more `server/api/` routes or a proxy), then document it here.

## How We Write Code

- Vue SFCs use `<script setup lang="ts">`. Props are typed with `defineProps<{...}>()`. Script and style blocks are indented (`vueIndentScriptAndStyle`).
- Components are auto-imported with a directory prefix: `components/shared/Preloader.client.vue` → `<SharedPreloader />`. Don't add manual imports for them.
- Icons: `<Icon name="local:<file>" />` (`@nuxt/icon` custom collection `local` → `app/assets/icons/*.svg`). To add an icon, drop an SVG in that folder.
- Images: `<nuxt-img>` (`@nuxt/image`). Remote images come from `cdn.airalo.com`.
- Styling: Tailwind utility classes that use the theme tokens in `main.css` (`text-h2 leading-h2 tracking-h2`, `text-primary`, `shadow`, `rounded-flag`). Add new tokens to `@theme` rather than hardcoding values.
- Put API response types in `app/types/index.ts`, and make them match the real API response.
- Prettier: single quotes, semicolons, `trailingComma: es5`, `printWidth: 120`, plus `prettier-plugin-tailwindcss` for class ordering.
- ESLint (`eslint.config.mjs`, `@antfu/eslint-config` with stylistic rules off, plus `eslint-plugin-vuejs-accessibility`). Notable rules:
  - `vue/no-v-html`: error
  - `vue/require-typed-ref`: error. Write `ref<T>()`.
  - `eqeqeq` / `vue/eqeqeq`: error
  - a11y: `alt` is required on `NuxtImg`/`NuxtPicture`, labels need an `id` or nesting, and anchors (including `NuxtLink`) need content
- Server route errors: catch, then rethrow with `createError({ statusCode, statusMessage })`, as in `server/api/countries.get.ts`.

## Testing

No test runner or test files exist. `eslint.config.mjs` has an override for `tests/unit/**/*.ts`, but that directory does not exist.
TODO: choose a test runner (and the command) and set coverage expectations.

## Quality Gates

Run these in order after every change:

1. `yarn lint`
2. `npx tsc --noEmit`
3. TODO: name the test command for this repo (none configured yet)

If a gate fails, fix the smallest change that makes it pass. Rerun the same
gate. Do not continue until it passes.

TODO: confirm `npx tsc --noEmit` is the right typecheck. Plain `tsc` does not typecheck `.vue` SFCs, and `vue-tsc` is not installed, so errors inside components may be missed. `nuxi typecheck` (needs `vue-tsc`) is the usual Nuxt alternative.

## Definition of Done

- All gates pass
- No new lint warnings
- No secrets in code
- Tests cover the changed behaviour (once a test runner exists)
- Acceptance criteria in `README.md` are met: Local → country → packages, Regional → region → packages, Global → packages

## Off Limits

- Do not run `yarn format` repo-wide. Format only the files you changed.
- Do not change `eslint.config.mjs`, `.prettierrc`, `nuxt.config.ts` or `tsconfig.json` without explicit approval.
- Do not edit `yarn.lock` by hand, and do not switch package managers.
- Do not add new dependencies without justification
- Do not reformat files outside the scope of the task
- TODO: list any other files or directories the agent must not touch without approval

## Security

- Never log PII or card data
- `server/api/countries.get.ts` contains a hardcoded bearer token. Do not copy it into new code or add more hardcoded credentials. New secrets go in server-only `runtimeConfig` (not `runtimeConfig.public`), backed by `.env` (gitignored).
- TODO: decide whether the existing token is a secret that must be moved to `.env` and rotated
- Calls to `airalo.com` that need credentials must go through `server/api/` routes, never directly from client code.
- Do not use `v-html` (lint error). Render API strings through template interpolation.
- TODO: name this repo's input-validation pattern (none exists yet: `server/api/` routes take no input today)
- TODO: name this repo's auth requirement for new endpoints (there is no user auth: `LoginSignup.vue` is UI only)

## Rules

Modular rules live in `.claude/rules/` and are auto-loaded by Claude Code.
Copilot reads the transformed copies in `.github/instructions/`. Edit the
`.claude/rules/` originals — the `.github/` copies are generated.

Neither directory exists in this repo yet.
