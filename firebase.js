import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCsfC0BP7_S6a7kVX-70SaYtwKpOJPIgdI",
  authDomain: "cha-de-bebe-aurora.firebaseapp.com",
  projectId: "cha-de-bebe-aurora",
  storageBucket: "cha-de-bebe-aurora.firebasestorage.app",
  messagingSenderId: "1000536997305",
  appId: "1:1000536997305:web:4c43ad52ba30ed0ebfca68",
  measurementId: "G-XXBJ4MGK8N"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
