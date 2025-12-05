//your JS code here. If required.
// Load saved credentials from localStorage
const savedUsername = localStorage.getItem("username");
const savedPassword = localStorage.getItem("password");

const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const rememberCheck = document.getElementById("checkbox");
const submitBtn = document.getElementById("submit");
const existingBtn = document.getElementById("existing");

// Show existing user login button if credentials are saved
if (savedUsername && savedPassword) {
    existingBtn.style.display = "block";
}

// Existing user login button click
existingBtn.addEventListener("click", function () {
    alert(`Logged in as ${savedUsername}`);
});

// Handle form submit
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;

    alert(`Logged in as ${username}`);

    // If remember me checked → save credentials
    if (rememberCheck.checked) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        existingBtn.style.display = "block";
    } 
    else {
        // Remove saved credentials if unchecked
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        existingBtn.style.display = "none";
    }
});