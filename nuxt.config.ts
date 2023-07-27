// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig ({
  devtools: { enabled: true },
  app: {
    baseURL: "/LordEwan.github.com/",
  },
  modules: ["@nuxtjs/tailwindcss"],
  css: ["@/assets/css/main.css"],
});
