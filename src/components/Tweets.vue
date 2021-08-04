<template>
                <!-- tweets -->
              <div class=" flex px-3 py-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer">
                <img 
                class="w-10 h-10 rounded-full hover:opacity-80 cursor-pointer" 
                :src="tweet.profile_image_url"
                >
                <div class=" ml-3 flex-1 flex flex-col space-y-1">
                  <div class="text-sm flex justify-between items-center">
                    <div class="space-x-1">
                      <span class="font-bold">{{ tweet.email }}</span>
                      <span class="text-gray-500 text-xs">@{{ tweet.username }}</span>
                      <span>·</span>
                      <span class="text-gray-500 text-xs">{{ moment(tweet.created_at).fromNow() }}</span>
                    </div>
                    <button v-if="currentUser.uid === tweet.uid" @click="onDeleteTweet(tweet)">
                      <i class="fas fa-trash text-red-400 p-2 rounded-full hover:bg-red-50"></i>
                    </button>
                  </div>
                  <!-- tweet body -->
                  <div>
                    <router-link :to="`/tweet/${tweet.id}`">{{ tweet.tweet_body }}</router-link>
                  </div>
                  <!-- tweet actions -->
                  <div class="flex justify-between">
                    <!-- coment button -->
                    <div @click="showComentModal = true" class=" text-gray-500 hover:text-primary">
                      <i class="far fa-comment hover:bg-blue-50 p-2 rounded-full"></i>
                      <span class="ml-1 text-sm">{{tweet.num_coments}}</span>
                    </div>
                    <!-- tweet button -->
                    <div v-if="!tweet.isRetweeted" class=" text-gray-500 hover:text-green-500" @click="handleRetweet(tweet)">
                      <i class="fas fa-retweet  hover:bg-green-50 p-2 rounded-full"></i>
                      <span class="ml-1  text-sm">{{tweet.num_retweets}}</span>
                    </div>
                    <div v-else class=" text-green-400" @click="handleRetweet(tweet)">
                      <i class="fas fa-retweet  hover:bg-green-50 p-2 rounded-full"></i>
                      <span class="ml-1  text-sm">{{tweet.num_retweets}}</span>
                    </div>
                    <!-- like button  -->
                    <div v-if="!tweet.isLiked" class=" text-gray-500 hover:text-red-500" @click="handleLikes(tweet)">
                      <i class="far fa-heart  hover:bg-red-50 p-2 rounded-full"></i>
                      <span class="ml-1  text-sm">{{tweet.num_likes}}</span>
                    </div>
                    <div v-else class=" text-red-500" @click="handleLikes(tweet)">
                      <i class="far fa-heart  hover:bg-red-50 p-2 rounded-full"></i>
                      <span class="ml-1  text-sm">{{tweet.num_likes}}</span>
                    </div>
                    <!-- share button -->
                    <div class=" text-gray-500 hover:text-primary">
                      <i class="far fa-share-square  hover:bg-blue-50 p-2 rounded-full"></i>
                    </div>
                  </div>
                </div>
              </div>
              <coment-modal :tweet="tweet" v-if="showComentModal" @close-modal="showComentModal = false"></coment-modal>
</template>

<script>
import moment from 'moment'
import {ref} from 'vue'
import ComentModal from './ComentModal.vue'
import handleRetweet from '../utills/handleRetweet'
import handleLikes from '../utills/handleLikes'
import {TWEET_COLLECTION ,COMENT_COLLECTION, LIKE_COLLECTION, RETWEET_COLLECTION, USER_COLLECTION} from '../firebase'
import firebase from 'firebase'

export default {
  components: { ComentModal },
   props: [
     'currentUser',
     'tweet'
   ],
   setup() {
     const showComentModal = ref(false)

    const onDeleteTweet = async (tweet) => {
      if (confirm('정말로 트윗을 삭제하시겠습니까?')) {
        // delete tweet
        await TWEET_COLLECTION.doc(tweet.id).delete()
        // delete comments
        const commentSnapshot = await COMENT_COLLECTION.where('from_tweet_id', '==', tweet.id).get()
        commentSnapshot.docs.forEach(async (doc) => await doc.ref.delete())
        // delete likes
        const likeSnapshot = await LIKE_COLLECTION.where('from_tweet_id', '==', tweet.id).get()
        likeSnapshot.docs.forEach(async (doc) => await doc.ref.delete())
        // delete retweets
        const retweetCollection = await RETWEET_COLLECTION.where('from_tweet_id', '==', tweet.id).get()
        retweetCollection.docs.forEach(async (doc) => await doc.ref.delete())
        // user collection - num_tweets (-1)
        await USER_COLLECTION.doc(tweet.uid).update({
          num_tweets: firebase.firestore.FieldValue.increment(-1),
        })
      }
    }

     return {
       moment, showComentModal, handleRetweet, handleLikes, onDeleteTweet
     }
   }
}
</script>

<style>

</style>