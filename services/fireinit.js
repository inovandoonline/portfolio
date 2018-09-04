import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const config = {
  apiKey: "AIzaSyCwi5zC4fSUrF84cjepGPuj53gO-FkSu8U",
  authDomain: "inovando-online.firebaseapp.com",
  databaseURL: "https://inovando-online.firebaseio.com",
  projectId: "inovando-online",
  storageBucket: "inovando-online.appspot.com",
  messagingSenderId: "176541503687"
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export const auth = firebase.auth()
export const DB = firebase.database()

export default firebase
