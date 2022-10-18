import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBb14ER_FZXXAxa9HxGwrVxXndM5pM17pM",
  authDomain: "ctproject-fbff5.firebaseapp.com",
  projectId: "ctproject-fbff5",
  storageBucket: "ctproject-fbff5.appspot.com",
  messagingSenderId: "377469528109",
  appId: "1:377469528109:web:a928e17d32cdc2ad1230a4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
