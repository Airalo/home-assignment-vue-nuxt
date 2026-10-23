<!--
  Written by `dotai init`. Rule files live in .claude/rules/ — edit those; the
  .github/instructions/ copies are generated from them.
  Layout and which files are generated: docs/layout.md
  Guide: https://app.notion.com/p/airalo/AI-Instruction-Files-31960d1f44df8059a749e5d2fe261b56
-->

# PRs and Commits

The history so far does not follow a convention. Subjects are plain imperative sentences (`Fix ESLint config and apply linting/formatting across codebase`), and none of them have a type prefix or ticket number. Use the convention below for all new commits and PRs. Do not rewrite existing history.

## Commit messages

- Use conventional commits, followed by the ticket number in parentheses:
  `feat(scope): add the thing (TICKET-123)`
- Use these types: `feat`, `fix`, `refactor`, `chore`, `docs`, `style`, `build`, `ci`, `perf`, `test`.
  - `build` covers dependency, Nuxt, Tailwind and tooling upgrades (for example the Nuxt 4 / Tailwind v4 migration).
  - `style` covers formatting-only changes from `yarn format` / `yarn lint`.
- The scope is optional. When you use one, take it from the area of the codebase you touched, for example `components`, `pages`, `server`, `types`, `config`, `deps`.
- Write the subject in the imperative and lowercase it after the colon. Do not end it with a period. This keeps the imperative style the history already uses (`Add`, `Fix`, `Remove`, `Migrate`).
- Make one logical change per commit. Do not mix a dependency bump, a lint sweep and a feature in one commit.
- TODO: confirm the Jira project key for this repo. The only ticket-like reference in the history is a placeholder (`UXP-0000` in branch `fix/UXP-0000-update-readme`). Also state what to do when no ticket exists, for example whether to omit the parentheses.

## Branches

- Name branches `<type>/<TICKET-123>-short-description`, using the same type as the commit. Existing branches already use prefixed names: `build/nuxt-4-migration`, `fix/UXP-0000-update-readme`, `feature/remove-unnecessary-code`.
- TODO: confirm whether the branch prefix should be `feature/` (used in the history) or `feat/` (matching the commit type).

## Pull requests

- PRs merge into `main` through a GitHub merge commit (`Merge pull request #N from Airalo/<branch>`).
- The PR title follows the same convention as the commit: `type(scope): summary (TICKET-123)`.
- The PR description says what changed and why, and names how it was verified, for example by listing the commands run and the pages checked in `yarn dev` (`/`, `/regional-esim`, `/global-esim`).
- TODO: there is no PR template in `.github/`. Add one, or name the required sections here.

## Before pushing

Run the local quality gates before you push, not after the PR gets comments:

- `yarn lint`
- `npx tsc --noEmit`
- `yarn build` (catches Nuxt build errors the linter and typecheck miss)

No test runner is configured, so there is no test step. No commit hooks (Husky, commitlint) or CI workflows exist in the repo either, so nothing enforces these rules automatically.
