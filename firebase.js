// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBKim4ruqR6amM5x8XkF7Au6mzVKYE11BU",
  authDomain: "aiflashcard1.firebaseapp.com",
  projectId: "aiflashcard1",
  storageBucket: "aiflashcard1.appspot.com",
  messagingSenderId: "529584138917",
  appId: "1:529584138917:web:724437757125d8f0f6fb4c",
  measurementId: "G-PQRMYTEYVR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db = getFirestore(app);
export { db };
