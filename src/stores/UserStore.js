import { defineStore } from "pinia";
import {useRouter} from 'vue-router'
import axios from "axios";
import { ref } from "vue";
export const useUserStore = defineStore('user', () => {
const router = useRouter()
    const user = ref(null)

    const authUser = async (username, password) => {
        try {
          const resp = await axios.post('https://dummyjson.com/auth/login', {
                'username' : 'kminchelle',
                'password' : '0lelplR'
            })

            user.value = resp.data

            router.push('/')
            
        } catch (error) {
            console.log(error)
        }
    }

return {user,authUser}
})