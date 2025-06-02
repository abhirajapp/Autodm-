// dashboard.js
document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
        window.location.href = 'index.html';
        return;
    }

    // Display user info (optional)
    const userEmail = localStorage.getItem('userEmail');
    if (userEmail) {
        console.log('Logged in as:', userEmail);
    }

    // Dashboard Functionality
    document.getElementById('setupCommentDM')?.addEventListener('click', function() {
        alert('Comment DM setup will be shown here. In a real app, this would open a configuration panel.');
    });

    document.getElementById('setupStoryDM')?.addEventListener('click', function() {
        alert('Story DM setup will be shown here. In a real app, this would open a configuration panel.');
    });

    document.getElementById('setupAutoReply')?.addEventListener('click', function() {
        alert('Auto Reply setup will be shown here. In a real app, this would open a configuration panel.');
    });
});
