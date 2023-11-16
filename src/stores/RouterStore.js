import { defineStore } from "pinia";
import {useRouter} from 'vue-router'
import axios from "axios";
import { ref } from "vue";
export const useRouterStore = defineStore('router', () => {
    
    const router = useRouter()

    const goTo = (url) => {
        router.push(url)
    }
   
return {goTo}
})