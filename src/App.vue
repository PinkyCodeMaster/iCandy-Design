<template>
  <div id="app">
    <AppNavbar />
    <main class="px-4 py-8 lg:px-36 mx-auto bg-black">
      <div class="my-8">
        <div class="flex items-center mb-4">
          <div class="line"></div>
          <h1 class="text-white text-4xl sm:text-6xl ml-4 heading">GALLERY</h1>
        </div>
        <div class="flex justify-between">
          <div></div>
          <a href="#gallery" class="hidden md:block bg-orange text-black px-6 py-2 font-bold hover:bg-yellow-500">Discover Our Gallery</a>
        </div>
      </div>
      <div class="flex items-center text-white py-4">
        <div class="flex items-center space-x-2">
          <a href="#hill" class="hover:underline">Hill</a>
          <span>|</span>
          <a href="#ironworks" class="hover:underline">Ironworks</a>
          <span>|</span>
          <a href="#cambridge" class="hover:underline">Cambridge</a>
        </div>
        <span class="text-yellow-500 ml-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
      <section id="gallery" class="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div class="col-span-1 grid gap-4">
          <div class="relative w-full h-64 overflow-hidden">
            <img src="@/assets/lion.jpeg" alt="lion" class="object-cover w-full h-full" />
          </div>
          <div class="relative w-full h-64 overflow-hidden">
            <img src="@/assets/flamingo.jpeg" alt="flamingo" class="object-cover w-full h-full" />
          </div>
        </div>
        <div class="relative md:col-span-2 row-span-2 w-full h-64 md:h-full overflow-hidden">
          <img src="@/assets/elephant.jpeg" alt="elephant" class="object-cover w-full h-full object-left" />
        </div>
        <div class="relative col-span-1 row-span-2 w-full h-64 md:h-full overflow-hidden">
          <img src="@/assets/giraffe.jpeg" alt="giraffe" class="object-cover w-full h-full object-[right_20%]" />
        </div>
      </section>
      <div class="md:hidden text-right my-8">
        <a href="#gallery" class="bg-orange text-black px-6 py-2 font-bold hover:bg-yellow-500">Discover Our Gallery</a>
      </div>
    </main>
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue';

export default {
  name: 'App',
  components: {
    AppNavbar,
  },
};
</script>

<style>
.line {
  width: 50px;
  height: 4px;
  background-color: #F6B600;
}

body {
  font-family: 'Open Sans', sans-serif;
}

.heading {
  font-family: 'Oswald', sans-serif;
}
</style>
