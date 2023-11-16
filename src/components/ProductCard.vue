<template lang="">
    <article @click="goTo(`/products/${data.id}`)" class="w-full border-y border-zinc-200 bg-zinc-50 max-w-md sm:max-w-xs first:border-t-0 m-1 cursor-default">
        
           <div class="h-40">
            <Swiper 
            :modules="[Pagination]"
            :pagination="true"
        :scrollbar="{ draggable: true }"
        >
        <SwiperSlide v-for="photo in data.images">
            <img :src="photo" :alt="`prduct ${data.title}`">
        </SwiperSlide>
    </Swiper>
        
           </div>
        <!--   -->
       <div class="px-4">
        <h4 class="w-full text-3xl font-bold mt-3 truncate" :title="data.title">{{data.title}}</h4>
        <div class="w-full  items-center pr-6">
            <div class="flex pt-2 pl-2">
                <p class="text-base text-emerald-600 mr-3">- ${{saveDiscount}}</p>
             <p class="text-blue-600">{{data.discountPercentage}}% <small>Dto</small></p>            
            </div>
            <p class="text-3xl mr-4">${{data.price}}  USD
            </p>
         </div>
         <div class="w-full flex items-center justify-evenly">
             <div class="my-4 w-full flex justify-end">
             <button @click.stop="goTo(`/products/${data.id}`)" class="px-6 py-3 mx-2 text-xl rounded-md text-zinc-50 bg-blue-600">Show Details</button>
             <button @click.stop="console.log('add to cart')" class="py-2 px-6 mx-2 text-2xl font-bold  text-amber-600 rounded-md bg-amber-300"><i class="ri-shopping-cart-fill"></i></button>
             </div>
             <!-- <button><i class="ri-heart-fill text-zinc-400 text-3xl p-2 bg-zinc-200 rounded-full"></i></button> -->
         </div>

       </div>
    </article>
</template>
<script setup>

import { Swiper, SwiperSlide} from 'swiper/vue'
import {Pagination} from 'swiper/modules'
import 'swiper/css';
import "swiper/css"
import "swiper/css/pagination"

import { computed } from 'vue';
import { useRouterStore } from '../stores/RouterStore';
    const props = defineProps({
        data: Object
    })

    const routerStore = useRouterStore()
    const {goTo} = routerStore 

    const saveDiscount = computed(() => {
        return Number(( props.data.price * props.data.discountPercentage) / 100).toFixed(2)
    })
</script>
<style>
    .swiper {
        width: 100%;
        height: inherit;
        cursor: pointer;
    }
    .swiper-slide > img {
        height: inherit;
        object-fit: contain;
        margin: 0 auto;
    }

    .swiper-button-prev {
        color: #828282;
    }

    .swiper-button-next {
        color: #828282;
    }
</style>