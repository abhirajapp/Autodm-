// dashboard.js
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";
import { auth } from './firebase-config.js';

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');
  const body = document.body;
  
  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      body.classList.toggle('no-scroll');
      
      const icon = mobileMenuBtn.querySelector('i');
      icon.classList.toggle('fa-bars');
      icon.classList.toggle('fa-times');
    });
  }

  // User Authentication
  const displayName = document.getElementById('displayUserName');
  const displayEmail = document.getElementById('displayUserEmail');

  onAuthStateChanged(auth, (user) => {
    if (user) {
      displayName.textContent = user.displayName || user.email.split('@')[0];
      displayEmail.textContent = user.email;
    } else {
      window.location.href = "index.html";
    }
  });

  // Logout Functionality
  document.getElementById('logoutBtn')?.addEventListener('click', async (e) => {
    e.preventDefault();
    try {
      await signOut(auth);
      window.location.href = "index.html";
    } catch (error) {
      alert("Logout failed: " + error.message);
    }
  });
});
