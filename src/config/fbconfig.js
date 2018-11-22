import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
// Initialize Firebase
 var config = {
  apiKey: process.env.apiKey,
  authDomain: "pero360blogs.firebaseapp.com",
  databaseURL: "https://pero360blogs.firebaseio.com",
  projectId: "pero360blogs",
  storageBucket: "pero360blogs.appspot.com",
  messagingSenderId: process.env.messagingSenderId
};

firebase.firestore().settings({ timestampsInSnapshots: true});

firebase.initializeApp(config);

export default firebase; 