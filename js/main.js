import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyD54pHndWtzDEkDqAhX0_K_8vcCz_boYNY",
  authDomain: "primedm-2c363.firebaseapp.com",
  projectId: "primedm-2c363",
  storageBucket: "primedm-2c363.appspot.com",
  messagingSenderId: "214748595671",
  appId: "1:214748595671:web:b5be07c0a0a32ebe95b792",
  measurementId: "G-DX68DGKPV6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // Logout button
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', async (e) => {
      e.preventDefault();
      try {
        await signOut(auth);
        window.location.href = 'index.html';
      } catch (error) {
        alert('Logout failed: ' + error.message);
      }
    });
  }

  // Redirect if logged in user tries to access index.html
  onAuthStateChanged(auth, (user) => {
    if (user && window.location.pathname.includes('index.html')) {
      window.location.href = 'dashboard.html';
    }
  });
});
