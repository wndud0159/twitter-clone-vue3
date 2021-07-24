<template>
    <!-- profile section -->
    <div class="flex-1 border-r border-gray-100">
        <!-- title -->
        <div class="flex p-2 border-b border-gray-100">
            <i class="fas fa-arrow-left text-lg w-10 h-10 text-primary rounded-full hover:bg-gray-50 text-center py-2 mr-6"></i>
            <div class="flex flex-col">
                <span class=" font-bold">wndud0159.com</span>
                <span class="text-sm text-gray-500">123트윗</span>
            </div>
        </div>
        <!-- background image -->
        <div class="bg-gray-300 h-40 relative">
            <!-- profile image -->
            <div class=" w-28 h-28 rounded-full bg-gray-400 border-2 border-white absolute -bottom-14 left-2">
                <img 
                src="http://picsum.photos/200" 
                class=" rounded-full cursor-pointer opacity-80 hover:opacity-100">
            </div>
        </div>
        <!-- profile edit button -->
        <div class="text-right p-2">
            <button class="text-sm rounded-full font-bold border border-primary px-2 py-2 text-primary hover:bg-blue-50">프로필 수정</button>
        </div>
        <!-- profile info -->
        <div class="text-xs p-3">
            <div class="font-bold text-sm">wndud0159.com</div>
            <div class="text-gray-500 mb-1">@wndud0159</div>
            <div class="mb-1 space-x-1 text-gray-500">
                <i class="far fa-calendar-alt"></i>
                <span>가입일:</span>
                <span>2011년10월</span>
            </div>
            <div class=" space-x-1">
                <span class="font-bold">20</span><span class="mr-3 text-gray-500">팔로워 중</span>
                <span class="font-bold">7</span><span class="text-gray-500">팔로워</span>
            </div>
        </div>
        <!-- tabs -->
        <div class="flex text-gray-500 font-bold text-center border-b border-gray-100">
            <div class="hover:bg-gray-50 hover:text-primary w-1/4 cursor-pointer py-2 border-b-2 border-primary">트윗</div>
            <div class="hover:bg-gray-50 hover:text-primary w-1/4 cursor-pointer py-2">트윗 및 답글</div>
            <div class="hover:bg-gray-50 hover:text-primary w-1/4 cursor-pointer py-2">미디어</div>
            <div class="hover:bg-gray-50 hover:text-primary w-1/4 cursor-pointer py-2">마음에 들어요</div>
        </div>
    </div>
    <!-- Trends section -->
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