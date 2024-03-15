// // script.js

// // Sample user data for demonstration (Replace this with actual user data handling)
// let users = [];

// // Sample user profile data (Replace this with actual user profile data handling)
// let userProfile = null;

// // Function to validate login form
// function validateLoginForm() {
//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;

//     if (username.trim() === '' || password.trim() === '') {
//         alert('Please enter username and password');
//         return false;
//     }

//     // Add more validation logic if needed

//     return true; // Form is valid
// }

// // Function to validate registration form
// function validateRegistrationForm() {
//     const username = document.getElementById('username').value;
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;

//     if (username.trim() === '' || email.trim() === '' || password.trim() === '') {
//         alert('Please fill in all fields');
//         return false;
//     }

//     // Add more validation logic if needed

//     return true; // Form is valid
// }

// // Function to handle login

// function login() {
//     if (validateLoginForm()) {
//         const username = document.getElementById('username').value;
//         const password = document.getElementById('password').value;

//         // Find user in the user array (Replace this with actual user authentication)
//         // const user = users.find(u => u.username === username && u.password === password);

        
//             alert('Login successful!');
//             // Redirect to dashboard
//             window.location.href = 'dashboard.html'; // Adjust the path if necessary
//         } else {
//             alert('Invalid username or password');
//         }
//     }


// // Function to handle registration
// function register() {
//     if (validateRegistrationForm()) {
//         const username = document.getElementById('username').value;
//         const email = document.getElementById('email').value;
//         const password = document.getElementById('password').value;

//         // Add new user to the user array (Replace this with actual user registration)
//         users.push({ username, email, password });

//         alert('Registration successful! Please login.');
//         // Redirect to login page
//         window.location.href = 'login.html';
//     }
    
// }

// Function to load user profile

function loadUserProfile() {
    // Fetch user profile data from server (Replace this with actual user profile data retrieval)
    // For demonstration, let's assume userProfile is already populated with user profile data
    // You can fetch this data from the server and populate userProfile accordingly
    // Example:
    userProfile = { username: "Gui team", email: "Guiteam@example.com" }; // Replace with actual user profile data
    
    // Display user profile information
    if (userProfile) {
        // Display username in personal details container above profile picture
        document.getElementById('username-display').innerText = userProfile.username;
        document.getElementById('email').innerText = userProfile.email;
    } else {
        alert('Failed to load user profile');
    }
}


// Call loadUserProfile function when my_profile.html is loaded
if (window.location.pathname.includes('my_profile.html')) {
    window.onload = loadUserProfile;
}

// script.js

// Sample activities data for demonstration (Replace this with actual activity data handling)
let activities = [
    { type: "Assignment", course: "Mathematics", description: "Complete Assignment 3", date: "2024-02-15" },
    { type: "Event", course: "Physics", description: "Guest lecture on Quantum Mechanics", date: "2024-02-20" },
    { type: "Notification", course: "", description: "New course available: Biology 101", date: "2024-02-10" }
];

// Function to display recent activities
function displayActivities() {
    const activityList = document.getElementById('activityList');
    // Clear previous activity items
    activityList.innerHTML = '';
    // Loop through activities and create list items
    activities.forEach(activity => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${activity.type}</strong>: ${activity.description} (${activity.date})`;
        activityList.appendChild(listItem);
    });
}

// Function to load activities when the dashboard page is loaded
function loadActivities() {
    // Fetch activities data from server (Replace this with actual activity data retrieval)
    // For demonstration, let's assume activities is already populated with activity data
    // You can fetch this data from the server and populate activities accordingly
    // Example:
    // activities = [{ type: "Assignment", course: "Mathematics", description: "Complete Assignment 3", date: "2024-02-15" }, ...];

    // Display activities
    displayActivities();
}

// Call loadActivities function when dashboard.html is loaded
if (window.location.pathname.includes('dashboard/dashboard.html')) {
    window.onload = loadActivities;
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('file-input').addEventListener('change', handleFileUpload);
    document.getElementById('upload-button').addEventListener('click', openUploadForm);
    document.getElementById('add-info-button').addEventListener('click', openDialog);
    document.getElementById('view-records-button').addEventListener('click', toggleRecords);
    document.getElementById('save-info-button').addEventListener('click', closeDialog);
});

function handleFileUpload(event) {
    const fileInput = event.target;
    const files = fileInput.files;

    if (files.length > 0) {
        const reader = new FileReader();

        reader.onload = function (e) {
            document.getElementById('profile-picture').src = e.target.result;
        };

        reader.readAsDataURL(files[0]);
    }
}

function openUploadForm() {
    document.getElementById('file-input').click();
}

function openDialog() {
    document.getElementById('additional-info-dialog').style.display = 'flex';
}

function closeDialog() {
    document.getElementById('additional-info-dialog').style.display = 'none';
    // Add logic to handle form submission
    alert('Additional information saved');
}


function openViewRecords() {
    // Redirect to the view records page
    window.location.href = 'view_records.html'; // Adjust the path if necessary
    
}
  
//Add the function to go back to the profile page
function backToProfile() {
    window.location.href = 'my_profile.html'; // Adjust the path if necessary
}

