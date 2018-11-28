import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
// Initialize Firebase

 var config = {
  apiKey: "AIzaSyBNCtnND9dwp_J4QI6qnt5ySKm1MemOhW0",
  authDomain: "pero360blogs.firebaseapp.com",
  databaseURL: "https://pero360blogs.firebaseio.com",
  projectId: "pero360blogs",
  storageBucket: "pero360blogs.appspot.com",
  messagingSenderId: "AIzaSyBNCtnND9dwp_J4QI6qnt5ySKm1MemOhW0"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true});


export default firebase;