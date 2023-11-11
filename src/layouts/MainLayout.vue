<template lang="">
    <div class="w-full h-screen max-w-6xl">
        <navbar/>
    <main class="min-h-full w-full p-4">
        <slot></slot>
    </main>
    <footer>FOOTER</footer>
    </div>
</template>
<script setup>
import Navbar from '../components/Navbar.vue';
</script>
<style lang="">
    
</style>