document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const emailMessage = document.getElementById("emailMessage");
    const passwordMessage = document.getElementById("passwordMessage");
    const confirmationWindow = document.getElementById("confirmationWindow");
    const userEmail = document.getElementById("userEmail");
    const userPassword = document.getElementById("userPassword");
    const okButton = document.getElementById("ok");
    const form = document.getElementById("signupForm");

    emailMessage.style.display = 'none';
    passwordMessage.style.display = 'none';

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent the default form submission

        const emailValue = emailInput.value;
        const passwordValue = passwordInput.value;

        // Validate email
        if (emailValue.length > 3 && emailValue.includes("@") && emailValue.includes(".")) {
            emailMessage.textContent = "All good to go!";
            emailMessage.className = "success";
            emailMessage.style.display = 'block';
        } else {
            emailMessage.textContent = "Make sure email is more than 3 characters and has @ and a .";
            emailMessage.className = "error";
            emailMessage.style.display = 'block';
            return; // Stop further execution if email is invalid
        }

        // Validate password
        if (passwordValue.length > 8) {
            passwordMessage.textContent = "All good to go!";
            passwordMessage.className = "success";
            passwordMessage.style.display = 'block';
        } else {
            passwordMessage.textContent = "Make sure password is more than 8 characters.";
            passwordMessage.className = "error";
            passwordMessage.style.display = 'block';
            return; // Stop further execution if password is invalid
        }

        // If both inputs are valid, show the confirmation window
        userEmail.textContent = `Email: ${emailValue}`;
        userPassword.textContent = `Password: ${passwordValue}`;
        confirmationWindow.style.display = 'block';

        // Clear form
        emailInput.value = '';
        passwordInput.value = '';
    });

    // Handle the "Ok" button click in confirmation window
    okButton.addEventListener("click", () => {
        alert("Successful signup!");
        confirmationWindow.style.display = 'none'; // Hide confirmation window
    });
});
