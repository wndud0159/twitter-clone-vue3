import {TWEET_COLLECTION} from '../firebase'

export default (tweetBody, currentUser) => {

    return new Promise(async (resolve, reject) => {
        try {
            //orderBy('created_at', 'desc').
        const doc = TWEET_COLLECTION.doc()
        await doc.set({
            id: doc.id,
            tweet_body: tweetBody,
            uid: currentUser.uid,
            created_at: Date.now(),
            num_coments: 0,
            num_retweets: 0,
            num_likes: 0
        })
        resolve(true)
        } catch(e) {
            reject(e)
        }
    })
  }
