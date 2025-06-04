import { auth } from './firebase-config.js';
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";

// मोबाइल मेन्यू टॉगल
function setupMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');
  
  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      mobileMenuBtn.querySelector('i').classList.toggle('fa-times');
    });
  }
}

// लॉगआउट फंक्शन
function setupLogout() {
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
}

// पेज लोड होने पर
document.addEventListener('DOMContentLoaded', () => {
  setupMobileMenu();
  setupLogout();
  
  // चेक करें यूजर लॉगिन है या नहीं
  onAuthStateChanged(auth, (user) => {
    if (user && window.location.pathname.endsWith('index.html')) {
      window.location.href = 'dashboard.html';
    }
  });
});
