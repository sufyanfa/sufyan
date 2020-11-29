<template>
    <div class="fixed bottom-0 left-0 mb-4 ml-10">
      <button @click="toggle" class="relative overflow-hidden px-4 flex items-center bg-gray-800 text-gray-100 dark:bg-gray-100 dark:text-gray-800 rounded-full h-10 outline-none focus:outline-none transition-colors duration-300 ease-linear">
        <span class="relative mr-2 overflow-hidden w-5 h-5 flex items-center justify-center" data-v-49aa6019="">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path v-if="$colorMode.preference == 'dark' " stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
            <path v-if="$colorMode.preference == 'light' " stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
          </svg>
        </span>
        <span v-if="$colorMode.preference == 'dark' " class="inline-block font-medium mr-1">
          Light
        </span>
        <span v-if="$colorMode.preference == 'light' " class="inline-block font-medium mr-1">
          Dark
        </span>
    </button>
    </div>
</template>
<script>
export default {
    methods: {
    toggle() {
      this.$colorMode.preference =
        this.$colorMode.value == "light" ? "dark" : "light";
    }
  }
}
</script>