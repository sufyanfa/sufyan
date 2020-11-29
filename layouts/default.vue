<template>
  <div class="antialiased bg-white dark:bg-gray-900">
    <Nuxt />
    <ColorMode />
    <Langauge />
    <Navbar />
    <Contact />
  </div>
</template>
<script>
import ColorMode from '../components/ColorMode.vue'
import Langauge from '../components/Langauge.vue'
import Navbar from '../components/Navbar.vue'
import Contact from '../components/Contact.vue'
export default {
  components: { ColorMode,Langauge, Navbar , Contact },
}
</script>
<style>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
