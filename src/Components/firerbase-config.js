// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBo65q-4CGsXbNKLcVx-01okrIdn1yvJHs",
  authDomain: "cold-4f993.firebaseapp.com",
  projectId: "cold-4f993",
  storageBucket: "cold-4f993.appspot.com",
  messagingSenderId: "802145915940",
  appId: "1:802145915940:web:14d47e73e309d2d1c4b4b1",
  measurementId: "G-6Q4TERJLVG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);