<template lang="">
</template>
<script setup>
import { storeToRefs } from 'pinia';
import { useUserStore } from '../stores/UserStore';
import { useProductsStore } from '../stores/ProductsStore';

import { onMounted } from 'vue';

    const userStore = useUserStore()
    const {user} = storeToRefs(userStore)

    const productsStore = useProductsStore()
    const {getCategories} = productsStore
    const {categories} = storeToRefs(productsStore)
    
    onMounted(() => {
        getCategories()
    })
</script>
<style lang="">
    
</style>