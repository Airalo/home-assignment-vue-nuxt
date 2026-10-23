import antfu from '@antfu/eslint-config';
import pluginVueA11y from 'eslint-plugin-vuejs-accessibility';

export default antfu(
  {
    stylistic: false,
    typescript: true,
    vue: true,
    ignores: ['.docs/', '.storybook/', 'public'],
  },
  ...pluginVueA11y.configs['flat/recommended'].map((config) => ({
    ...config,
    files: ['**/*.vue'],
  })),
  {
    name: 'vue-overrides',
    files: ['**/*.vue'],
    plugins: {
      'vuejs-accessibility': pluginVueA11y,
    },
    rules: {
      'vue/no-multiple-template-root': 'off',
      // Prevents v-html usage to avoid XSS attacks. Use v-base-sanitized-html directive instead.
      'vue/no-v-html': 'error',
      'vue/multi-word-component-names': 'off',
      'vue/require-typed-ref': 'error',
      'vue/eqeqeq': 'error',
      'vuejs-accessibility/label-has-for': [
        'error',
        {
          required: {
            some: ['id', 'nesting'],
          },
        },
      ],
      'vuejs-accessibility/alt-text': [
        'error',
        {
          img: ['NuxtImg', 'NuxtPicture'],
        },
      ],
      'vuejs-accessibility/anchor-has-content': [
        'error',
        {
          components: ['NuxtLink', 'UiLink'],
        },
      ],
      'vuejs-accessibility/no-autofocus': 'off',
    },
  },
  {
    rules: {
      // overriding antfu's eslint config: allowing more than just warn, error
      'no-console': ['error', { allow: ['warn', 'error', 'log', 'info', 'debug', 'trace'] }],
      eqeqeq: 'error',
      'node/prefer-global/process': 'off',
      '@typescript-eslint/no-explicit-any': 'warn', // - warning but we could decide also for error
      '@typescript-eslint/no-floating-promises': 'off', // often causes unsolvable conflicts, not every async function must be called with await
      'ts/no-explicit-any': 'off',
    },
  },
  {
    name: 'unit-tests-override',
    files: ['tests/unit/**/*.ts'],
    rules: {
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
    },
  }
);
