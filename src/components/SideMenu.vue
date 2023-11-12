<template lang="">
   <nav class="fixed top-0 right-0 h-screen bg-zinc-200 shadow-md w-3/5">
    <div class="flex items-center justify-end p-2">
        <span class="px-1 bg-zinc-300 rounded-md">
            <i @click="toggleSideMenu" class="ri-close-line text-2xl text-zinc-700"></i>
        </span>
    </div>
   </nav>
</template>
<script setup>
    defineProps({
        toggleSideMenu: Boolean
    })
</script>
<style lang="">
    
</style>