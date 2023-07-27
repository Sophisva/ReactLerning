import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBySc2AIbrY5QDtYKD7OK92ulQtNY3oG8Y",
  authDomain: "basic-firebase-78fab.firebaseapp.com",
  projectId: "basic-firebase-78fab",
  storageBucket: "basic-firebase-78fab.appspot.com",
  messagingSenderId: "120852981813",
  appId: "1:120852981813:web:63700c7244a845b8b0297c",
  measurementId: "G-6K2XP9R8W4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);