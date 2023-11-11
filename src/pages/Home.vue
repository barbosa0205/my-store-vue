<template lang="">
   <!-- categories -->
   <section>
    <h2>Categories</h2>
    <ul>

    </ul>
   </section>
</template>
<script setup>
import { storeToRefs } from 'pinia';
import { useUserStore } from '../stores/UserStore';
import { onMounted } from 'vue';

    const userStore = useUserStore()
    const {user} = storeToRefs(userStore)
    console.log(user.value)

    onMounted(() => {
        
    })
</script>
<style lang="">
    
</style>