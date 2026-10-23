<!--
  Written by `dotai init`. Rule files live in .claude/rules/ — edit those; the
  .github/instructions/ copies are generated from them.
  Layout and which files are generated: docs/layout.md
  Guide: https://app.notion.com/p/airalo/AI-Instruction-Files-31960d1f44df8059a749e5d2fe261b56
-->

# Security

## Trust boundaries in this repo

- The browser code (`app/`) talks to Nitro server routes (`server/api/`), and those routes call the upstream Airalo API (`https://www.airalo.com/api/v2/`). Treat each hop as a trust boundary.
- Upstream API data is untrusted, and so is anything from the browser: route params, query strings and request bodies. The interfaces in `app/types/index.ts` only check types at compile time. They do not validate anything at runtime.
- Any call that needs a credential must go through a server route in `server/api/`. Never send credentials from `app/` code.

## Secrets

- Never commit secrets. `.env` is gitignored. Put local values there, never in source.
- Never put a secret in `runtimeConfig.public` in `nuxt.config.ts`. Everything under `public` ships to the browser. Server-only values belong in a non-public `runtimeConfig` key, read inside `server/` with `useRuntimeConfig(event)`.
- Known violation: `server/api/countries.get.ts:1` hardcodes a bearer token (`uuidv4`). It has been in git history since the initial commit. Do not copy this pattern into new routes. Do not move the value somewhere else in source either. Read it from runtime config instead.
- TODO: say whether the hardcoded token in `server/api/countries.get.ts` is a live credential, and if so who rotates it.
- TODO: name where secrets live in deployed environments (secrets manager / CI variables) and the env var names the app expects. No `.env.example` exists yet.

## Input validation

- No runtime validation layer exists yet. The one server route (`server/api/countries.get.ts`) takes no client input.
- TODO: choose the validation pattern for new server routes that accept params, query or body (for example h3's `getValidatedQuery` / `readValidatedBody` with a schema library). Until a team member decides, ask before adding a validation dependency.
- Never interpolate client input into upstream URLs without validating it first. For example, check that a `{slug}` for `/countries/{slug}` or `/regions/{slug}` matches an expected slug shape.

## Rendering untrusted data (XSS)

- `vue/no-v-html` is set to `error` in `eslint.config.mjs`. Do not disable it, inline or in config. The config comment mentions a `v-base-sanitized-html` directive, but that directive does not exist in this repo. TODO: add a sanitizing directive, or remove that comment.
- `Package.vue:28` builds an inline `:style` from `operator.gradient_start` / `gradient_end`. Today the values are mock data in `app/pages/index/*.vue`. When they come from the API, check they are colour values before they reach the style string.
- Before binding API-provided URLs to `:href` / `:src` (Footer links, `Country.vue`, `Package.vue` images), check they use `https:` or are relative. Keep the existing `cdn.airalo.com` fallbacks.

## Auth

- The app has no authentication yet. The Log in / Sign up links in `app/components/shared/Header/LoginSignup.vue` are `href="#"` placeholders, and `server/` has no middleware.
- TODO: name the auth mechanism and the rule for new server routes (which need auth, and where the check lives, e.g. `server/middleware/`).

## Logging, errors and PII

- Never log PII, credentials or card data. Never log request headers, because `Authorization` is attached in `server/api/countries.get.ts`. ESLint's `no-console` rule allows `log`/`info`/`debug`, so lint will not catch this.
- Do not send raw upstream error details to the client. `countries.get.ts` currently returns `err.message` as `statusMessage`. New routes should return a generic message.
- The app handles no customer PII today. TODO: link the relevant section of Airalo's Data Management Policy before adding checkout, account or analytics features.

## General

- Never weaken an existing validation, lint or auth check to make something pass.
- Run `yarn lint` (it includes the `vue/no-v-html` rule) and `npx tsc --noEmit` before proposing a change.
