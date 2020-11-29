<template>
  <section class="h-screen bg-white dark:bg-gray-900 text-white flex flex-col justify-center items-center px-6 py-20 md:px-16 xl:px-32">
    <div class="flex flex-col md:flex-row justify-center items-center relative">
      <div class="max-w-xs mx-auto md:mx-0 md:w-1/2">
        <img
          src="/images/me.jpg"
          alt="{ $t('message')}"
          class="rounded-lg shadow-xl h-48 sm:h-64 block mx-auto p-1 transform hover:scale-75 transition duration-300"
        />
      </div>
      <div class="md:w-1/2 mx-auto md:mx-0 max-w-xl">
        <div class="text-3xl text-gray-800 text-center lg:text-3xl font-semibold pt-10 md:pt-0 dark:text-gray-100" :class="$i18n.locale == 'ar' ? 'md:text-right' : 'md:text-left'">
          {{$t('job.name')}}
          <span class="font-semibold text-indigo-600"> {{$t('job.last')}}</span>
        </div>
        <div>
          <div class="leading-normal text-gray-900 text-center text-center hyphens-text pt-2 px-3 md:px-0 dark:text-gray-100" :class="$i18n.locale == 'ar' ? 'md:text-right' : 'md:text-left'">
            {{$t('aboutme')}}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  nuxtI18n: {
    seo: true
  }
}
</script>

<style>
</style>
