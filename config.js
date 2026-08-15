const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyiyAUAq_frmRgJ7FL6t-mXvHiiTZU-FNQq7cHiSrfvOGeL5D6oKTdPMY_HnmaS6_m9/execURL_HERE";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuesxoEZfY6ky2WJfseo7dNt2IuVf7bQA",
  authDomain: "hostel-207a6.firebaseapp.com",
  projectId: "hostel-207a6",
  storageBucket: "hostel-207a6.firebasestorage.app",
  messagingSenderId: "231042691427",
  appId: "1:231042691427:web:0f3bb144a836a8ebcea356",
  measurementId: "G-01N9MKR742"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);