<template>
    <div class="flex-1 border-r border-gray-100 flex flex-col overflow-y-auto">
        <!-- title -->
        <div class="p-3 text-lg border-b border-gray-100 font-bold">알림</div>
        <!-- notifications -->
        <div class="flex flex-col hover:bg-gray-50 p-3 space-y-2 border-b border-gray-100 cursor-pointer" v-for="notification in 10" :key="notification">
            <div class="flex justify-between">
                <img 
                src="http://picsum.photos/100"
                class="w-10 h-10 rounded-full hover:opacity-80">
                <i class="fas fa-ellipsis-h text-gray-500 hover:bg-blue-50 hover:text-primary rounded-full w-10 h-10 items-center justify-center flex"></i>
            </div>
            <div><span class="font-bold">최주영</span> 님의 최근 트윗</div>
            <div class="text-gray-500">
                【게임 이벤트 안내】 
                    「피처 스카우트 와타루 편」 START~!!Medium star

                    ※ 개최 기간: 
                    2021년7월19일 12:00 - 8월2일 12:00

                    많이 즐겨주세요~Blue heart
            </div>
        </div>
    </div>
    <!-- trends section -->
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