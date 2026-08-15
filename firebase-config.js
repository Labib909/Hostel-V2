// Paste your Firebase project's config object here.
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
// Get it from: Firebase Console -> Project Settings -> General -> Your apps -> Web app (</>)
// See SETUP-FIREBASE.md for full steps.
const firebaseConfig = {
  apiKey: "PASTE_API_KEY",
  authDomain: "PASTE_PROJECT_ID.firebaseapp.com",
  projectId: "PASTE_PROJECT_ID",
  storageBucket: "PASTE_PROJECT_ID.appspot.com",
  messagingSenderId: "PASTE_SENDER_ID",
  appId: "PASTE_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Firebase Auth needs an email format internally, but students/admin log in
// with just a phone number. This turns a phone number into a consistent
// internal address, e.g. "01712345678" -> "01712345678@studentportal.app"
function phoneToAuthEmail(phone){
  const digits = phone.replace(/[^0-9]/g, '');
  return digits + '@studentportal.app';
}
