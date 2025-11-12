// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8odn4dMXmaGy_A-lZBql1V6PYS17A5zs",
  authDomain: "skill-lab-nextjs.firebaseapp.com",
  projectId: "skill-lab-nextjs",
  storageBucket: "skill-lab-nextjs.firebasestorage.app",
  messagingSenderId: "242137758243",
  appId: "1:242137758243:web:46dfb5ba0f1cb8e3568f96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//enabled for the above app
export const authFeature = getAuth(app)
//enabled db for the app
export const database = getFirestore(app)