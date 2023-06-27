function login(event) {
	event.preventDefault(); // Prevent form submission

	var username = document.getElementById('Username').value;
	var password = document.getElementById('Password').value;

	// Perform your login logic here, such as making an AJAX request to a server-side script
	// Example login logic below:
	if (username === 'admin' && password === 'password') {
		alert('Login successful');
		// Redirect to the dashboard or desired page
		window.location.href = 'dashboard.html';
	} else {
		alert('Invalid username or password');
	}
}

function forgotPassword(event) {
	event.preventDefault(); // Prevent form submission

	// Add your forgot password logic here, such as displaying a modal or redirecting to the forgot password page
	window.location.href = 'forgotpassword.html';
}