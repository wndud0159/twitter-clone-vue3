<template>
    <!-- profile section -->
    <div class="flex flex-col flex-1 border-r border-gray-100">
        <!-- title -->
        <div class="flex p-2 border-b border-gray-100">
            <i class="fas fa-arrow-left text-lg w-10 h-10 text-primary rounded-full hover:bg-gray-50 text-center py-2 mr-6"></i>
            <div class="flex flex-col">
                <span class=" font-bold">{{currentUser.userName}}</span>
                <span class="text-sm text-gray-500">{{currentUser.num_tweets}}트윗</span>
            </div>
        </div>
        <!-- background image -->
        <div class="bg-gray-300 h-48 relative flex-none">
            <img :src="currentUser.background_image_url"
            class="w-full h-48 object-cover">
            <!-- profile image -->
            <div class=" w-28 h-28 rounded-full bg-gray-400 border-2 border-white absolute -bottom-14 left-2">
                <img 
                :src="currentUser.profile_image_url" 
                class="h-full w-full rounded-full cursor-pointer opacity-80 hover:opacity-100">
            </div>
        </div>
        <!-- profile edit button -->
        <div class="text-right p-2">
            <button @click="showProfileEditModal = true" class="text-sm rounded-full font-bold border border-primary px-2 py-2 text-primary hover:bg-blue-50">프로필 수정</button>
        </div>
        <!-- profile info -->
        <div class="text-xs p-3">
            <div class="font-bold text-sm">{{currentUser.email}}</div>
            <div class="text-gray-500 mb-1">@{{currentUser.userName}}</div>
            <div class="mb-1 space-x-1 text-gray-500">
                <i class="far fa-calendar-alt"></i>
                <span>가입일:</span>
                <span>{{moment(currentUser.created_at).format("YYYY년 MM월")}}</span>
            </div>
            <div class=" space-x-1">
                <span class="font-bold">{{currentUser.following}}</span><span class="mr-3 text-gray-500">팔로워 중</span>
                <span class="font-bold">{{currentUser.followers}}</span><span class="text-gray-500">팔로워</span>
            </div>
        </div>
        <!-- tabs -->
        <div class="flex text-gray-500 font-bold text-center border-b border-gray-100">
            <div @click="currentTab = 'tweet'" :class="`${currentTab == 'tweet' ? 'border-b-2 border-primary text-primary' : ''} hover:bg-gray-50 hover:text-primary w-1/3 cursor-pointer py-2 `">트윗</div>
            <div @click="currentTab = 'retweet'" :class="`${currentTab == 'retweet' ? 'border-b-2 border-primary text-primary' : ''} hover:bg-gray-50 hover:text-primary w-1/3 cursor-pointer py-2 `">리트윗</div>
            <div @click="currentTab = 'like'" :class="`${currentTab == 'like' ? 'border-b-2 border-primary text-primary' : ''} hover:bg-gray-50 hover:text-primary w-1/3 cursor-pointer py-2 `">좋아요</div>
        </div>
        <!-- tweets section -->
        <div class="overflow-y-auto">
        <Tweets v-for="tweet in tweets" :key="tweet" :currentUser="currentUser" :tweet="tweet"/>
        </div>
    </div>
    <!-- Trends section -->
    <Trends/>
    <profile-edit-modal v-if="showProfileEditModal" @close-modal="showProfileEditModal = false"></profile-edit-modal>
</template>

<script>
import Trends from '../components/Trends.vue'
import Tweets from '../components/Tweets.vue'
import store from '../store'
import {computed, ref, onBeforeMount} from 'vue'
import {TWEET_COLLECTION, USER_COLLECTION} from '../firebase'
import getTweetInfo from "../utills/getTweetInfo"
import moment from "moment"
import ProfileEditModal from '../components/ProfileEditModal.vue'

export default {
    components: {
        Trends,
        Tweets,
        ProfileEditModal
    },
    setup() {

        const currentUser = computed(() => store.state.user)
        const tweets = ref([])
        const retweets = ref([])
        const liketweets = ref([])
        const currentTab = ref("tweet")
        const showProfileEditModal = ref(false)

        onBeforeMount(() => {
            
            USER_COLLECTION.doc(currentUser.value.uid).onSnapshot((doc) => {
                store.commit("SET_USER", doc.data())
            })

            TWEET_COLLECTION
            // .where('uid', "===", currentUser.value.uid)
            .orderBy('created_at', 'desc')
            .onSnapshot((snapshot) => {
                snapshot.docChanges().forEach(async (change) => {
                    let tweet = await getTweetInfo(change.doc.data(), currentUser.value)

                    if (change.type === 'added') {
                    tweets.value.splice(change.newIndex, 0, tweet)
                    } else if (change.type === 'modified') {
                    tweets.value.splice(change.oldIndex, 1, tweet)
                    } else if (change.type === 'removed') {
                    tweets.value.splice(change.oldIndex, 1)
                    }
                })
            })
        })

        return {
            currentUser, tweets, moment, currentTab, showProfileEditModal
        }
    }
}
</script>

<style>

</style>