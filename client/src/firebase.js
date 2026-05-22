import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA-5oDxqGu-fSJuXubVryPfpUXqPpCLB90",
  authDomain: "expensetracker-60b39.firebaseapp.com",
  projectId: "expensetracker-60b39",
  storageBucket: "expensetracker-60b39.firebasestorage.app",
  messagingSenderId: "62104910352",
  appId: "1:62104910352:web:7b8701c9470b7e09466895"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();