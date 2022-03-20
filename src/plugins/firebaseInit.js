// Initialize Cloud Firestore through Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyAqA-llKB3UKnkUGkdt0bIdguCrubyS8II",
  authDomain: "finalproject-dfcb7.firebaseapp.com",
  projectId: "finalproject-dfcb7",
  storageBucket: "finalproject-dfcb7.appspot.com",
  messagingSenderId: "443705291317",
  appId: "1:443705291317:web:6424461569123e5be2f77c",
  measurementId: "G-RFT1T2SE5G",
});

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
