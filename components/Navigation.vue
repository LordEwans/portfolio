<template>
  <header class="grid grid-cols-2 py-[.2em] w-full z-30 will-change-transform">
    <div class="px-[2em] py-[1em] block text-lg">
      <nuxt-link to="/" class="uppercase font-black text-white"
        >Lord Ewan</nuxt-link
      >
    </div>
    <nav class="flex justify-self-end">
      <ul class="flex">
        <li>
          <nuxt-link to="#skills" class="partials">Skills</nuxt-link>
        </li>
        <li>
          <nuxt-link to="#contact" class="partials">Contact</nuxt-link>
        </li>
      </ul>
      <!-- <button>
        <img src="assets/img/animated/day.svg" alt="Default" />
      </button> -->
    </nav>
  </header>
</template>

<style>
li {
  @apply inline mx-4 md:mx-8 my-4;
}
.partials {
  @apply inline-block uppercase font-bold text-white text-sm;
}
</style>
