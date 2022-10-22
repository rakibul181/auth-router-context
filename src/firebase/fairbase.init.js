// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4wJRPjIQBXC5JLRxoCa0E6JltDswTPVg",
  authDomain: "react-auth-router-contex-f6df3.firebaseapp.com",
  projectId: "react-auth-router-contex-f6df3",
  storageBucket: "react-auth-router-contex-f6df3.appspot.com",
  messagingSenderId: "578915541688",
  appId: "1:578915541688:web:e761945a58aea880e70a4d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app