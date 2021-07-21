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
              <span class="ml-5 text-lg hidden sm:inline-block">홈</span>
            </div>
            <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
              <i class="fas fa-hashtag fa-fw text-2xl"></i>
              <span class="ml-5 text-lg hidden sm:inline-block">탐색하기</span>
            </div>
            <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
              <i class="far fa-bell fa-fw text-2xl"></i>
              <span class="ml-5 text-lg hidden sm:inline-block">알림</span>
            </div>
            <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
              <i class="far fa-envelope fa-fw text-2xl"></i>
              <span class="ml-5 text-lg hidden sm:inline-block">쪽지</span>
            </div>
            <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
              <i class="far fa-bookmark fa-fw text-2xl"></i>
              <span class="ml-5 text-lg hidden sm:inline-block">북마크</span>
            </div>
            <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
              <i class="far fa-list-alt fa-fw text-2xl"></i>
              <span class="ml-5 text-lg hidden sm:inline-block">리스트</span>
            </div>
            <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
              <i class="far fa-user fa-fw text-2xl"></i>
              <span class="ml-5 text-lg hidden sm:inline-block">프로필</span>
            </div>
            <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
              <i class="fas fa-ellipsis-h fa-fw text-2xl"></i>
              <span class="ml-5 text-lg hidden sm:inline-block">더보기</span>
            </div>
          </div>
          <!-- tweet button -->
          <div class=" mr-9 sm:ml-4 ml-3">
            <button class=" sm:w-full w-10 mt-3  bg-primary text-white rounded-full h-10 hover:bg-dark">
              <span class="hidden sm:inline-block">트윗</span>
              <i class="fas fa-plus sm:hidden"></i>
            </button>
          </div>
        </div>
        <!-- profile button -->
        <div class=" sm:ml-4 mb-3 mr-9 ml-3">
          <button class=" flex rounded-full sm:w-full h-10 hover:bg-blue-50 items-center hover:opacity-80 w-10 mt-6">
            <!-- 랜덤이미지 -->
            <img class=" w-10 h-10 rounded-full" src="http://picsum.photos/100" alt="">
            <div class=" sm:ml-2 sm:block hidden">
              <div class=" text-sm font-bold">wndud0159.com</div>
              <div class=" text-xs text-gray-500 text-left">@wndud0159</div>
            </div>
            <i class=" fas fa-ellipsis-h fa-fw text-xs ml-auto hidden sm:block"></i>
          </button>
        </div>
      </div>
      <div class=" w-3/4"></div>
    </div>
</template>

<script setup>

</script>

<style>

</style>
