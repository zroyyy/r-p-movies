// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOToRbtOzbXYTf2gfnw9zi1e8j_Qt852o",
  authDomain: "rpmovies-fedb7.firebaseapp.com",
  projectId: "rpmovies-fedb7",
  storageBucket: "rpmovies-fedb7.appspot.com",
  messagingSenderId: "282418486349",
  appId: "1:282418486349:web:5f5579c10f5a93ce049004",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
