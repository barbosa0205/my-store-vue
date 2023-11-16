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
    <section>
        <h3 class="p-4 text-4xl mt-16 mb-5 font-extrabold"> Explore Our Catalog</h3>
        <ul class="p-2 w-full flex flex-wrap items-center justify-center bg-zinc-100">
            <product-card v-for="(product, index) in products" :key="index" :data="product"/>
            
        </ul>
    </section>
</template>
<script setup>
import { storeToRefs } from 'pinia';
import { useUserStore } from '../stores/UserStore';
import { useProductsStore } from '../stores/ProductsStore';
import { onMounted, ref } from 'vue';
import { Swiper, SwiperSlide} from 'swiper/vue'
import 'swiper/css';
import { Pagination} from 'swiper/modules'
import 'swiper/css/pagination';
import "swiper/css"
import ProductCard from '../components/ProductCard.vue';
import axios from 'axios';

    const userStore = useUserStore()
    const {user} = storeToRefs(userStore)

    const productsStore = useProductsStore()
    const {getCategories} = productsStore
    const {categories} = storeToRefs(productsStore)

    const photosCarrousel = [
        "https://fakeimg.pl/800x400/232323/ffffff/?text=Ecommerce&font=noto",
        "https://fakeimg.pl/800x400/de3163/ffffff/?text=By&font=noto",
        "https://fakeimg.pl/800x400/232323/ffffff/?text=barboasdev&font=noto",   
        "https://fakeimg.pl/800x400/de3163/ffffff/?text=with 🖤&font=noto",

    ]

    const products = ref(null)
    
    const getProducts = async (limit = 5) => {
        try {
           const resp = await axios.get(`https://dummyjson.com/products?limit=${limit}`) 
           products.value = resp.data.products
        } catch (error) {
            console.log(error)
        }
    }

    onMounted(() => {
        getCategories()
        getProducts()
    })
</script>
<style lang="css">
.swiper {
    margin-top: 50px;
    max-width: 1000px;
}

@media (min-width: 480px) {
    .swiper-slide > img  {
        max-height: 500px;
    }
}
</style>