import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyB0iXJdhLSY7eqvi7nagCss7YA3vicZGz8",
    authDomain: "frank-clone.firebaseapp.com",
    databaseURL: "https://frank-clone.firebaseio.com",
    projectId: "frank-clone",
    storageBucket: "frank-clone.appspot.com",
    messagingSenderId: "604341372786",
    appId: "1:604341372786:web:21b9ac97008cc06463ffeb",
    measurementId: "G-F9KF5Z27RM",
  }
if (!firebase.apps.length) {
    firebase.initializeApp(config)
}
const auth = firebase.auth()
const db = firebase.firestore()
export { auth, firebase, db }