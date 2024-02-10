import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { Functions } from 'firebase/functions';
import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyC46J0w-GztR6vGo1iVnSBrsTtBsQTeNKk",
    authDomain: "community-volunteering-94562.firebaseapp.com",
    databaseURL: "https://community-volunteering-94562-default-rtdb.firebaseio.com/",
    projectId: "community-volunteering-94562",
    storageBucket: "community-volunteering-94562.appspot.com",
    messagingSenderId: "178508824003",
    appId: "1:178508824003:web:8483fb85c7eb22890ad176",
    measurementId: "G-QLC9436J42"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  //const analytics = getAnalytics(app);
  export const db = getDatabase(app);
  export const auth = getAuth();
  export default {firebaseConfig, app, auth};