<template>
  <div class="flex flex-col items-center space-y-3 mt-10">
        <i :class="`fab fa-twitter text-primary text-4xl ${loading ? 'animate-bounce' : ''}`"></i>
        <div class="font-bold text-xl">뜨위떠 로그인</div>
        <input 
        v-model="email"
        type="text"
        class=" w-96 px-2 py-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:border-primary"
        placeholder="이메일">
        <input 
        v-model="password"
        type="password"
        class=" w-96 px-2 py-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:border-primary"
        placeholder="비밀번호"
        @keyup.enter="onLogin"> 
        <button v-if="loading" class="w-96 px-2 py-3 rounded-full bg-light text-white" >로그인 중입니다.</button>
        <button v-else class="w-96 px-2 py-3 rounded-full bg-primary text-white hover:bg-dark" @click="onLogin">로그인</button>
        <router-link to="/register">
        <button class="text-primary hover:underline">계정이 없으신가요? 회원가입 하기</button>
        </router-link>
    </div>
</template>

<script>
import {onMounted, ref} from 'vue'
import {auth, USER_COLLECTION} from '../firebase'
import {useRouter} from 'vue-router'
import store from '../store'

export default {
    setup() {
        const email = ref('')
        const password = ref('')
        const loading = ref(false)
        const router = useRouter()

    
        onMounted(() => {
            console.log(store.state.user)
        })

        const onLogin = async () => {
            
            if(!email.value || !password.value) {
                alert("이메일, 비밀번호를 모두 입력해주세요.")
                return
            }

            try {
                loading.vlaue = true
                const {user} = await auth.signInWithEmailAndPassword(email.value, password.value)
                console.log(user.uid)
                // get user info
                const doc = await USER_COLLECTION.doc(user.uid).get()
                store.commit("SET_USER", doc.data())
                // console.log(doc.data())
                // console.log(store.state.user)
                router.replace('/')
            } catch(e) {
                switch(e.code) {
                    case "auth/invalid-email":
                        alert('잘못된 이메일 형식입니다.')
                        break
                        case "auth/wrong-password":
                        alert('비밀번호가 틀립니다.')
                        break
                        case "auth/user-not-found":
                        alert('등록되지 않은 이메일입니다.')
                        break
                default:
                }
                
            } finally {
                loading.value = false
            }
        }
        return {
            email, password, onLogin, loading
        }

    }
}
</script>

<style>

</style>