// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore"

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
var firebaseConfig = {
    apiKey: "AIzaSyCu77G5me7VWc6evAg8PaJG7IM303gMNrI",
    authDomain: "portfolio-cc-df21e.firebaseapp.com",
    projectId: "portfolio-cc-df21e",
    storageBucket: "portfolio-cc-df21e.appspot.com",
    messagingSenderId: "570320907113",
    appId: "1:570320907113:web:e879d2bccf0b6c46de2bf8",
    measurementId: "G-608FTKF69T"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);