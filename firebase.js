// =========================================
// FIREBASE CONFIGURATION & INITIALIZATION
// =========================================
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBHLy-FrwTdS5tKO3OwVSo8TPLYoHUax3w",
  authDomain: "fazle-rabbi-2b4f5.firebaseapp.com",
  projectId: "fazle-rabbi-2b4f5",
  storageBucket: "fazle-rabbi-2b4f5.firebasestorage.app",
  messagingSenderId: "693352522424",
  appId: "1:693352522424:web:6fba133b6a09825d7e4a4d",
  measurementId: "G-PZXES8L7D8"
};

let app, db, analytics;

try {
  app = initializeApp(firebaseConfig);
  analytics = getAnalytics(app);
  db = getFirestore(app);
  console.log("✅ Firebase Initialized Successfully");
} catch (error) {
  console.warn("⚠️ Firebase initialization failed. Using local dummy data.", error);
}

// Firestore functions গুলো window এ attach করে দিচ্ছি যাতে javascript.js থেকে access করা যায়
window.firebaseDB = db;
window.firestoreFunctions = { collection, addDoc, getDocs };
