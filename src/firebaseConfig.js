import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase configuration (replace with your credentials)
const firebaseConfig = {
  apiKey: "AIzaSyB6DyJFolo0Jc5ch8mHE0fxoH5gE0TTtBY",
  authDomain: "task-manager-3fe92.firebaseapp.com",
  projectId: "task-manager-3fe92",
  storageBucket: "task-manager-3fe92.firebasestorage.app",
  messagingSenderId: "706387104061",
  appId: "1:706387104061:web:90992fe8e8eff0f6453554",
  measurementId: "G-LTVXZZ1TLW"
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
