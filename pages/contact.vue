<template>
    <section class="min-h-screen md:flex flex-col items-center justify-center pt-28 md:pt-0 py-12 px-4">
        <h2 class="text-4xl mb-10 text-center font-semibold font-heading text-gray-800 dark:text-gray-100">{{$t('contacttitile')}}</h2>
        <div class="w-full max-w-2xl mx-auto mb-8">
            <form>
            <div class="flex mb-4 -mx-2">
                <div class="w-1/2 px-2">
                <input class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 dark:bg-gray-600 focus:bg-white border border-gray-200 dark:border-gray-400 focus:border-gray-500 rounded focus:outline-none" type="text" :placeholder="$t('form.name')">
                </div>
                <div class="w-1/2 px-2">
                <input class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 dark:bg-gray-600 focus:bg-white border border-gray-200 dark:border-gray-400 focus:border-gray-500 rounded focus:outline-none" type="email" :placeholder="$t('form.email')">
                </div>
            </div>
            <div class="mb-4">
                <textarea class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 dark:bg-gray-600 focus:bg-white border border-gray-200 dark:border-gray-400 focus:border-gray-500 rounded focus:outline-none" :placeholder="$t('form.text')" rows="5"></textarea></div>
            <div>
                <button class="inline-block w-full py-4 px-8 leading-none text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded shadow">{{$t('submit')}}</button>
            </div>
            </form>
        </div>
    </section>
</template>


