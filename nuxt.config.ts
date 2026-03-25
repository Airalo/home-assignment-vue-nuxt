import tailwindcss from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devServer: {
    port: 4000,
  },

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap',
        },
      ],
    },
  },

  runtimeConfig: {
    public: {
      apiBaseOld: 'https://airalo.com/api/v2',
      apiBase: '/api/v2',
    },
  },

  modules: ['@nuxt/image', '@nuxt/icon'],

  icon: {
    customCollections: [
      {
        prefix: 'local',
        dir: './app/assets/icons',
        normalizeIconName: false,
      },
    ],
  },

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ['@vue/devtools-core', '@vue/devtools-kit'],
    },
  },
});
