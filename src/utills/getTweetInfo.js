import { RETWEET_COLLECTION, USER_COLLECTION } from "../firebase"

export default async (tweet, currentUser) => {
    // Adding user info
    const doc = await USER_COLLECTION.doc(tweet.uid).get()
    tweet.profile_image_url = doc.data().profile_image_url
    tweet.email = doc.data().email
    tweet.userName = doc.data().userName
    // tweet = {...tweet, ...doc.data()}
    // console.log(tweet)

    // Adding retweet info
    const retweetSnapshot = await RETWEET_COLLECTION.where('from_tweet_id', '==', tweet.id).where('uid', '==', currentUser.uid).get()
    if (retweetSnapshot.empty) {
        tweet.isRetweeted = false
    } else {
        tweet.isRetweeted = true
    }
    

    return tweet
  }