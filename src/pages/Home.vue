<template>
     <!-- main part -->
          <div class=" flex-1 border-r border-gray-100 overflow-auto">
            <div class=" flex flex-col">
              <!-- title -->
              <div class=" border-b border-gray-100 px-3 py-3 font-bold text-lg">
                홈
              </div>
              <!-- tweeting section -->
              <div class=" flex px-3 py-3 border-b-8 border-gray-100">
                <img class=" cursor-pointer hover:opacity-80 w-10 h-10 rounded-full" src="http://picsum.photos/200" alt="">
                <div class=" ml-2 flex-1 flex flex-col">
                  <textarea placeholder="무슨 일이 일어나고 있나요?" class=" w-full text-lg font-bold focus:outline-none mb-3 resize-none"></textarea>
                  <div class=" text-right">
                    <button class=" hover:bg-dark text-sm font-bold bg-primary text-white px-4 py-1 rounded-full">트윗</button>
                  </div>
                </div>
              </div>
              <!-- tweets -->
              <div class=" flex px-3 py-3 border-b border-gray-100" v-for="tweet in 10" :key="tweet">
                <img 
                class="w-10 h-10 rounded-full hover:opacity-80 cursor-pointer" 
                src="http://picsum.photos/200"
                >
                <div class=" ml-3 flex-1 flex flex-col space-y-1">
                  <div class=" text-sm space-x-1">
                    <span class=" font-bold">조국</span>
                    <span class=" text-gray-500 text-xs">@patriamea</span>
                    <span>·</span>
                    <span class=" text-gray-500 text-xs">Jul 19</span>
                  </div>
                  <!-- tweet body -->
                  <div>
                    【게임 이벤트 안내】 
                    「피처 스카우트 와타루 편」 START~!!Medium star

                    ※ 개최 기간: 
                    2021년7월19일 12:00 - 8월2일 12:00

                    많이 즐겨주세요~Blue heart
                  </div>
                  <!-- tweet actions -->
                  <div class="flex justify-between">
                    <div class=" text-gray-500 hover:text-primary">
                      <i class="far fa-comment hover:bg-blue-50 p-2 rounded-full"></i>
                      <span class="ml-1 text-sm">11</span>
                    </div>
                    <div class=" text-gray-500 hover:text-green-500">
                      <i class="fas fa-retweet  hover:bg-green-50 p-2 rounded-full"></i>
                      <span class="ml-1  text-sm">11</span>
                    </div>
                    <div class=" text-gray-500 hover:text-red-500">
                      <i class="far fa-heart  hover:bg-red-50 p-2 rounded-full"></i>
                      <span class="ml-1  text-sm">11</span>
                    </div>
                    <div class=" text-gray-500 hover:text-primary">
                      <i class="far fa-share-square  hover:bg-blue-50 p-2 rounded-full"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- trend part -->
          <Trends/>
</template>

<script>
import Trends from '../components/Trends.vue'
export default {
    components: {
        Trends
    }
}
</script>

<style>

</style>