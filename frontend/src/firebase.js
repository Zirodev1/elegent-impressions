// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "elegant-impressions-blog.firebaseapp.com",
  projectId: "elegant-impressions-blog",
  storageBucket: "elegant-impressions-blog.appspot.com",
  messagingSenderId: "456046199269",
  appId: "1:456046199269:web:d61074f8a2ae26be282f0c",
  measurementId: "G-8YZ1677BXL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);