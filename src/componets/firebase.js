// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpKA_VIyxO2q_i3sksbDsAjUH9gKvHTAY",
  authDomain: "facebook-clone-e66d3.firebaseapp.com",
  projectId: "facebook-clone-e66d3",
  storageBucket: "facebook-clone-e66d3.appspot.com",
  messagingSenderId: "386678647472",
  appId: "1:386678647472:web:5fffed72ffca8d2041e975"}

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
//const analytics = getAnalytics(firebaseApp);
export{db,auth,firebaseApp,storage};





