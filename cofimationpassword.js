function submitForm() {
    // Get the values of the password fields
    var newPassword = document.getElementById("newPasswordInput").value;
    var confirmPassword = document.getElementById("confirmPasswordInput").value;

    // Perform validation on the password fields
    if (newPassword === "" || confirmPassword === "") {
        alert("Please enter both passwords.");
        return;
    }

    if (newPassword !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // Here, you can perform additional client-side validation if needed

    // Redirect the user to the login page
    window.location.href = "Login.html";
}
