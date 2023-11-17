// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  { getFirestore } from '@firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFkJDyUo0JQ43z4YEyfuivxZyWzLR-F9c",
  authDomain: "realoneclone.firebaseapp.com",
  projectId: "realoneclone",
  storageBucket: "realoneclone.appspot.com",
  messagingSenderId: "607097819394",
  appId: "1:607097819394:web:7db0df1ced6cfeb865f21b",
  measurementId: "G-9CTEFCLM26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const  firestore  =getFirestore(app);