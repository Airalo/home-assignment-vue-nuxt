<!--
  Written by `dotai init`. Rule files live in .claude/rules/, so edit those; the
  .github/instructions/ copies are generated from them.
  Layout and which files are generated: docs/layout.md
  Guide: https://app.notion.com/p/airalo/AI-Instruction-Files-31960d1f44df8059a749e5d2fe261b56
-->

# Error Handling

Nuxt 4 app (`app/`) with one Nitro server route (`server/api/countries.get.ts`). There is
no custom error class, no logger and no error page yet, so the conventions below are short. Do
not invent extra layers. Follow the existing pattern and leave a `TODO:` where a decision is
still open.

## Hard rules

- Never swallow an error silently. Handle it (show it to the user or recover with a stated
  fallback) or let it propagate.
- Do not add a catch-all that hides the failure from the caller. A `catch` must rethrow, return
  a visible error state, or log and rethrow. An empty `catch {}` or `catch { return [] }` is
  not acceptable.
- Do not replace a failed API response with mock data or an empty list. The pages already have
  mock objects (`app/pages/index/*.vue`). These are placeholders and must not be used as error
  fallbacks.
- Do not print upstream request headers or the `Authorization` bearer value in error messages
  or logs.

## Server routes (`server/api/*.ts`)

Use the pattern already in `server/api/countries.get.ts`:

- Wrap the upstream `$fetch` call in `try/catch`.
- In `catch`, type the error as `unknown`, narrow it, and rethrow with h3's `createError`
  (auto-imported by Nitro):

  ```ts
  try {
    // upstream $fetch call
  } catch (error: unknown) {
    const err = error as { statusCode?: number; message?: string };
    throw createError({
      statusCode: err.statusCode ?? 500,
      statusMessage: err.message ?? 'Failed to fetch countries',
    });
  }
  ```

- Pass on the upstream status code when there is one, and fall back to `500` when there isn't.
- Always give a resource-specific fallback message (`'Failed to fetch <resource>'`).
- Throw. Never `return` an error object from a handler with a 200 status.

### Error response shape

Thrown `createError` errors are serialised by Nitro's default error handler. The repo has no
custom handler (no `server/error.ts`, no `nitro.errorHandler` in `nuxt.config.ts`), so clients
get Nitro's default JSON error body, with `statusCode` and `statusMessage` set as above.

- TODO: decide whether forwarding the raw upstream `err.message` as `statusMessage` is
  acceptable, or whether client-facing messages should be fixed strings.
- TODO: if a uniform error envelope is wanted for `/api/*`, a human needs to define it. Until
  then, do not invent one.

## Client side (`app/`)

No page fetches data yet. The pages render mock data, and a `preloader` flag plus
`<SharedPreloader />` (`app/components/shared/Preloader.client.vue`) are in place for loading
states. When you add fetching:

- Handle the error state that comes back with the data. If you use `useFetch` or
  `useAsyncData`, render something when `error` is set. Do not read only `data` and ignore
  `error`.
- Hide the preloader on both success and failure. A spinner that never stops is a silent
  failure.
- There is no `app/error.vue`, so fatal errors (`showError`, or errors thrown during SSR
  rendering) show Nuxt's built-in error page.
- TODO: UX for a failed list fetch (inline message, retry button, or error page). Product or
  design needs to supply this.

## Logging

- No logging library is installed. `console` is the only option, and `eslint.config.mjs`
  explicitly allows `console.warn`, `error`, `log`, `info`, `debug` and `trace` (the
  `no-console` override).
- Logging does not count as handling. If you `console.error` in a `catch`, still rethrow or
  surface the error.
- TODO: decide what belongs at each level (for example, `error` for failed upstream calls,
  `warn` for recoverable fallbacks) and whether leftover `console.log`/`debug` should block a
  merge.
- TODO: production error reporting (Datadog RUM, Sentry, etc.). Nothing is wired up in this
  repo.

## Retries

- No explicit retry policy exists. No call sets a `retry` option, and there is no retry helper.
- `$fetch` (ofetch) has its own default retry behaviour for some methods and status codes.
  Check the ofetch docs before you rely on it or override it.
- Do not add retry loops around non-idempotent calls (anything that creates an order or
  purchase).
- TODO: retry and timeout policy for the upstream `https://www.airalo.com/api/v2/*` calls.

## Before finishing

- `yarn lint`
- `npx tsc --noEmit`
- No test runner is configured, so error paths can't be checked automatically. Test them by
  hand with `yarn dev` (port 4000), for example by pointing the route at a bad URL and checking
  that the error reaches the UI.
