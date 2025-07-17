document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault();
    let isValid = true;
    
    document.querySelectorAll('.error').forEach(el => el.innerText = '');

    const name = document.getElementById("name").value.trim();
    if (name.length < 5 || name.length > 10) {
        document.getElementById("nameError").innerText = "Name must be between 5 and 10 characters.";
        isValid = false;
    }

    const email = document.getElementById("email").value.trim();
    if (!email.endsWith("@explorin.io")) {
        document.getElementById("emailError").innerText = "Email must end with @explorin.io.";
        isValid = false;
    }

    const password = document.getElementById("password").value;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    if (!passwordRegex.test(password)) {
        document.getElementById("passwordError").innerText =
            "Password must be at least 8 characters and include uppercase, lowercase, and a special character.";
        isValid = false;
    }

    const dob = new Date(document.getElementById("dob").value);
    const cutoff = new Date("2000-01-01");
    if (isNaN(dob.getTime()) || dob >= cutoff) {
        document.getElementById("dobError").innerText = "Date of birth must be before the year 2000.";
        isValid = false;
    }

    if (isValid) {
        document.getElementById("succes").innerText="Form submitted successfully";
    }
});