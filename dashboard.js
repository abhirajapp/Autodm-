document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn && !window.location.pathname.endsWith('index.html')) {
        window.location.href = 'index.html';
    }

    // Dashboard Functionality
    const setupCommentDM = document.getElementById('setupCommentDM');
    if (setupCommentDM) {
        setupCommentDM.addEventListener('click', function() {
            alert('Comment DM setup will be shown here. In a real app, this would open a configuration panel.');
        });
    }

    const setupStoryDM = document.getElementById('setupStoryDM');
    if (setupStoryDM) {
        setupStoryDM.addEventListener('click', function() {
            alert('Story DM setup will be shown here. In a real app, this would open a configuration panel.');
        });
    }

    const setupAutoReply = document.getElementById('setupAutoReply');
    if (setupAutoReply) {
        setupAutoReply.addEventListener('click', function() {
            alert('Auto Reply setup will be shown here. In a real app, this would open a configuration panel.');
        });
    }
});
