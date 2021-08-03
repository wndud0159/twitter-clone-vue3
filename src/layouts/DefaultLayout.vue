<template>
    <div class="flex h-screen">
      <!-- side section -->
      <div class="w-1/4 ml-5 pt-5 flex flex-col justify-between border-r border-gray-200">
        <div>
          <!-- twitter logo -->
          <i class="fab fa-twitter fa-fw text-2xl text-primary ml-4"></i>
          <!-- sidemenu icons -->
          <div class="flex flex-col items-start space-y-1">            
            <router-link :to="route.path" :class="`hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full ${router.currentRoute.value.name == route.name ? 'text-primary' : ''}` " v-for="route in routes" :key="route">
                <div v-if="route.meta.isMenu">
                    <i :class="route.icon"></i>
                    <span class="ml-5 text-lg hidden md:inline-block">{{route.title}}</span>
                </div>
            </router-link>
          </div>
          <!-- tweet button -->
          <div class=" mr-9 md:ml-4 ml-3">
            <button @click="showTweetModal = true" class=" md:w-full w-10 mt-3  bg-primary text-white rounded-full h-10 hover:bg-dark">
              <span class="hidden md:inline-block">트윗</span>
              <i class="fas fa-plus md:hidden"></i>
            </button>
          </div>
        </div>
        <!-- profile button -->
        <div class=" md:ml-4 mb-3 mr-9 ml-3" @click="showProfileDropdown = true">
          <button class=" flex rounded-full md:w-full h-10 hover:bg-blue-50 items-center hover:opacity-80 w-10 mt-6">
            <!-- 랜덤이미지 -->
            <img class=" w-10 h-10 rounded-full" :src="currentUser.profile_image_url" alt="">
            <div class=" md:ml-2 md:block hidden">
              <div class=" text-md font-bold">{{currentUser.email}}</div>
              <div class=" text-xs text-gray-500 text-left">@{{currentUser.userName}}</div>
            </div>
            <i class=" fas fa-ellipsis-h fa-fw text-xs ml-auto hidden md:block"></i>
          </button>
        </div>
      </div>
      <!-- main section -->
      <div class=" flex-1 flex h-screen">
        <router-view></router-view>
      </div>
      <!-- profile dropdown menu -->
      <div v-if="showProfileDropdown" class=" absolute bottom-20 left-14 shadow rounded-lg w-70 bg-white">
        <button class="hover:bg-gray-50 border-b border-gray-100 flex p-3 items-center" @click="showProfileDropdown = false">
          <img :src="currentUser.profile_image_url" class="w-10 h-10 rounded-full" alt="">
          <div class="ml-2">
            <div class="font-bold text-sm">{{currentUser.email}}</div>
            <div class="text-left text-gray-500 text-sm">@{{currentUser.userName}}</div>
          </div>
          <i class="fas fa-check text-primary ml-auto"></i>
        </button>
        <button class=" p-3 hover:bg-gray-50 w-full text-left text-sm" @click="onLogout">{{currentUser.userName}} 계정에서 로그아웃</button>
      </div>
      <!-- tweet modal popup -->
      <tweet-modal v-if="showTweetModal" @close-modal="showTweetModal = false" ></tweet-modal>
    </div>
</template>

<script>
import {ref, onBeforeMount, computed} from 'vue'
import router from '../router'
import {auth} from '../firebase'
import store from '../store'
import TweetModal from '../components/TweetModal.vue'

export default {
  components: { TweetModal },
  setup() {
    const routes = ref([])
    const showProfileDropdown = ref(false)
    const showTweetModal = ref(false)


    const currentUser = computed(() => store.state.user) 

    const onLogout = async () => {
      await auth.signOut()
      store.commit("SET_USER", null)
      await router.replace('/login')
    }

    onBeforeMount(()=> {
      // 필터를 사용한 ismenu가 true인 것들만 가져옴
      routes.value = router.options.routes.filter((route) => route.meta.isMenu == true)

      console.log(router.currentRoute.value)
    })

    return {routes, showProfileDropdown, onLogout, currentUser, router, showTweetModal}
  }
}
</script>

<style>

</style>
