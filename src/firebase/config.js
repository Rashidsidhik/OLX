import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNIv3C-rWXXvfD8L80LYyzEiEsMXgg5vU",
  authDomain: "fir-d1ad6.firebaseapp.com",
  projectId: "fir-d1ad6",
  storageBucket: "fir-d1ad6.appspot.com",
  messagingSenderId: "847415397572",
  appId: "1:847415397572:web:2ac0e44fc974938148cd91",
  measurementId: "G-W8RKKZHEQ6"
};

  export default firebase.initializeApp(firebaseConfig)