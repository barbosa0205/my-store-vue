<template lang="">
    <h1 class="text-2xl my-4 px-4 text-rose-400 font-bold"><span class="text-zinc-500">category:</span> {{category}}</h1>
   <ul class="w-full flex flex-wrap justify-center" v-if="productsOfCategory">
    <product-card v-for="(product, index) in productsOfCategory.products" :key="index" :data="product"/>
   </ul>
</template>

<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import ProductCard from '../components/ProductCard.vue';
const route = useRoute()

const category = route.params.category

const productsOfCategory = ref(null)

const getProductById = async() => {
    const resp = await axios.get(`https://dummyjson.com/products/category/${category}?limit=0`)

    productsOfCategory.value = resp.data
}

onMounted(() => {
    getProductById()
})

</script>
