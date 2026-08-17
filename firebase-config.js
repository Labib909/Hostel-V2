// Your project's Firebase config.
const firebaseConfig = {
  apiKey: "AIzaSyAuesxoEZfY6ky2WJfseo7dNt2IuVf7bQA",
  authDomain: "hostel-207a6.firebaseapp.com",
  projectId: "hostel-207a6",
  storageBucket: "hostel-207a6.firebasestorage.app",
  messagingSenderId: "231042691427",
  appId: "1:231042691427:web:0f3bb144a836a8ebcea356"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
// Only pages that load the firebase-storage-compat.js script (photo upload
// pages) will actually use this — guarded so other pages don't error out.
const storage = (typeof firebase.storage === 'function') ? firebase.storage() : null;

// Firebase Auth needs an email format internally, but students/admin log in
// with just a phone number. This turns a phone number into a consistent
// internal address, e.g. "01712345678" -> "01712345678@studentportal.app"
function phoneToAuthEmail(phone){
  const digits = phone.replace(/[^0-9]/g, '');
  return digits + '@studentportal.app';
}
