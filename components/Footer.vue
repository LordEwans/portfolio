<template>
  <div
    class="w-full animate-border bg-[length:140%_140%] bg-gradient-to-tr from-slate-950 via-slate-950 to-cyan-950 px-16"
  >
    <footer>
      <div class="grid grid-cols-1 py-4">
        <div class="block text-sm">
          <nuxt-link to="https://github.com/LordEwans"
            >GitHub</nuxt-link
          >
        </div>
        <div class="block text-sm">
          <nuxt-link to="https://instagram.com/"
            >Instagram</nuxt-link
          >
        </div>
        <div class="block text-sm">
          <nuxt-link to="https://x.com/ewanretorokugbe"
            >X</nuxt-link
          >
        </div>
        <div class="block text-sm">
          <nuxt-link to="mailto:ewanretorokugbe@gmail.com"
            >Gmail</nuxt-link
          >
        </div>
        <div class="block text-sm">
          <nuxt-link to="https://youtube.com/"
            >Youtube</nuxt-link
          >
        </div>
        <div class="block text-sm">
          <nuxt-link to="https://linkedin.com/"
            >LinkedIn</nuxt-link
          >
        </div>
        <div class="block text-sm">
          <nuxt-link to="https://medium.com/"
            >Medium</nuxt-link
          >
        </div>
      </div>
      <div class="grid grid-cols-2 w-full py-4">
        <p class="text-sm">Ewanretor Giwa-Okugbe</p>
        <p class="text-sm justify-self-end mx-5">
          <nuxt-link to="https://nuxt.com"
            >Built With ❤️ Using The Power Of Nuxt</nuxt-link
          >
        </p>
      </div>
    </footer>
  </div>
</template>

<style>
footer {
  @apply bg-inherit py-8 grid grid-cols-1;
}
</style>
