document.addEventListener('DOMContentLoaded', function() {
    // Auth Tabs
    const authTabs = document.querySelectorAll('.auth-tab');
    authTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs and forms
            document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding form
            this.classList.add('active');
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId + 'Form').classList.add('active');
        });
    });

    // Form Submission
    const loginForm = document.getElementById('loginFormElement');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            
            // Simple validation
            if (email && password) {
                localStorage.setItem('isLoggedIn', 'true');
                window.location.href = 'dashboard.html';
            } else {
                alert('Please enter both email and password');
            }
        });
    }

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
                localStorage.setItem('isLoggedIn', 'true');
                window.location.href = 'dashboard.html';
            } else {
                alert('Please fill all fields');
            }
        });
    }

    // Social Login Buttons
    const googleBtn = document.querySelector('.btn-google');
    if (googleBtn) {
        googleBtn.addEventListener('click', function() {
            localStorage.setItem('isLoggedIn', 'true');
            window.location.href = 'dashboard.html';
        });
    }

    const facebookBtn = document.querySelector('.btn-facebook');
    if (facebookBtn) {
        facebookBtn.addEventListener('click', function() {
            localStorage.setItem('isLoggedIn', 'true');
            window.location.href = 'dashboard.html';
        });
    }

    const gmailBtn = document.querySelector('.btn-gmail');
    if (gmailBtn) {
        gmailBtn.addEventListener('click', function() {
            localStorage.setItem('isLoggedIn', 'true');
            window.location.href = 'dashboard.html';
        });
    }
});
