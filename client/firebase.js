import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "goodnight-e75dc.firebaseapp.com",
  projectId: "goodnight-e75dc",
  storageBucket: "goodnight-e75dc.appspot.com",
  messagingSenderId: "295587291088",
  appId: "1:295587291088:web:2b05b0d82d7f4db44763d5"
};

export const app = initializeApp(firebaseConfig);