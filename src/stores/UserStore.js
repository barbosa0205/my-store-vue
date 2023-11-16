import { defineStore } from "pinia";
import {useRouter} from 'vue-router'
import axios from "axios";
import { ref } from "vue";
export const useUserStore = defineStore('user', () => {
const router = useRouter()
    const user = ref(null)
    const loginErrors = ref([])
    const authUser = async (credentials) => {
        try {
            const {username, password} = credentials

            if(!username.trim()) {
                loginErrors.value = [{
                    'field' : 'username',
                    'message': 'username empty field'
                }]
                return
            }

            if(!password.trim()) {
                loginErrors.value = [{
                    'field' : 'password',
                    'message': 'password empty field'
                }]
                return
            }

            if(username.trim() !== 'kminchelle' || password.trim() !== '0lelplR') {
                loginErrors.value = [{
                    'field' : 'error',
                    'message': 'Incorret username or password'
                }]

                return
            }

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

return {user,authUser,loginErrors}
})