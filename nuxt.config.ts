// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/css/main.css"],

  app: {
    head: {
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap",
        },
      ],
    },
  },

  runtimeConfig: {
    public: {
      apiBaseOld: "https://airalo.com/api/v2",
      apiBase: "/api/v2",
    },
  },

  modules: ["@nuxt/image-edge", "nuxt-icons"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  vite: {
    server: {
      proxy: {
        "/api": {
          target: "https://airalo.com",
          changeOrigin: true,
        },
      },
    },
  },
});
