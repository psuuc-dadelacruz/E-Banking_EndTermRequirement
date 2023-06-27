function signup(event) {
    event.preventDefault(); // Prevent form submission

    var email = document.getElementById('email').value;
    var confirmEmail = document.getElementById('confirmEmail').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    // Perform your signup logic here, such as making an AJAX request to a server-side script
    // Example signup logic below:
    if (email === 'admin') {
    } 
    if (confirmEmail === 'admin') {
    } 
    if (password === 'pass') {
    } 
    if (confirmPassword === 'pass') {
        alert('Sign up successful');
        // Redirect to the registration success page or desired page
        window.location.href = 'registration.html';
    } else {
        alert('Email or password mismatch');
    }
}