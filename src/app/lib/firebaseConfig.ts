import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBnW5pi7TlT-Jd4MURvDtjvGXlA7bbSiS4",
  authDomain: "cinevia-a83f8.firebaseapp.com",
  projectId: "cinevia-a83f8",
  storageBucket: "cinevia-a83f8.appspot.com",
  messagingSenderId: "1035286914592",
  appId: "1:1035286914592:web:15bfe6ec205c35758bbe45",
  measurementId: "G-FTESG85FZC",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
