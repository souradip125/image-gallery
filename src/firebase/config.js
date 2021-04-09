
import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'
import 'firebase/analytics'

var firebaseConfig = {
    apiKey: "AIzaSyAvgpoP7ARUUojArjP0eD4yQ5ceRzCM4lg",
    authDomain: "souradip-gallery.firebaseapp.com",
    projectId: "souradip-gallery",
    storageBucket: "souradip-gallery.appspot.com",
    messagingSenderId: "689638690691",
    appId: "1:689638690691:web:365e675eb36c5d802730b6",
    measurementId: "G-GQ8Y8C3088"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  //const timeStamp=firebase.firestore.FieldValue.serverTimestamp
  const projectFirestore=firebase.firestore()
  const projectStorage=firebase.storage()
  const timestamp=firebase.firestore.FieldValue.serverTimestamp

  export {projectFirestore,projectStorage,timestamp} ;
  