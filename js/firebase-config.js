// Import Firebase SDK modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyD54pHndWtzDEkDqAhX0_K_8vcCz_boYNY",
  authDomain: "primedm-2c363.firebaseapp.com",
  projectId: "primedm-2c363",
  storageBucket: "primedm-2c363.firebasestorage.app",
  messagingSenderId: "214748595671",
  appId: "1:214748595671:web:b5be07c0a0a32ebe95b792",
  measurementId: "G-DX68DGKPV6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Login
document.getElementById("loginFormElement").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      alert("✅ Login successful");
    })
    .catch(error => {
      alert("❌ " + error.message);
    });
});

// Register
document.getElementById("registerFormElement").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("registerEmail").value;
  const password = document.getElementById("registerPassword").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      alert("✅ Registration successful");
    })
    .catch(error => {
      alert("❌ " + error.message);
    });
});

// Google Sign-In
document.getElementById("googleLogin").addEventListener("click", () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then(result => {
      alert("✅ Google login successful");
    })
    .catch(error => {
      alert("❌ " + error.message);
    });
});
