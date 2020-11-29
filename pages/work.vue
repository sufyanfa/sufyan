<template>
  <section class="bg-white dark:bg-gray-900 min-h-screen md:flex flex-col items-center justify-center relative">
        <div class="pt-24 md:pt-0 pb-10 md:pb-10">
            <h2 class="text-4xl font-bold text-center text-gray-800 dark:text-gray-100"> {{$t('work')}}</h2>
        </div>
        <ul class="flex items-center justify-around md:space-x-4 md:space-x-reverse px-6"> 
            <li class="flex flex-col items-center" v-for="item in shoppingItems" :key="item.id">
                <div class="bg-gradient-to-tr from-indigo-500 to-blue-600 rounded-full p-1">
                    <nuxt-link :to="'#' + item.id" class="block bg-white p-1 rounded-full transform transition hover:-rotate-12 duration-300">
                        <img @click="showModal()" class="h-12 md:h-24 w-12 md:w-24 rounded-full" src="/images/bg-project.jpg" alt="image">
                    </nuxt-link>
                </div>
                <p class="text-gray-900 dark:text-gray-100 mt-4 text-sm md:text-md">{{ item.name }}</p>
            </li>
        </ul>
      <Skills />
      <modal v-show="show_modal" class="h-full w-full absolute top-52">
          <div class="modal-wrapper flex items-center">
              <div class="modal max-w-md mx-auto xl:max-w-5xl lg:max-w-5xl md:max-w-2xl bg-white max-h-screen shadow-lg flex-row rounded relative">
                <div class="modal-body p-5 w-full h-full overflow-y-auto ">
                  <div class="flex flex-col justify-center items-center max-w-lg mx-auto">
                    <div class="bg-gray-300 h-52 w-full rounded-lg shadow-md bg-cover bg-center" style="background-image: url(/images/bg-project.jpg)"></div>
                      <div class="w-56 md:w-64 bg-white rounded-lg overflow-hidden">
                        <h3 class="mx-auto text-center py-2 text-indigo-500">g</h3>
                        <p class="mx-auto text-center text-gray-800">ewdwed</p>
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer py-3 px-5 border0-t text-right">
                    <button class="bg-indigo-500 px-5 py-2 text-white rounded" @click="showModal()">OK</button>
                  </div>
              </div>
          </div>
    </modal>
  </section>
</template>

<script>
import Skills from '../components/Skills.vue'
export default {
    components: { Skills },
    data() {
      return {
        title: 'Home page',
        show_modal: false,
        shoppingItems : [
          {
            "id": 1,
            "name": 'آرام',
            "title": "72.186.179.245",
            "image": 'http://dummyimage.com/154x153.png/ff4444/ffffff'
          }
          ,
          {
            "id": 2,
            "name": "إحسان",
            "title": "25.64.108.109",
            "image": "http://dummyimage.com/154x153.png/ff4444/ffffff"
          }, {
            "id": 3,
            "name": "سفيان",
            "title": "200.65.145.138",
            "image": "http://dummyimage.com/138x106.png/5fa2dd/ffffff"
          }, {
            "id": 4,
            "name": "براند",
            "title": "75.40.238.61",
            "image": "http://dummyimage.com/148x130.jpg/5fa2dd/ffffff"
          }, {
            "id": 5,
            "name": "شيكرز",
            "title": "5.153.166.127",
            "image": "http://dummyimage.com/233x229.png/ff4444/ffffff"
          }
        ]
      }
    },
    methods:{
        showModal(){
            if(this.show_modal){
            //stop screen scrolling
              document.getElementsByTagName("html")[0].classList.remove('overflow-y-hidden'); 
              this.show_modal = false;
            }else{
              document.getElementsByTagName("html")[0].classList.add('overflow-y-hidden');
              this.show_modal = true;
            }
        }
    },
    head() {
      return {
        title: this.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Home page description'
          }
        ]
      }
    }
}
</script>

<style>
.modal-body{
    max-height: 500px;
  }
  .bg-gray-800-opacity{
    background-color: #2D374850;
  }
  @media screen and (max-width: 768px){
    .modal-body {
        max-height: 400px;
    }
  }

  /* animation for vue transition tag */

  .fade-up-down-enter-active {
    transition: all 0.3s ease;
  }
  .fade-up-down-leave-active {
    transition: all 0.3s ease;
  }
  .fade-up-down-enter {
    transform: translateY(10%);
    opacity: 0;
  }
  .fade-up-down-leave-to {
    transform: translateY(10%);
    opacity: 0;
  }

  .fade-enter-active{
      -webkit-transition: opacity 2s;
      transition: opacity .3s;

  }
  .fade-leave-active {
      transition: opacity .3s;
  }

  .fade-enter,
  .fade-leave-to{
      opacity: 0;
  }
  
</style>
