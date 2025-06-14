// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4,
  },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxt/eslint", "@nuxt/ui", "@nuxtjs/mdc"],
  runtimeConfig: {
    openaiApiKey: "Your Key",
    geminiApiKey: "Your Key",
    anthropicApiKey: "Your Key",
    togetherApiKey: "Your Key",
    deepseekApiKey: "Your Key",
    public: {
      ApiKey: "Your Public Key",
    },
  },
  mdc: {
    highlight: {
      theme: "material-theme-palenight",
      langs: ["html", "markdown", "vue", "typescript", "javascript"],
    },
  },
});
