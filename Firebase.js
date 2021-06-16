import firebase from 'firebase'
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB9HHOMNjo7o0xnSvxniXQ5c-6t0awme9E",
    authDomain: "pump-chat.firebaseapp.com",
    databaseURL: "https://pump-chat-default-rtdb.firebaseio.com",
    projectId: "pump-chat",
    storageBucket: "pump-chat.appspot.com",
    messagingSenderId: "214910864357",
    appId: "1:214910864357:web:8fbdc47a87e89131357d0c",
    measurementId: "G-S9C5VCHXZN"
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app()
}

const db = firebase.firestore()
const auth = firebase.auth()
const store = firebase.storage()

export default db
export { store, auth }