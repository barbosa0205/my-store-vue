<template lang="">
    <div class="w-full">
        <form action="" class="w-full max-w-sm p-10 flex flex-col mx-auto mt-20">
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