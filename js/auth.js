// auth.js
document.addEventListener('DOMContentLoaded', function() {
    // Auth Tabs Switching
    const authTabs = document.querySelectorAll('.auth-tab');
    authTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
            
            this.classList.add('active');
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId + 'Form').classList.add('active');
        });
    });

    // Login Form Submission
    const loginForm = document.getElementById('loginFormElement');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            
            if (email && password) {
                // Simulate successful login
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('userEmail', email);
                window.location.href = 'dashboard.html';
            } else {
                alert('Please enter both email and password');
            }
        });
    }

    // Register Form Submission
    const registerForm = document.getElementById('registerFormElement');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('registerName').value;
            const email = document.getElementById('registerEmail').value;
            const password = document.getElementById('registerPassword').value;
            const confirmPassword = document.getElementById('registerConfirmPassword').value;
            
            if (password !== confirmPassword) {
                alert('Passwords do not match');
                return;
            }
            
            if (name && email && password) {
                // Simulate successful registration
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('userEmail', email);
                localStorage.setItem('userName', name);
                window.location.href = 'dashboard.html';
            } else {
                alert('Please fill all fields');
            }
        });
    }

    // Social Login Buttons
    document.getElementById('googleLogin')?.addEventListener('click', function() {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userEmail', 'google-user@example.com');
        window.location.href = 'dashboard.html';
    });

    document.getElementById('facebookLogin')?.addEventListener('click', function() {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userEmail', 'facebook-user@example.com');
        window.location.href = 'dashboard.html';
    });

    document.getElementById('gmailLogin')?.addEventListener('click', function() {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userEmail', 'gmail-user@example.com');
        window.location.href = 'dashboard.html';
    });
});
