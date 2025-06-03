// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyD54pHndWtzDEkDqAhX0_K_8vcCz_boYNY",
  authDomain: "primedm-2c363.firebaseapp.com",
  projectId: "primedm-2c363",
  storageBucket: "primedm-2c363.appspot.com",
  messagingSenderId: "214748595671",
  appId: "1:214748595671:web:b5be07c0a0a32ebe95b792",
  measurementId: "G-DX68DGKPV6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, provider };
