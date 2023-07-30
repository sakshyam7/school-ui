
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBa3C0RP4SXSdEM0h57LUDE8D0RnJkyT6c",
  authDomain: "myschool-a2c3a.firebaseapp.com",
  projectId: "myschool-a2c3a",
  storageBucket: "myschool-a2c3a.appspot.com",
  messagingSenderId: "727429229928",
  appId: "1:727429229928:web:31a29510c665fce0f9fadd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth()