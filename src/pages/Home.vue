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
              <Tweets v-for="tweets in 10" :key="tweets" />
            </div>
          </div>
          <!-- trend part -->
          <Trends/>
</template>

<script>
import Trends from '../components/Trends.vue'
import Tweets from '../components/Tweets.vue'
export default {
    components: {
        Trends,
        Tweets
    }
}
</script>

<style>

</style>