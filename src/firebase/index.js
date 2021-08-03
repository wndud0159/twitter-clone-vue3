import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAeTmYU7ZvQoUXjF8MeOrSdHMfaWDdeHAs",
    authDomain: "twitter-clone-vue3.firebaseapp.com",
    projectId: "twitter-clone-vue3",
    storageBucket: "twitter-clone-vue3.appspot.com",
    messagingSenderId: "328910614516",
    appId: "1:328910614516:web:6e2d512cd3c14b7ed113a1",
    measurementId: "G-KS44TR3BMB"
  }

  firebase.initializeApp(firebaseConfig)

  export const auth = firebase.auth()
  export const db = firebase.firestore()

  export const USER_COLLECTION = db.collection("users")
  export const TWEET_COLLECTION = db.collection("tweets")
  export const COMENT_COLLECTION = db.collection("coments")
  export const RETWEET_COLLECTION = db.collection('retweets')
 
