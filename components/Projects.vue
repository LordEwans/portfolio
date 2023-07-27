<template class="h-screen overflow-hidden flex items-center justify-center">
  <div class="flex flex-col m-auto p-auto">
    <div class="flex overflow-x-scroll pb-10 hide-scroll-bar">
      <div class="flex flex-nowrap justify-evenly">
        <div class="inline-block px-3">
          <div
            class="w-52 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-slate-900 hover:shadow-xl transition-shadow duration-300 ease-in-out"
          ></div>
        </div>
        <div class="inline-block px-3">
          <div
            class="w-56 h-72 max-w-xs overflow-hidden rounded-lg shadow-md bg-slate-900 hover:shadow-xl transition-shadow duration-300 ease-in-out"
          ></div>
        </div>
        <div class="inline-block px-3">
          <div
            class="w-64 h-80 max-w-xs overflow-hidden rounded-lg shadow-md bg-slate-900 hover:shadow-xl transition-shadow duration-300 ease-in-out"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.hide-scroll-bar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.hide-scroll-bar::-webkit-scrollbar {
  display: none;
}
</style>
