<template lang="">
    <nav class="relative p-4 bg-zinc-100">
        <section >
            <div class="w-full flex items-center justify-between">
                <logo/>

                <!-- Sidebar -->
               <div v-if="user" :class="'flex flex-col md:flex fixed md:static top-0 w-3/5 md:w-fit h-full bg-zinc-100 md:bg-transparent shadow-lg md:shadow-none border border-zinc-200 md:border-none ' + toggleSideMenuComputed">
                  <div class="flex items-center justify-end p-2 md:hidden">
        
                    <span class="px-1 bg-rose-600 rounded-md">
                        <i @click="toggleSideMenu" class="ri-close-line text-2xl text-zinc-100"></i>
                    </span>
                </div>
                
                <ul class="flex flex-col md:flex-row w-full py-4">
                    <router-link to="/login" class="underline text-lg text-zinc-700 w-full text-center border-b border-t border-none md:mx-2 border-zinc-300 py-2 ">Authorized</router-link>
                </ul>
            </div>

            <!-- Guest Links -->
            <i v-if="user" @click="toggleSideMenu" class="ri-menu-line text-xl ml-4 md:hidden"></i>
                <router-link v-if="!user" to="/login" class="underline text-lg text-zinc-700 text-center border-b border-t border-none md:mx-2 border-zinc-300 py-2 ">Sign In</router-link> 
                
            </div>
        </section>
    </nav>

</template>
<script setup>
import { storeToRefs } from 'pinia';
import { useUserStore } from '../stores/UserStore';
import { RouterLink } from 'vue-router';
import Logo from '../components/Logo.vue'
import SideMenu from './SideMenu.vue'
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