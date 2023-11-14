<template lang="">
    <Swiper 
        :modules="[Pagination]"
        :pagination="{ clickable: true }"
        :scrollbar="{ draggable: true }"
        >
        <SwiperSlide v-for="photo in photosCarrousel">
            <img :src="photo" alt="">
        </SwiperSlide>
    </Swiper>
</template>
<script setup>
import { storeToRefs } from 'pinia';
import { useUserStore } from '../stores/UserStore';
import { useProductsStore } from '../stores/ProductsStore';
import { onMounted } from 'vue';
import { Swiper, SwiperSlide} from 'swiper/vue'
import 'swiper/css';
import { Pagination} from 'swiper/modules'
import 'swiper/css/pagination';

import "swiper/css"
    const userStore = useUserStore()
    const {user} = storeToRefs(userStore)

    const productsStore = useProductsStore()
    const {getCategories} = productsStore
    const {categories} = storeToRefs(productsStore)

    const photosCarrousel = [
        "https://fakeimg.pl/1080x720/232323/ffffff/?text=Ecommerce&font=noto",
        "https://fakeimg.pl/1080x720/de3163/ffffff/?text=By&font=noto",
        "https://fakeimg.pl/1080x720/232323/ffffff/?text=barboasdev&font=noto",   
        "https://fakeimg.pl/1080x720/de3163/ffffff/?text=with 🖤&font=noto",

    ]
    onMounted(() => {
        getCategories()
    })
</script>
<style lang="css">
.swiper {
    margin-top: 50px;
    max-width: 1000px;
}
</style>