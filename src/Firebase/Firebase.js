// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_FIREBASE_API_KEY,
  authDomain: "task-manager-46b21.firebaseapp.com",
  projectId: "task-manager-46b21",
  storageBucket: "task-manager-46b21.appspot.com",
  messagingSenderId: "536021241606",
  appId: "1:536021241606:web:6a8e9c353cab801732d887",
  measurementId: "G-YHGMXM06QR"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);