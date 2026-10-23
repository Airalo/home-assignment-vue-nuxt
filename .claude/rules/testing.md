<!--
  Written by `dotai init`. Rule files live in .claude/rules/ — edit those; the
  .github/instructions/ copies are generated from them.
  Layout and which files are generated: docs/layout.md
  Guide: https://app.notion.com/p/airalo/AI-Instruction-Files-31960d1f44df8059a749e5d2fe261b56
-->

# Testing

## Current state

- Test framework: none. `package.json` has no test runner dependency (no Vitest, Jest, `@nuxt/test-utils`, Playwright or Cypress) and no `test` script.
- No test files are tracked. `git ls-files` shows no `*.test.*` or `*.spec.*` files and no `tests/` or `__tests__/` directories.
- No CI is configured (there is no `.github/` directory), so nothing runs checks on PRs.
- No coverage threshold is enforced, because there is no coverage tool.
- TODO: decide whether this repo should have automated tests. If yes, name the framework (e.g. Vitest with `@nuxt/test-utils`), add a `test` script to `package.json`, and update this file.
- TODO: once a runner exists, state where tests live (e.g. next to components or under `test/`) and how files are named.
- TODO: if a coverage target is adopted, write the number here.

## Checks that exist today

Until a test suite exists, verify a change with these checks:

- Lint: `yarn lint` (runs `eslint .` with `@antfu/eslint-config` and `eslint-plugin-vuejs-accessibility`, configured in `eslint.config.mjs`).
- Build: `yarn build` (`nuxt build`). Run it to catch compile and template errors that lint does not catch.
- Manual check: `yarn dev`, then open the three routes your change touches: `/`, `/regional-esim`, `/global-esim`.
- TODO: confirm the typecheck command. `npx tsc --noEmit` was suggested, but `typescript` is not a direct dependency and there is no `node_modules/.bin/tsc`. Also, `tsc` does not check `.vue` files. Nuxt's usual command is `nuxt typecheck`, which needs `vue-tsc`, and `vue-tsc` is not installed either. Add the dependency and a script before relying on either command.

Do not add a test runner, test dependencies or a CI workflow unless the task asks for it.

## Rules for when tests are added

- Cover the changed behaviour, not the implementation detail
- Prefer fixtures over ad-hoc setup duplicated across tests
- The pages fetch from the external Airalo API (`/api/v2/countries`, `/api/v2/regions`, `/api/v2/regions/world`) through `server/api/countries.get.ts` and the dev proxy. Tests must not call the live API. Mock it, and build fixtures from the shapes in `app/types/index.ts`.
- A failing test is fixed by changing the code, not by weakening the assertion
