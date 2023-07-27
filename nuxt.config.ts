// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false, //When false  target: "static",
  modules: ["@nuxtjs/tailwindcss"],
  css: ["@/assets/css/main.css"],
});
