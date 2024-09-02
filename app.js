// Registration Form Submission
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const fullName = document.getElementById('fullName').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;

    // Store user data in localStorage
    localStorage.setItem('fullName', fullName);
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);
    localStorage.setItem('password', password);

    alert('Registration successful!');
});

// Login Form Submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const loginPhone = document.getElementById('loginPhone').value;
    const loginPassword = document.getElementById('loginPassword').value;

    const storedPhone = localStorage.getItem('phone');
    const storedPassword = localStorage.getItem('password');

    if (loginPhone === storedPhone && loginPassword === storedPassword) {
        alert('Login successful!');
        displayProfile();
    } else {
        alert('Login failed. Please check your phone number and password.');
    }
});

// Display Profile Information
function displayProfile() {
    const profileName = localStorage.getItem('fullName');
    const profileEmail = localStorage.getItem('email');
    const profilePhone = localStorage.getItem('phone');

    document.getElementById('profileName').textContent = `Name: ${profileName}`;
    document.getElementById('profileEmail').textContent = `Email: ${profileEmail}`;
    document.getElementById('profilePhone').textContent = `Phone: ${profilePhone}`;

    document.getElementById('register').style.display = 'none';
    document.getElementById('login').style.display = 'none';
    document.getElementById('profile').style.display = 'block';
}

// Logout Functionality
document.getElementById('logout').addEventListener('click', function() {
    localStorage.clear();
    location.reload();
});