function sendResetLink() {
    // Get the email address entered by the user
    var email = document.getElementById("emailInput").value;

    // Perform validation on the email address (optional)
    if (email === "") {
        alert("Please enter your email address.");
        return;
    }

    // Here, you can perform additional client-side validation if needed

    // Redirect the user to the confirmation page
    window.location.href = 'cofimationpassword.html';
}