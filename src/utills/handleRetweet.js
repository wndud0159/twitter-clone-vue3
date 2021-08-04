// import {RETWEET_COLLECTION, TWEET_COLLECTION} from '../firebase'
// import store from '../store'
// import firebase from 'firebase'
// // import {ref} from 'vue'

// export default async (tweet) => {

    

//     try {
//     // already retweeted
//     if(tweet.isRetweeted) {
//         console.log(tweet.isRetweeted)
//         //delete retweet doc
//         const snapshot = await RETWEET_COLLECTION.where('from_tweet_id', '==', tweet.id).where('uid', '==', store.state.user.uid).get()
//         await snapshot.docs[0].ref.delete()
//         // console.log(snapshot.docs[0].ref)
//         // decrease retweet number
//         await TWEET_COLLECTION.doc(tweet.id).update({
//             num_retweets: firebase.firestore.FieldValue.increment(-1),
//         })
//     } else {
//         console.log("실패", tweet.isRetweeted)
//         //not retweeted
//         const doc = RETWEET_COLLECTION.doc()
//         await doc.set({
//             "id": doc.id,
//             "from_tweet_id": tweet.uid,
//             "uid": store.state.user.uid,
//             "created_at": Date.now()
//         })       
//         await TWEET_COLLECTION.doc(tweet.id).update({
//             num_retweets: firebase.firestore.FieldValue.increment(1),
//         })
//     }
    


//     } catch(e) {
//         console.log("handle retweet error: ", e)
//     }

// }

import { RETWEET_COLLECTION, TWEET_COLLECTION } from '../firebase'
import store from '../store'
import firebase from 'firebase'

export default async (tweet) => {
  try {
    // Already retweeted
    if (tweet.isRetweeted) {
      // Delete retweet doc
      const snapshot = await RETWEET_COLLECTION.where('from_tweet_id', '==', tweet.id).where('uid', '==', store.state.user.uid).get()
      await snapshot.docs[0].ref.delete()
      // Decrease retweet number
      await TWEET_COLLECTION.doc(tweet.id).update({
        num_retweets: firebase.firestore.FieldValue.increment(-1),
      })
    } else {
      // Not retweeted
      const doc = RETWEET_COLLECTION.doc()
      await doc.set({
        id: doc.id,
        from_tweet_id: tweet.id,
        uid: store.state.user.uid,
        created_at: Date.now(),
      })

      await TWEET_COLLECTION.doc(tweet.id).update({
        num_retweets: firebase.firestore.FieldValue.increment(1),
      })
    }
  } catch (e) {
    console.log('handle retweet error:', e)
  }
}
