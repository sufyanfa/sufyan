<template>
  <section class="min-h-screen md:flex flex-col items-center justify-center p-4 md:p-0">
    <div class="container mx-auto pt-16">
      <div class="mb-10">
        <h1 class="xl:text-5xl pt-4 xl:pt-0 text-3xl text-greenone text-center font-extrabold mb-4">أعمالي</h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 pt-4 text-center xl:w-3/5 mx-auto w-11/12">
            معرض الأعمال
        </p>
      </div>
      <div class="lg:flex md:flex xl:justify-around sm:flex flex-wrap md:justify-around sm:justify-around lg:justify-around">
        <div class="xl:w-1/3 sm:w-5/12 sm:max-w-xs relative mb-20 lg:mb-20 xl:max-w-sm lg:w-1/2 w-11/12 mx-auto sm:mx-0">
          <div class="shadow h-64 rounded z-10">
            <img src="/images/project/brand.png" class="h-full w-full object-cover border border-gray-300 overflow-hidden rounded" />
          </div>
          <div class="p-6 shadow-lg w-11/12 mx-auto -mt-20 bg-white dark:bg-gray-800 rounded z-20 relative">
            <nuxt-link to="/">
              <p class="uppercase text-lg text-greenone text-center pb-3">براند</p>
              <p class="text-md text-gray-800 dark:text-gray-100 text-center pb-3">موقع شركة رقمية متخصصة في التسويق الإلكتروني</p>
            </nuxt-link>
          </div>
        </div>
        <div class="xl:w-1/3 sm:w-5/12 sm:max-w-xs relative mb-20 lg:mb-20 xl:max-w-sm lg:w-1/2 w-11/12 mx-auto sm:mx-0">
          <div class="shadow h-64 rounded z-10">
            <img src="/images/project/araam.png" class="h-full w-full object-cover border border-gray-300 overflow-hidden rounded" />
          </div>
          <div class="p-6 shadow-lg w-11/12 mx-auto -mt-20 bg-white dark:bg-gray-800 rounded z-20 relative">
            <nuxt-link to="/">
              <p class="uppercase text-lg text-greenone text-center pb-3">آرام</p>
              <p class="text-md text-gray-800 dark:text-gray-100 text-center pb-3">موقع لطلاب المرحلة الثانوية </p>
            </nuxt-link>
          </div>
        </div>
        <div class="xl:w-1/3 sm:w-5/12 sm:max-w-xs relative mb-20 lg:mb-20 xl:max-w-sm lg:w-1/2 w-11/12 mx-auto sm:mx-0">
          <div class="shadow h-64 rounded z-10">
            <img src="/images/project/me.png" class="h-full w-full object-cover border border-gray-300 overflow-hidden rounded" />
          </div>
          <div class="p-6 shadow-lg w-11/12 mx-auto -mt-20 bg-white dark:bg-gray-800 rounded z-20 relative">
            <nuxt-link to="/">
              <p class="uppercase text-lg text-greenone text-center pb-3">موقعي</p>
              <p class="text-md text-gray-800 dark:text-gray-100 text-center pb-3">موقعي الشخصي</p>
            </nuxt-link>
          </div>
        </div>
        <div class="xl:w-1/3 sm:w-5/12 sm:max-w-xs relative mb-20 lg:mb-20 xl:max-w-sm lg:w-1/2 w-11/12 mx-auto sm:mx-0">
          <div class="shadow h-64 rounded z-10">
            <img src="/images/project/project.jfif" class="h-full w-full object-cover border border-gray-300 overflow-hidden rounded" />
          </div>
          <div class="p-6 shadow-lg w-11/12 mx-auto -mt-20 bg-white dark:bg-gray-800 rounded z-20 relative">
            <nuxt-link to="/">
              <p class="uppercase text-lg text-greenone text-center pb-3">دليل البرمجة</p>
              <p class="text-md text-gray-800 dark:text-gray-100 text-center pb-3">إضافة لتعلم البرمجة للمبتدئين بطريقة مهام</p>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
