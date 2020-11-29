<template>
<div class="flex items-center mt-10">
  <div class="p-4 w-full">
    <div class="grid grid-cols-12 gap-4">
      <div class="col-span-3 md:col-span-2" v-for="item in skills" :key="item.id">
        <div class="flex flex-row bg-white dark:bg-gray-800 shadow-lg rounded p-4">
          <img class="h-10 w-10 mx-auto" :src="item.icon" alt="">
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  data() {
      return {
        skills : [
          {
            "id": 1,
            "name": 'آرام',
            "icon": "/images/skills/python.svg",
          },
          {
            "id": 2,
            "name": 'آرام',
            "icon": "/images/skills/javascript.svg",
          },
          {
            "id": 3,
            "name": 'آرام',
            "icon": "/images/skills/php.svg",
          },
          {
            "id": 4,
            "name": 'آرام',
            "icon": "/images/skills/vue.svg",
          },
          {
            "id": 5,
            "name": 'آرام',
            "icon": "/images/skills/nuxtjs.svg",
          },
          {
            "id": 6,
            "name": 'آرام',
            "icon": "/images/skills/laravel.svg",
          },
          {
            "id":7,
            "name": 'آرام',
            "icon": "/images/skills/pentest.svg",
          },
          {
            "id": 8,
            "name": 'آرام',
            "icon": "/images/skills/git.svg",
          },
          {
            "id": 9,
            "name": 'آرام',
            "icon": "/images/skills/mysql.svg",
          },
          {
            "id": 10,
            "name": 'آرام',
            "icon": "/images/skills/postgersql.svg",
          },
          {
            "id": 11,
            "name": 'آرام',
            "icon": "/images/skills/tailwindcss.svg",
          },
          {
            "id": 11,
            "name": 'آرام',
            "icon": "/images/skills/linux.svg",
          },
        ],
      }
    },
}
</script>