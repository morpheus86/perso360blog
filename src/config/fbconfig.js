import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
// Initialize Firebase

 var config = {
  apiKey: process.env.api,
  authDomain: "pero360blogs.firebaseapp.com",
  databaseURL: "https://pero360blogs.firebaseio.com",
  projectId: "pero360blogs",
  storageBucket: "pero360blogs.appspot.com",
  messagingSenderId: process.env.messengerId
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true});


export default firebase;