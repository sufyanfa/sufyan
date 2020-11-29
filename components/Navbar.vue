<template>
    <nav class="fixed top-0 right-16 md:right-0 m-5 lg:m-10 z-50">
        <div class="flex bg-gray-800 items-center p-1 rounded-lg text-lg text-gray-300">
            <nuxt-link to="/" class="px-3 py-1 rounded-md transition duration-300 ease-in-out bg-gray-700 shadow">{{ $t('about')}}</nuxt-link>
            <nuxt-link to="/work" class="px-3 py-1 mr-1 rounded-md transition duration-300 ease-in-out font-light text-gray-400 hover:bg-gray-900 hover:opacity-75">{{ $t('work')}}</nuxt-link>
            <nuxt-link to="/contact" exact class="px-3 py-1 mr-1 rounded-md transition duration-300 ease-in-out font-light text-gray-400 hover:bg-gray-900 hover:opacity-75">{{ $t('contact')}}</nuxt-link>
        </div>
    </nav>
</template>