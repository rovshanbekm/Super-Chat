import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCQX6b1-zMyF3-SMuvR_6pIa2t6QEunzBg",
    authDomain: "chat-f9258.firebaseapp.com",
    projectId: "chat-f9258",
    storageBucket: "chat-f9258.firebasestorage.app",
    messagingSenderId: "94585351978",
    appId: "1:94585351978:web:b9fc8370eddb05cedbf853",
    measurementId: "G-VM5WZS2SVS"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);
export const firestore = getFirestore(app); 
export const googleProvider = new GoogleAuthProvider()