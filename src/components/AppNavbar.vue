<template>
  <nav class="bg-white text-black p-4 md:px-8">
    <div class="flex justify-between items-center md:py-2">
      <img src="@/assets/logo.svg" alt="Logo" class="w-16 h-16" />
      <div class="block lg:hidden">
        <button class="text-black focus:outline-none" @click="toggleMenu">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      <ul class="hidden lg:flex gap-8">
        <li>
          <a href="#work" class="flex text-lg font-semibold">Our Work
            <span class="pl-2">
              <svg fill="#F6B600" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 451.847 451.847">
                <g>
                  <path d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z" />
                </g>
              </svg>
            </span>
          </a>
        </li>
        <li><a href="#about" class="text-lg font-semibold">About</a></li>
        <li><a href="#news" class="text-lg font-semibold">News</a></li>
        <li><a href="#teams" class="text-lg font-semibold">Team</a></li>
        <li><a href="#contact" class="text-lg font-semibold bg-orange text-black px-6 py-2 rounded hover:bg-yellow-500">Contact</a></li>
      </ul>
    </div>
    <div :class="{'block': menuOpen, 'hidden': !menuOpen}" class="lg:hidden bg-white text-black w-full">
      <ul class="p-4 space-y-2 text-center gap-5">
        <li><a href="#work" class="text-lg font-semibold">Our Work</a></li>
        <li><a href="#about" class="text-lg font-semibold">About</a></li>
        <li><a href="#news" class="text-lg font-semibold">News</a></li>
        <li><a href="#teams" class="text-lg font-semibold">Team</a></li>
        <li><a href="#contact" class="text-lg font-semibold bg-orange text-black px-6 py-3 rounded hover:bg-yellow-500">Contact</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppNavbar',
  data() {
    return {
      menuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    }
  }
}
</script>

<style scoped>
/* Scoped styles if any */
</style>
