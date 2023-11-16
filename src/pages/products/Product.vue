<template lang="">
    <section v-if="product" class="max-w-screen-s mx-auto">
        <h2 class="text-3xl font-semibold mt-8 mb-2 ml-2">{{product.title}}</h2>

        <Swiper 
        :modules="[Pagination]"
        :pagination="true"
        :scrollbar="{ draggable: true }"
        >
            <SwiperSlide v-for="photo in product.images">
                <img :src="photo" :alt="`product ${product.title}`">
            </SwiperSlide>
        </Swiper>

        <div class="w-full flex flex-col items-end pr-6 mt-4">
            <div class="flex pt-2 pl-2">
                <p class="text-lg text-emerald-600 mr-3">- ${{saveDiscount}}</p>
             <p class="text-blue-600 text-lg">{{product.discountPercentage}}% <small>Dto</small></p>            
            </div>
            <p class="text-4xl mr-4">${{product.price}}  USD
            </p>
         </div>

         <!-- favorite -->
         <div class="px-4 flex items-center justify-end mt-5">
            <button @click.stop="goTo(`/products/${product.id}`)" class="w-full mr-3 py-3 m-base:py-4 text-xl rounded-md text-zinc-50 bg-blue-600">Buy Now</button>
            <button class="m-1"><i class="ri-heart-fill text-zinc-400 text-3xl p-2  bg-zinc-200 rounded-full"></i></button>
         </div>

         <!-- buttons show details, cart -->
         <div class="w-full flex items-center justify-around flex-wrap p-4">
           
            
             <button @click.stop="console.log('add to cart')" class="w-full mx-1 py-3 text-2xl font-bold  text-amber-600 rounded-md bg-amber-300"><i class="ri-shopping-cart-fill"></i></button>
         </div>

         <p class="p-4">{{product.description}}</p>
</section>
</template>
<script setup>
import { useRoute } from 'vue-router';
import { computed, onMounted, ref } from 'vue';
import axios from 'axios';

import { Swiper, SwiperSlide} from 'swiper/vue'
import {Pagination} from 'swiper/modules'
import 'swiper/css';
import "swiper/css/pagination"

const route = useRoute()

const productId = route.params.productId

const product = ref(null)

const getProductById = async() => {
    const resp = await axios.get(`https://dummyjson.com/products/${productId}`)

    product.value = resp.data
}
const saveDiscount = computed(() => {
        return Number(( product.value.price * product.value.discountPercentage) / 100).toFixed(2)
    })

onMounted(() => {

    getProductById()
  
})

</script>
<style lang="css">
    .swiper-slide { 
        max-height: 230px;
    }

    
</style>