<template lang="">
    <div class="w-full h-screen max-w-6xl mx-auto bg-zinc-50">
        <navbar/>
    <main class="min-h-full w-ful">
        <slot></slot>
    </main>
    <footer class="h-fit bg-zinc-800 text-zinc-50">
        <div class="w-full font-extralight pt-4">
            <p class="w-full text-center font-bold  text-transparent bg-clip-text bg-gradient-to-r  from-rose-400 to-pink-500 ">Techs and Tools Used</p>
        <ul class="w-full flex flex-col items-center">
            <a href="https://vuejs.org/" target="_blank" class="mb-1 px-2 hover:underline hover:underline-offset-2">
                - Vue
            </a>
            <a href="https://pinia.vuejs.org/" target="_blank" class="mb-1 px-2 hover:underline hover:underline-offset-2">
                - Pinia
            </a>
            <a href="https://swiperjs.com/" target="_blank" class="mb-1 px-2 hover:underline hover:underline-offset-2">
                - Swiper
            </a>
            <a href="https://dummyjson.com/" target="_blank" class="px-2 hover:underline hover:underline-offset-2">
                - DummerJson
            </a>
        </ul>
        </div>
    </footer>
    </div>
</template>
<script setup>
import Navbar from '../components/Navbar.vue';
</script>
<style lang="">
    
</style>