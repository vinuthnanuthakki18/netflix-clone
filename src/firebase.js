import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase configuration from environment variables
const firebaseConfig = {
  apiKey: "AIzaSyD8CIi1ts4SLTBWZYbQyH20my-tMCeD8Wk",
  authDomain: "netflix-clone-ed8f6.firebaseapp.com",
  projectId: "netflix-clone-ed8f6",
  storageBucket: "netflix-clone-ed8f6.firebasestorage.app",
  messagingSenderId: "117632792385",
  appId: "1:117632792385:web:905aba7ffe354ee3bbd3c0",
  measurementId: "G-C76H2JP504"
};

// Initialize Firebase
console.log(firebaseConfig.projectId);
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);