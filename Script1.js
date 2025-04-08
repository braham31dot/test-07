document.addEventListener('DOMContentLoaded', () => {
    // Dark and Light Mode Toggle
    const toggleModeButton = document.createElement('button');
    toggleModeButton.textContent = 'Toggle Dark/Light Mode';
    toggleModeButton.style.position = 'fixed';
    toggleModeButton.style.bottom = '20px';
    toggleModeButton.style.right = '20px';
    document.body.appendChild(toggleModeButton);

    toggleModeButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    // Login Form Submission
    const loginForm = document.querySelector('.login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Login form submitted!');
        });
    }

    // Registration Form Submission
    const registerForm = document.querySelector('.register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Registration form submitted!');
        });
    }

    // Post Submission
    const postBox = document.querySelector('.post-box button[type="submit"]');
    if (postBox) {
        postBox.addEventListener('click', () => {
            alert('Post submitted!');
        });
    }

    // Like, Comment, Share Buttons
    const postActions = document.querySelectorAll('.post-actions button');
    postActions.forEach(button => {
        button.addEventListener('click', () => {
            alert(`${button.textContent} button clicked!`);
        });
    });

    // Chat Send Message
    const chatSendButton = document.querySelector('.chat-input button[type="submit"]');
    if (chatSendButton) {
        chatSendButton.addEventListener('click', () => {
            alert('Message sent!');
        });
    }

    // Profile Actions
    const forgotPasswordLink = document.getElementById('forgot-password');
    const changeNameLink = document.getElementById('change-name');
    const changeProfilePicLink = document.getElementById('change-profile-pic');

    if (forgotPasswordLink) {
        forgotPasswordLink.addEventListener('click', () => {
            alert('Forgot Password link clicked!');
        });
    }

    if (changeNameLink) {
        changeNameLink.addEventListener('click', () => {
            alert('Change Name link clicked!');
        });
    }

    if (changeProfilePicLink) {
        changeProfilePicLink.addEventListener('click', () => {
            alert('Change Profile Picture link clicked!');
        });
    }

    // Settings Actions
    const settingsLinks = document.querySelectorAll('.settings-link');
    settingsLinks.forEach(link => {
        link.addEventListener('click', () => {
            alert(`${link.textContent} link clicked!`);
        });
    });
});

// Dark Mode Styles
const darkModeStyles = document.createElement('style');
darkModeStyles.textContent = `
    body.dark-mode {
        background-color: #333;
        color: white;
    }
    body.dark-mode a {
        color: #007bff;
    }
    body.dark-mode .container, 
    body.dark-mode .login-container, 
    body.dark-mode .register-container, 
    body.dark-mode .profile-container, 
    body.dark-mode .settings-container, 
    body.dark-mode .donation-container, 
    body.dark-mode .chat-container, 
    body.dark-mode .post-box, 
    body.dark-mode .posts .post, 
    body.dark-mode .chat-messages, 
    body.dark-mode .donation-box {
        background-color: #444;
        color: white;
    }
    body.dark-mode .input-group input, 
    body.dark-mode .input-group textarea, 
    body.dark-mode .chat-input input {
        background-color: #555;
        color: white;
        border: 1px solid #666;
    }
    body.dark-mode .input-group button, 
    body.dark-mode .post-options label, 
    body.dark-mode .post-options button, 
    body.dark-mode .post-actions button, 
    body.dark-mode .chat-input button {
        background-color: #666;
        color: white;
    }
    body.dark-mode .input-group button:hover, 
    body.dark-mode .post-options button:hover, 
    body.dark-mode .post-actions button:hover, 
    body.dark-mode .chat-input button:hover {
        background-color: #777;
    }
`;
document.head.appendChild(darkModeStyles);

