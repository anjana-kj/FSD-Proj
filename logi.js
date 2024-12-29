document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission to simulate login
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Simple validation
    if (email === "" || password === "") {
        errorMessage.textContent = "Please fill in both fields.";
    } else {
        errorMessage.textContent = "";  // Clear any error message
        alert("Login Successful!");
        // Here you can add further login logic (e.g., checking credentials)
    }
});
