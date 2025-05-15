// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDS_Og1OG05Y2VBbSoTpUZmRPk7ZqH5LeY",
  authDomain: "netflixgeniegpt.firebaseapp.com",
  projectId: "netflixgeniegpt",
  storageBucket: "netflixgeniegpt.firebasestorage.app",
  messagingSenderId: "263339262221",
  appId: "1:263339262221:web:49fb251292ac26c64fb044",
  measurementId: "G-ZXFJJL800B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);