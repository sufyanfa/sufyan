<template>
    <div class="fixed bottom-0 left-28 left- mb-4 ml-10">
        <button class="relative overflow-hidden px-4 flex items-center text-white bg-gray-800 dark:bg-gray-100 dark:text-gray-800 rounded-full h-10 outline-none focus:outline-none transition-colors duration-300 ease-linear">
            <nuxt-link
                v-if="$i18n.locale !== 'ar'"
                :to="switchLocalePath('ar')">
                ع
            </nuxt-link>

            <nuxt-link
                v-if="$i18n.locale !== 'en'"
                :to="switchLocalePath('en')">
                en
            </nuxt-link>
        </button>
    </div>
</template>
<script>
export default {
    
}
</script>