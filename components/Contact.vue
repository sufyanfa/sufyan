<template>
    <div>
        <div class="hidden md:flex flex-col fixed bottom-0 right-0 mb-10 mr-10">
          <p class="font-light -mb-6 text-gray-800 dark:text-gray-400">{{ $t('message')}}</p>
          <svg class="h-40 w-40 text-gray-800 dark:text-gray-400" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-miterlimit:10;"><rect style="fill:none;"></rect><g><path d="M102.033,108.395l3.861,5.059l-5.059,3.86" style="fill:none;stroke:rgb(190, 190, 190);stroke-width:1.5px;"></path><path d="M28.297,31.605c0,0 -2.446,38.58 33.635,51.809c22.551,8.268 21.835,-3.3 16.569,-7.819c-9.014,-7.733 -19.849,9.169 -2.734,22.538c11.496,8.979 20.881,13.827 30.127,15.321" style="fill:none;stroke:rgb(190, 190, 190);stroke-width:1.5px;stroke-linejoin:round;stroke-miterlimit:1.5;"></path></g></svg>
        </div>
        <div class="flex flex-col fixed bottom-0 items-center justify-center right-0 mb-4 mr-10 bg-gray-800 dark:bg-white rounded-full h-12 w-12 transform  hover:scale-130 transition duration-300">
          <svg class="w-8 h-8 text-white dark:text-gray-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
        </div>
    </div>
</template>