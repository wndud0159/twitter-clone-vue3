<template>
    <!-- chat list -->
    <div class=" w-2/5 border-r border-gray-100 flex flex-col">
        <div class=" px-3 py-4 font-bold text-lg border-b border-gray-100">
            쪽지
        </div>
        <!-- a char list -->
        <div class=" overflow-y-auto">
            <div class="flex px-3 py-4 hover:bg-gray-50 border-b border-gray-100" v-for="message in 10" :key="message">
                <img 
                src="http://picsum.photos/100" 
                class="w-12 h-12 rounded-full mr-2">
                <div class="flex flex-col">
                    <div class="flex space-x-1">
                        <span class="font-bold">wndud0159.com</span>
                        <span class="text-gray-500 hidden xl:inline-block">@wndud0159</span>
                        <span class="text-gray-500 hidden lg:inline-block">1월 29일</span>
                    </div>
                    <div class="text-gray-500">메세지</div>
                </div> 
            </div>
        </div>
    </div>
    <!-- chatting -->
    <div class="w-3/5">
        <div class="flex flex-col h-screen">
            <!-- title -->
            <div class="flex p-3 justify-between items-center border-b border-gray-100">
                <div class="flex">
                    <img 
                    src="http://picsum.photos/100" 
                    class=" rounded-full w-8 h-8 mt-1 mr-2">
                    <div>
                        <div class="font-bold text-sm">wndud0159.com</div>
                        <div class="text-gray-500 text-xs">@wndud0159</div>
                    </div>
                </div>
                <i class="fas fa-exclamation-circle text-lg text-primary"></i>
            </div>
            <!-- user info -->
            <div class="flex flex-col border-b border-gray-100 py-6 text-xs items-center justify-center hover:bg-gray-50">
                <div class=" space-x-1">
                    <span class="font-bold">wndud0159.com</span>
                    <span>@wndud0159</span>
                </div>
                <div class="flex space-x-1">
                    <div class="mr-4">
                        <span class="font-bold">28</span><span class="text-gray-500">팔로워 중</span>
                    </div>
                    <div>
                        <span class="font-bold">7</span><span class="text-gray-500">팔로워</span>
                    </div>
                </div>
                <div class=" space-x-1 text-gray-500">
                    <i class="far fa-calendar-alt"></i>
                    <span>가입일:</span><span>2011년11월</span>
                </div>
            </div>
            <!-- chat bubble -->
            <div class="flex-1 overflow-y-auto">
                <!-- chat bubble :my chat -->
                <div class=" text-right p-3" v-for="chat in 5" :key="chat">
                    <span class=" bg-primary text-white px-4 py-2 rounded-full">메세지</span>
                    <div class=" text-xs text-gray-500 mt-2">2021년 1월 29일 오전 1:05</div>
                </div>
                <!-- chat bubble :opponent chat-->
                <div class=" text-left p-3" v-for="chat in 10" :key="chat">
                    <span class=" bg-gray-100 px-4 py-2 rounded-full">메세지</span>
                    <div class=" text-xs text-gray-500 mt-2">2021년 1월 29일 오전 1:05</div>
                </div>
            </div>
            <!-- chat input -->
            <div class="flex items-center border-t border-gray-100 p-3">
                <input type="text"
                class=" px-2 py-2 bg-gray-200 rounded-full outline-none flex-1"
                placeholder="새 쪽지 작성하기"> 
                <button class="text-center">
                    <i class="far fa-paper-plane text-lg w-10 h-10 rounded-full text-primary hover:bg-gray-50 flex items-center justify-center"></i>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>