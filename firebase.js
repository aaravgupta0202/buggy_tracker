// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBupPnckDbBcqNOIcCGVucOfEeUd_uo22A",
  authDomain: "tracker-mit.firebaseapp.com",
  projectId: "tracker-mit",
  storageBucket: "tracker-mit.firebasestorage.app",
  messagingSenderId: "1055743844534",
  appId: "1:1055743844534:web:b770c413e908951f470617",
  measurementId: "G-M6JQWD69PH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);