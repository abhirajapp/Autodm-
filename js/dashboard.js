import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";

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
  const displayName = document.getElementById('displayUserName');
  const displayEmail = document.getElementById('displayUserEmail');

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // Show user's name and email
      displayName.textContent = user.displayName || "User";
      displayEmail.textContent = user.email;
    } else {
      // Not logged in, redirect to login
      window.location.href = "index.html";
    }
  });

  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', async (e) => {
      e.preventDefault();
      try {
        await signOut(auth);
        window.location.href = "index.html";
      } catch (error) {
        alert("Logout failed: " + error.message);
      }
    });
  }
});
