// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAGBdlWN6JPOAd2degEkdfiuoz-KanVato",
    authDomain: "react-cursos-dd251.firebaseapp.com",
    projectId: "react-cursos-dd251",
    storageBucket: "react-cursos-dd251.appspot.com",
    messagingSenderId: "769197279089",
    appId: "1:769197279089:web:0f16babb43df116653d8d0"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
