// https://nuxt.com/docs/api/configuration/nuxt-config
export default ({
  devtools: { enabled: true },
  target: "static",
  router: {
    base: "/LordEwan.github.com/",
  },
  modules: ["@nuxtjs/tailwindcss"],
  css: ["@/assets/css/main.css"],
});
