<template lang="">
    <nav class="relative p-4 border-2">
        <section >
            <div class="w-full flex items-center justify-between">
                <logo/>

                <!-- Sidebar -->
               <div  :class="'flex flex-col md:flex fixed md:static top-0 w-3/5 md:w-fit h-full bg-zinc-100 md:bg-transparent shadow-lg md:shadow-none border border-zinc-200 md:border-none z-10 ' + toggleSideMenuComputed">
                  <div class="flex items-center justify-end p-2 md:hidden">
        
                    <span class="px-1 bg-rose-600 rounded-md">
                        <i @click="toggleSideMenu" class="ri-close-line text-2xl text-zinc-100 cursor-pointer"></i>
                    </span>
                </div>
                <!-- Auth Link -->
                <ul v-if="user" class="flex flex-col md:flex-row">
                    <i class="ri-user-4-line text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"></i>
                    <i class="ri-shopping-cart-line text-transparent text-2xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"></i>
                </ul>
                <div class="md:absolute w-full top-11 left-0">

                <ul class="flex flex-col md:flex-row w-full py-4">
                    <router-link to="/categories" class="underline text-lg text-zinc-700 w-full text-center border-b border-t md:border-none md:mx-2 border-zinc-300 py-2 ">Categories</router-link>
                </ul>
                </div>
            </div>
                   

            <div v-if="!user" class="flex items-center">

               <!-- Guest Link -->
               <router-link to="/login" class="underline text-lg text-center md:mx-2 border-zinc-300 py-2 text-zinc-700">Sign In</router-link> 

            </div>
            <i @click="toggleSideMenu" class="ri-menu-line text-2xl ml-4 md:hidden cursor-pointer text-zinc-50 text-transparent bg-clip-text bg-gradient-to-r font-bold from-rose-400 to-pink-400"></i>

            </div>
        </section>
    </nav>

</template>
<script setup>
import { storeToRefs } from 'pinia';
import { useUserStore } from '../stores/UserStore';
import { RouterLink } from 'vue-router';
import Logo from '../components/Logo.vue'
import { computed, ref } from 'vue';

const userStore = useUserStore()

const { user } = storeToRefs(userStore)
const sideMenu = ref(false)

const toggleSideMenu = () => {
    sideMenu.value = !sideMenu.value
}

const toggleSideMenuComputed = computed(() =>{
    return sideMenu.value ? 'right-0 transition-ease-in duration-500' : '-right-[100%] transition-ease-out duration-500'
})
</script>
<style lang="">
    
</style>    