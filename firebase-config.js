// Paste your Firebase project's config object here.
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
// internal address, e.g. "01712345678" -> "01712345678@studentportal.app"
function phoneToAuthEmail(phone){
  const digits = phone.replace(/[^0-9]/g, '');
  return digits + '@studentportal.app';
}
