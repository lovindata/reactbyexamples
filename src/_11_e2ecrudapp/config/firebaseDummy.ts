// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
