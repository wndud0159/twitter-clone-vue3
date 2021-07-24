<template>
    <div class="flex h-screen">
      <!-- side section -->
      <div class="w-1/4 ml-5 pt-5 flex flex-col justify-between border-r border-gray-200">
        <div>
          <!-- twitter logo -->
          <i class="fab fa-twitter fa-fw text-2xl text-primary ml-4"></i>
          <!-- sidemenu icons -->
          <div class="flex flex-col items-start space-y-1">
            <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
              <i class="fas fa-home fa-fw text-2xl"></i>
              <span class="ml-5 text-lg hidden md:inline-block">홈</span>
            </div>
            <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
              <i class="fas fa-hashtag fa-fw text-2xl"></i>
              <span class="ml-5 text-lg hidden md:inline-block">탐색하기</span>
            </div>
            <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
              <i class="far fa-bell fa-fw text-2xl"></i>
              <span class="ml-5 text-lg hidden md:inline-block">알림</span>
            </div>
            <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
              <i class="far fa-envelope fa-fw text-2xl"></i>
              <span class="ml-5 text-lg hidden md:inline-block">쪽지</span>
            </div>
            <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
              <i class="far fa-bookmark fa-fw text-2xl"></i>
              <span class="ml-5 text-lg hidden md:inline-block">북마크</span>
            </div>
            <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
              <i class="far fa-list-alt fa-fw text-2xl"></i>
              <span class="ml-5 text-lg hidden md:inline-block">리스트</span>
            </div>
            <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
              <i class="far fa-user fa-fw text-2xl"></i>
              <span class="ml-5 text-lg hidden md:inline-block">프로필</span>
            </div>
            <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
              <i class="fas fa-ellipsis-h fa-fw text-2xl"></i>
              <span class="ml-5 text-lg hidden md:inline-block">더보기</span>
            </div>
          </div>
          <!-- tweet button -->
          <div class=" mr-9 md:ml-4 ml-3">
            <button class=" md:w-full w-10 mt-3  bg-primary text-white rounded-full h-10 hover:bg-dark">
              <span class="hidden md:inline-block">트윗</span>
              <i class="fas fa-plus md:hidden"></i>
            </button>
          </div>
        </div>
        <!-- profile button -->
        <div class=" md:ml-4 mb-3 mr-9 ml-3">
          <button class=" flex rounded-full md:w-full h-10 hover:bg-blue-50 items-center hover:opacity-80 w-10 mt-6">
            <!-- 랜덤이미지 -->
            <img class=" w-10 h-10 rounded-full" src="http://picsum.photos/100" alt="">
            <div class=" md:ml-2 md:block hidden">
              <div class=" text-md font-bold">wndud0159.com</div>
              <div class=" text-xs text-gray-500 text-left">@wndud0159</div>
            </div>
            <i class=" fas fa-ellipsis-h fa-fw text-xs ml-auto hidden md:block"></i>
          </button>
        </div>
      </div>
      <!-- main section -->
      <div class=" flex-1 flex h-screen">
        <Profile/>
      </div>
    </div>
</template>

<script>
import Profile from './pages/Profile.vue'
export default {
  components: {
    Profile
  },

}
</script>

<style>

</style>
