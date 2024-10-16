// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmee8vUY2u2_aFd7mGYr_qICEkrh9cjVY",
  authDomain: "twitter-clone-ec3e9.firebaseapp.com",
  projectId: "twitter-clone-ec3e9",
  storageBucket: "twitter-clone-ec3e9.appspot.com",
  messagingSenderId: "296362517212",
  appId: "1:296362517212:web:10e61b4fcf05624aab8a19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);