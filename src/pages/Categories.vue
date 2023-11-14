<template lang="">
        <div v-if="categories">
            <ul class="bg-zinc-100 p-4 grid grid-cols-1">
            <h1 class="text-2xl my-4">Categories</h1>
            <li v-for="(category, index) in categories" :key="index" class="p-2 m-1 border border-zinc-500 bg-zinc-200 cursor-pointer w-full max-w-[260px] mx-auto text-center">
                <router-link :to="'/categories/'+category">{{category}}</router-link>
            </li>
        </ul>
        </div>
        <div v-else>
            <p class="text-2xl font-bold text-zinc-700">LOADING...</p>
        </div>
</template>
<script setup>
import { RouterLink } from 'vue-router';
import { useProductsStore } from '../stores/ProductsStore';
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';

const productStore = useProductsStore()

const {categories} = storeToRefs(productStore)
const {getCategories} =  productStore

onMounted(() => {
    if(!categories.value) {
        getCategories()
    }
})

</script>
