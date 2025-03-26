const form = document.getElementById("form")
const usernameInput = document.getElementById("Username")
const usernameError = document.getElementById("usernameError")

const EmailInput = document.getElementById("Email")
const EmailInputError = document.getElementById("EmailInputError")

const passwordInput = document.getElementById("password")
const passwordError = document.getElementById("passwordError")

const passwordConfirm = document.getElementById("confirmPassword");
const passwordConfirmError = document.getElementById("confirmPasswordError");


form.addEventListener("submit", (event) => {
    event.preventDefault();

    usernameError.textContent = "";
    if (usernameInput.value === "") {
        usernameError.textContent = "Username is required";
    } else if (usernameInput.value.length < 5) {
        usernameError.textContent = "Username must be at least 5 characters long";
    } else if (usernameInput.value.length > 12) {
        usernameError.textContent = "Username must be at most 12 characters long";
    } else if (["admin" ,"User", "username"].includes(usernameInput.value)) {
        usernameError.textContent = "Username is not allowed";
    }

    EmailInputError.textContent = "";
    if(!validateEmail(EmailInput.value)){
        EmailInputError.textContent = "Email is not valid";
    }

    passwordError.textContent = "";
    if(!validatePassword(passwordInput.value)){
        passwordError.textContent = "Password is not valid";
    }
    
    let ispasswordValid = validatePassword(passwordInput.value);
});
function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0]/gm;
    return regex.test(email);
}
function validatePasswordRegex(password) {
    return false;
}
function validatePassword(Validpassword) {
    let isUpperCaseInclude = false;
    let isLowerCaseInclude = false;
    let hasNumericalCharacter = false;

    for (let i = 0; i < password.length; i++) {
        const charcode = password.charCodeAt(i);
        const char = password[i];
        if (char === char.toUpperCase()) {
            isUpperCaseInclude = true;
        }
    }
    return isUpperCaseInclude && isLowerCaseInclude && hasNumericalCharacter;
}
