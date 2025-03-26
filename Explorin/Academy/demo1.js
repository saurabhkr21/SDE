const form = document.getElementById("form");
const usernameInput = document.getElementById("Username");
const usernameError = document.getElementById("usernameError");

const EmailInput = document.getElementById("Email");
const EmailInputError = document.getElementById("EmailInputError");

const passwordInput = document.getElementById("password");
const passwordError = document.getElementById("passwordError");

const passwordConfirm = document.getElementById("confirmPassword");
const passwordConfirmError = document.getElementById("confirmPasswordError");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Username Validation
    usernameError.textContent = "";
    if (usernameInput.value === "") {
        usernameError.textContent = "Username is required";
    } else if (usernameInput.value.length < 5) {
        usernameError.textContent = "Username must be at least 5 characters long";
    } else if (usernameInput.value.length > 12) {
        usernameError.textContent = "Username must be at most 12 characters long";
    } else if (["admin", "User", "username"].includes(usernameInput.value)) {
        usernameError.textContent = "Username is not allowed";
    }

    // Email Validation
    EmailInputError.textContent = "";
    if (!validateEmail(EmailInput.value)) {
        EmailInputError.textContent = "Email is not valid";
    }

    // Password Validation
    passwordError.textContent = "";
    if (!validatePassword(passwordInput.value)) {
        passwordError.textContent = "Password must contain at least one uppercase letter, one lowercase letter, and one number";
    }

    // Password Confirmation Validation
    passwordConfirmError.textContent = "";
    if (passwordConfirm.value !== passwordInput.value) {
        passwordConfirmError.textContent = "Passwords do not match";
    }
});

function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/gm;
    return regex.test(email);
}

function validatePassword(passwordInput) {
    let isUpperCaseInclude = false;
    let isLowerCaseInclude = false;
    let hasNumericalCharacter = false;

    for (let i = 0; i < password.length; i++) {
        const char = password[i];
        if (char >= 'A' && char <= 'Z') {
            isUpperCaseInclude = true;
        }
        if (char >= 'a' && char <= 'z') {
            isLowerCaseInclude = true;
        }
        if (char >= '0' && char <= '9') {
            hasNumericalCharacter = true;
        }
    }
    return isUpperCaseInclude && isLowerCaseInclude && hasNumericalCharacter;
}
