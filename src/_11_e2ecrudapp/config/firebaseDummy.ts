// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Authentication imports
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // 👈 Added for google authentication
import { getFirestore } from "firebase/firestore"; // 👈 Added for firestore cloud (DB) authentication

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "<firebaseApiKey_TO_REPLACE>",
  authDomain: "<firebaseAppName_TO_REPLACE>.firebaseapp.com",
  projectId: "<firebaseProjectId_TO_REPLACE>",
  storageBucket: "<firebaseAppName_TO_REPLACE>.appspot.com",
  messagingSenderId: "<firebaseMsgSenderId_TO_REPLACE>",
  appId: "<firebaseAppId_TO_REPLACE>",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Google authentication
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

// Firestore DB authentication
export const dbDriver = getFirestore(app);
