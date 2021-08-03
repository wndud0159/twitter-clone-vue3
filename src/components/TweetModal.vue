<template>
<div class="fixed z-10 inset-0 overflow-y-auto" @click="$emit('close-modal')">
  <div class="flex justify-center min-h-screen sm:pt-6 sm:px-4 sm:pb-20 text-center sm:block sm:p-0">
    <div class="fixed inset-0 transition-opacity" aria-hidden="true">
        <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
    </div>



    <!-- content -->
    <div @click.stop class="inline-block  bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full">
        <div class="bg-white">
            <div class="border-b border-gray-100 p-2 flex items-center justify-between">
                <button @click="$emit('close-modal')" class="fas fa-times text-primary text-lg w-10 h-10 p-2 hover:bg-blue-50 rounded-full"></button>
                <!-- tweet button -->
                  <div class=" text-right  sm:hidden mr-3">
                    <button v-if="!tweetBody.length" class=" hover:bg-primary text-sm font-bold bg-light text-white px-4 py-1 rounded-full">트윗</button>
                    <button v-else @click="onAddTweet" class=" hover:bg-dark text-sm font-bold bg-primary text-white px-4 py-1 rounded-full">트윗</button>
                  </div>
            </div>
            <!-- tweet section -->
            <div class=" flex p-4">
                <img class=" cursor-pointer hover:opacity-80 w-10 h-10 rounded-full" :src="currentUser.profile_image_url" alt="">
                <div class=" ml-2 flex-1 flex flex-col">
                  <textarea v-model="tweetBody" rows="5" placeholder="무슨 일이 일어나고 있나요?" class=" w-full text-lg font-bold focus:outline-none mb-3 resize-none"></textarea>
                  <!-- tweet button -->
                  <div class=" text-right hidden sm:block">
                    <button v-if="!tweetBody.length" class=" hover:bg-primary text-sm font-bold bg-light text-white px-4 py-1 rounded-full">트윗</button>
                    <button v-else @click="onAddTweet" class=" hover:bg-dark text-sm font-bold bg-primary text-white px-4 py-1 rounded-full">트윗</button>
                  </div>
                </div>
              </div>

        </div>
    </div>
  </div>
</div>
</template>

<script>
import addTweet from '../utills/addTweet'
import {computed, ref} from "vue"
import store from '../store'
export default {
    setup(props, {emit}) {
        const tweetBody = ref('')
        const currentUser =computed(() => store.state.user)

        const onAddTweet = async () => {
            try {
            await addTweet(tweetBody.value, currentUser.value)
            tweetBody.value = ''
            emit('close-modal')
            } catch(e) {
                console.log('on add tweet error on homepage:', e)
            }
        }

        return {
            tweetBody, onAddTweet, currentUser
        }



    }

}
</script>

<style>

</style>