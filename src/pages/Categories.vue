<template lang="">
        <div v-if="categories">
            <h1 class="text-2xl my-4 px-4">Categories</h1>
            <ul class="p-4 grid grid-cols-1 s:grid-cols-2 md:grid-cols-3 max-w-3xl mx-auto gap-x-3">
            <li v-for="(category, index) in categories" :key="index" class="p-2 m-1 border border-zinc-200 hover:shadow-sm hover:shadow-zinc-100 hover:bg-pink-100 w-full max-w-[260px] md:max-w-[240px] xs:py-2 mx-auto text-center text-zinc-700 font-bold rounded-md cursor-pointer">
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
