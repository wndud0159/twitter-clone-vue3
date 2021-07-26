<template>
    <div class="flex flex-col items-center space-y-3 mt-10">
        <i :class="`fab fa-twitter text-primary text-4xl ${loading ? 'animate-bounce' : ''}`"></i>
        <div class="font-bold text-xl">뜨위떠 회원가입</div>
        <input 
        v-model="email"
        type="text"
        class=" w-96 px-2 py-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:border-primary"
        placeholder="이메일">
        <input 
        v-model="userName"
        type="text"
        class=" w-96 px-2 py-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:border-primary"
        placeholder="아이디">
        <input 
        v-model="password"
        type="text"
        class=" w-96 px-2 py-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:border-primary"
        placeholder="비밀번호">
        <button class="w-96 px-2 py-3 rounded-full bg-primary text-white hover:bg-dark" @click="onRegister">회원가입</button>
        <router-link to="/login">
        <button class="text-primary hover:underline">계정이 이미 있으신가요? 로그인 하기</button>
        </router-link>
    </div>
</template>

<script>
import {ref} from 'vue'

export default {
    setup() {
        const email = ref('')
        const userName = ref('')
        const password = ref('')
        const loading = ref(false)
        
        const onRegister = () => {
            console.log(email.value, userName.value, password.value);
        }
        return {
            email, userName, password, onRegister, loading
        }

    }
}
</script>

<style>

</style>