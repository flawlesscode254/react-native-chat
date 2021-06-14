import firebase from 'firebase'
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBp8wgvT-15awC9QfmHWnKTVicCPLTRQGg",
    authDomain: "social-58568.firebaseapp.com",
    projectId: "social-58568",
    storageBucket: "social-58568.appspot.com",
    messagingSenderId: "551962067624",
    appId: "1:551962067624:web:c8e529347b0688f313789d",
    measurementId: "G-YTBE89VMVS"
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