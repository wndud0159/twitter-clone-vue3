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
        type="password"
        class=" w-96 px-2 py-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:border-primary"
        placeholder="비밀번호">
        <button v-if="loading" class="w-96 px-2 py-3 rounded-full bg-light text-white">회원가입 중입니다.</button>
        <button v-else class="w-96 px-2 py-3 rounded-full bg-primary text-white hover:bg-dark" @click="onRegister">회원가입</button>
        <router-link to="/login">
        <button class="text-primary hover:underline">계정이 이미 있으신가요? 로그인 하기</button>
        </router-link>
    </div>
</template>

<script>
import {ref} from 'vue'
import {auth, USER_COLLECTION} from '../firebase'
import {useRouter} from 'vue-router'

export default {
    setup() {
        const email = ref('')
        const userName = ref('')
        const password = ref('')
        const loading = ref(false)
        const router = useRouter()
        
        const onRegister = async () => {

            if(!userName.value || !email.value || !password.value) {
                alert("유저네임, 이메일, 비밀번호를 모두 입력해주세요.")
                return
            }

            try {
                loading.value = true
                // const credential = await auth.createUserWithEmailAndPassword(email.value, password.value)
                const {user} = await auth.createUserWithEmailAndPassword(email.value, password.value)
                // const user = credential.user
                // db.collection("users").doc(user.uid)
                // USER_COLLECTION.doc(user.uid)
                const doc = USER_COLLECTION.doc(user.uid)
                await doc.set({
                    uid: user.uid,
                    userName: userName.value,
                    email: email.value,
                    profile_image_url: '/profile.jpeg',
                    background_image_url: '/background.png',
                    num_tweets: 0,
                    followers: [],
                    followings: [],
                    create_at: Date.now()
                })
                alert("회원가입에 성공하셨습니다. 로그인 해주세요.")
                router.push('/login')
            } catch (e) {
                // console.log("create user with email and password error: ", e)
                // alert(e.message)
                switch(e.code) {
                    case "auth/invalid-email":
                        alert('잘못된 이메일 형식입니다.')
                        break
                    case "auth/weak-password":
                        alert('비밀번호가 너무 쉬워요')
                        break
                    case "auth/email-already-in-use":
                        alert('이미 가입되어 있는 이메일 입니다')
                        break
                    default:
                        alert("회원가입 실패")
                        break
                }
            } finally {
                loading.value = false
            }
        }
        return {
            email, userName, password, onRegister, loading
        }

    }
}
</script>

<style>

</style>