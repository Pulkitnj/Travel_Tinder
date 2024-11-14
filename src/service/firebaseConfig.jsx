// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCB0emaiZuOL-0lvx-8FQscRQ4fggy3Zek",
  authDomain: "travel-tinderr.firebaseapp.com",
  projectId: "travel-tinderr",
  storageBucket: "travel-tinderr.firebasestorage.app",
  messagingSenderId: "456091636768",
  appId: "1:456091636768:web:c6fcd1a5b099a375205845",
  measurementId: "G-BX7YG94C73"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);