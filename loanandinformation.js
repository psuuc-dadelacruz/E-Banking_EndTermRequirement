function calculateLoan(event) {
    event.preventDefault();
  
    // Get form values
    var loanAmount = parseFloat(document.getElementById("loan-amount").value);
    var interestRate = parseFloat(document.getElementById("interest-rate").value);
    var loanTerm = parseInt(document.getElementById("loan-term").value);
  
    // Calculate monthly payment
    var monthlyInterest = interestRate / 100 / 12;
    var totalPayments = loanTerm * 12;
    var denominator = Math.pow(1 + monthlyInterest, totalPayments) - 1;
    var monthlyPayment = (loanAmount * monthlyInterest) / denominator;
  
    // Calculate total payment and total interest
    var totalPayment = monthlyPayment * totalPayments;
    var totalInterest = totalPayment - loanAmount;
  
    // Display results
    document.getElementById("monthly-payment").textContent = "Monthly Payment: $" + monthlyPayment.toFixed(2);
    document.getElementById("total-payment").textContent = "Total Payment: $" + totalPayment.toFixed(2);
    document.getElementById("total-interest").textContent = "Total Interest: $" + totalInterest.toFixed(2);
  
    // Show results
    document.getElementById("loan-results").style.display = "block";
  }
  
  // Add event listener to the form submit
  document.getElementById("loan-form").addEventListener("submit", calculateLoan);