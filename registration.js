function register(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the values of the registration form fields
    var fullName = document.getElementById("fullNameInput").value;
    var email = document.getElementById("emailInput").value;
    var address = document.getElementById("addressInput").value;
    var contactNumber = document.getElementById("contactNumberInput").value;
    var birthdate = document.getElementById("birthdateInput").value;

    // Perform validation on the registration form fields
    if (fullName === "" || email === "" || address === "" || contactNumber === "" || birthdate === "") {
        alert("Please fill in all the fields.");
        return;
    }

    // Here, you can perform additional client-side validation if needed

    // Perform the registration process (e.g., send a request to the server to store the user's information)
    // Replace the following code with your actual registration logic

    // Redirect the user to the success page after successful registration
    window.location.href = "dashboard.html";
}