<!--
  Written by `dotai init`. Rule files live in .claude/rules/ — edit those; the
  .github/instructions/ copies are generated from them.
  Layout and which files are generated: docs/layout.md
  Guide: https://app.notion.com/p/airalo/AI-Instruction-Files-31960d1f44df8059a749e5d2fe261b56
-->

# Code Style

Formatting is owned by Prettier (`.prettierrc`). ESLint (`eslint.config.mjs`, built on `@antfu/eslint-config` with `stylistic: false`) checks code quality only, not formatting.

## Formatting (Prettier)

- Run `yarn format` (`prettier --write .`) instead of formatting by hand
- Use 2 spaces for indentation
- Indent the contents of `<script>` and `<style>` blocks in `.vue` files (`vueIndentScriptAndStyle: true`)
- Use single quotes for strings
- End statements with semicolons
- Limit line length to 120 characters
- Use trailing commas wherever ES5 allows them (multiline objects, arrays, imports and exports), but not after function parameters or arguments (`trailingComma: "es5"`)
- Always wrap arrow function parameters in parentheses, even when there is only one: `(x) => x`
- Put spaces inside object braces: `{ foo }`
- Let `prettier-plugin-tailwindcss` sort Tailwind classes (stylesheet: `app/assets/css/main.css`) rather than ordering them by hand
- Don't reflow Markdown prose (`proseWrap: "preserve"`)

## Linting (ESLint)

- Run `yarn lint` and resolve all errors before committing
- Always use strict equality (`===` / `!==`). `eqeqeq` and `vue/eqeqeq` are both `error`, with no `null` exception
- Eliminate unused variables and imports. Prefix intentionally unused arguments with `_`
- Use `const` unless a variable is reassigned. Never use `var`
- Always handle error parameters in callbacks (`node/handle-callback-err` for parameters named `err` or `error`)
- Avoid `any`. `ts/no-explicit-any` is disabled, but the config's intent is to warn on it
- `console.log`, `info`, `debug`, `trace`, `warn` and `error` are allowed. Other `console` methods are errors
- TODO: decide whether to keep the `@typescript-eslint/*` overrides in `eslint.config.mjs`. The antfu config renames that plugin to `ts/*`, so those overrides probably have no effect. This needs verifying.

## Imports

- Put all imports at the top of the file (`import/first`), with no duplicate imports from the same module
- Import types with separate `import type { ... }` statements (`ts/consistent-type-imports`)
- Order imports by group, then naturally ascending within each group (`perfectionist/sort-imports`; run `yarn lint --fix` to apply):
  1. Type imports (external, then parent, sibling, index and internal)
  2. Node built-ins
  3. External packages
  4. Internal aliases
  5. Relative imports (parent, sibling, index)
  6. Side-effect imports
- Sort named imports and exports naturally ascending (`perfectionist/sort-named-imports`, `sort-named-exports`)
- Blank lines between import groups are neither required nor forbidden

## TypeScript

- Use `interface` rather than `type` for object type definitions (`ts/consistent-type-definitions`)
- Use property-style method signatures in types: `foo: () => void`, not `foo(): void`
- Use `@ts-expect-error` only with a description. Don't use `@ts-ignore`
- Type-check with `npx tsc --noEmit` (`tsconfig.json` extends the generated `.nuxt/tsconfig.json`, so run `nuxt prepare` / `yarn install` first)

## Vue SFCs

- Order blocks `<script>`, `<template>`, `<style>`
- Order macros `defineOptions`, `defineProps`, `defineEmits`, `defineSlots`
- Use PascalCase for component names in templates
- Use camelCase for custom event names
- Give `ref()` an explicit type when it has no initial value (`vue/require-typed-ref`)
- Never use `v-html` (`vue/no-v-html` is `error`, to prevent XSS)
- TODO: name the approved way to render sanitized HTML. The lint comment points to a `v-base-sanitized-html` directive that doesn't exist in this repo
- Single-word component names and multiple template roots are allowed

## Accessibility (`eslint-plugin-vuejs-accessibility`, `.vue` files)

- Give every `<img>`, `<NuxtImg>` and `<NuxtPicture>` an `alt`
- Give every `<a>`, `<NuxtLink>` and `<UiLink>` content
- Associate every form label with its control, either by `id` or by nesting it
- `autofocus` is allowed

## Out of scope

- Lint ignores `.docs/`, `.storybook/` and `public`
- Prettier ignores build output (`.nuxt`, `.output`, `dist`, …), `node_modules`, `.env*` and `assets/lottieAnimations`
