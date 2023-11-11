<template lang="">
    <nav class="p-4 bg-zinc-100">
        <!-- User Auth -->
        <section v-if="user">
            <div class="w-full flex items-center justify-between">
                <logo/>
                <ul class="px-2 flex items-center">
                    <i class="ri-shopping-cart-line mx-3 text-xl cursor-pointer"></i>
                   <p class="flex flex-col items-center text-lg mx-3 text-blue-500 hover:underline hover:underline-offset-1 cursor-pointer">{{user.username}}</p>
                   
                </ul>
            </div>
        </section>

        <!-- Guest -->
        <section v-else>
            <div class="w-full flex items-center justify-between">
                <logo/>
                <ul>
                    <router-link to="/login" class="underline text-lg text-zinc-00">Sign In</router-link>
                </ul>
            </div>
        </section>
    </nav>
</template>
<script setup>
import { storeToRefs } from 'pinia';
import { useUserStore } from '../stores/UserStore';
import { RouterLink } from 'vue-router';
import Logo from '../components/Logo.vue'
    const userStore = useUserStore()

    const {user} = storeToRefs(userStore)
</script>
<style lang="">
    
</style>