<template lang="">
    <div class="w-full">
       
        <section class="p-4 pb-0">
            <h2 class="text-center p-2 font-mono font-bold">Credentials</h2>
            <code
            class="text-sm sm:text-base inline-flex text-left items-center space-x-4 bg-gray-800 text-white rounded-lg p-4 pl-6">
            <span class="flex gap-4">
                <span class="shrink-0 text-gray-500">
                    $
                </span>
        
                <span class="flex-1 text-pink-300">
                    <span>
                        username: <span class="text-white">kminchelle</span>
                    </span>
        
                    <span class="text-pink-300">
                        password: <span class="text-white">0lelplR</span>
                    </span>
                </span>
            </span>
        
            <svg class="shrink-0 h-5 w-5 transition text-gray-500 group-hover:text-white" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z"></path>
                <path
                    d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z">
                </path>
            </svg>
        </code>
        </section>

        <form action="" class="w-full max-w-sm p-10 pt-0 flex flex-col mx-auto mt-20">
            <h1>SIGN IN</h1>
            <input type="text" placeholder="Username" class="p-4 bg-zinc-100 my-2">
            <input type="password" placeholder="Password" class="p-4 bg-zinc-100 my-2">
            <div class="w-full flex items-center justify-center my-4 p-2">
                <button @click.prevent="authUser" class="py-2 w-full max-w-[200px] bg-zinc-400 rounded-sm text-zinc-50 hover:bg-zinc-500">Enter</button>
            </div>
        </form>
    </div>
</template>
<script setup>
    import {useUserStore} from '../stores/UserStore'

    const userStore = useUserStore()

    const {authUser} = userStore
</script>
<style lang="">
    
</style>