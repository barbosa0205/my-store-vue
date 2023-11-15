<template lang="">
    <div class="w-full h-screen max-w-6xl mx-auto bg-zinc-50">
        <navbar/>
    <main class="min-h-full w-ful">
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