// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHt4bZqE143r5uJkiXo1gAP1bI3TTdepo",
  authDomain: "fir-saurabh.firebaseapp.com",
  projectId: "fir-saurabh",
  storageBucket: "fir-saurabh.firebasestorage.app",
  messagingSenderId: "1061073833338",
  appId: "1:1061073833338:web:9656a0b89919e3331a9ac3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;