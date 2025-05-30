// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAjkzXwhOW_4qMTx3bpXiu_y3EyQahZUE",
  authDomain: "job-finder-2c5a3.firebaseapp.com",
  projectId: "job-finder-2c5a3",
  storageBucket: "job-finder-2c5a3.firebasestorage.app",
  messagingSenderId: "522264971997",
  appId: "1:522264971997:web:3dd2b3c0a0bf9c196fa934",
  measurementId: "G-5MBJF75LV4"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export const db = getFirestore(firebase);
export const auth = getAuth(firebase);