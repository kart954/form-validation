import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAlzrreOYiSd61SO9DbZvuO-rtiZm81p0Y",
    authDomain: "sociallogin-f7417.firebaseapp.com",
    projectId: "sociallogin-f7417",
    storageBucket: "sociallogin-f7417.appspot.com",
    messagingSenderId: "256598180453",
    appId: "1:256598180453:web:34ce721b79845b9df7fc8c",
    measurementId: "G-JFF8Q5WREN"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;
