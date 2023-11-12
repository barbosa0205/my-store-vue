import { defineStore } from "pinia";
import {useRouter} from 'vue-router'
import axios from "axios";
import { ref } from "vue";
export const useProductsStore = defineStore('products', () => {
    
    const router = useRouter()

    const categories = ref(null)

       const getCategories = async () => {
        try {
          const resp = await axios.get('https://dummyjson.com/products/categories')

            categories.value = resp.data

            router.push('/')
            
        } catch (error) {
            console.log(error)
        }
    }

return {categories, getCategories}
})