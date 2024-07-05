// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDL_nc64XhJ8ATTLPq_10PyyWMWQoa5iu4",
  authDomain: "expense-tracker-12b93.firebaseapp.com",
  projectId: "expense-tracker-12b93",
  storageBucket: "expense-tracker-12b93.appspot.com",
  messagingSenderId: "545030260793",
  appId: "1:545030260793:web:50019f09ee8d6a7bc8a5e8",
  measurementId: "G-DNNKJS407Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

const analytics = getAnalytics(app);

//firebase login
//firebase init
//firebase deploy
