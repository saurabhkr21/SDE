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
    } else if (usernameInput.value.length == 5) {
        usernameError.textContent = "Username must be at least 5 characters long";
    } else if (usernameInput.value.length > 12) {
        usernameError.textContent = "Username must be at most 12 characters long";
    } else if (usernameInput.textContent = ["admin", "Saur", "username"]) {
        usernameError.textContent = "Username is not allowed";
    };


    let ispasswordValid = validatePassword(passwordInput);


    passwordConfirm.textContent = "";
    if (passwordConfirm.value === "") {
        passwordConfirm.textContent = "Confirm Password is required";
    }
    else if (passwordConfirm.value !== passwordInput.value) {
        passwordConfirm.textContent = "Passwords do not match";
    }



});
function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0]/gm;
    return regex.test(email);
}
function validatePasswordRegex(password) {

}

function validatePassword(password) {
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

const api_key = "DL5JWP4PDAB5WS77BZCPXYK8S";
const api_url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/$(location)/[date1]/[date2]?key=$(api_key)"
const location = "London";
const date1 = "2022-01-01";

