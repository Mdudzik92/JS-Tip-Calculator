// Setting up the variables for traversing the DOM
var tipEl = document.querySelector("#tip-percentage");
var totalEl = document.querySelector("#total");
var submitEl = document.querySelector("#submit");

// Calculating the tip using a function to multiply the tip by the percentage, turned into a decimal.
function calculateTip(total, tipPercentage) {
	// Multiplying the two, to two decimal places using the toFixed method.
	var roundedResult = (total * tipPercentage).toFixed(2);
	return roundedResult;
}

function calculateTotal(total, tipAmount) {
	// Using parseFloat method to make sure the values of total and tipAmount are numbers. Prior when they were entered they were strings. Important here because + can be used either to add or to concatenate.
	return parseFloat(total) + parseFloat(tipAmount);
}

// Add the tip to the h4 in the markup.
function addTip(event) {
	event.preventDefault();
	// Turning the value of the entered tip into a decimal for multiplication.
	var tipPercentage = tipEl.value * 0.01;
	var total = totalEl.value;
	// Defining what multiplying the two end up as into one variable.
	var tipAmount = calculateTip(total, tipPercentage);
	var newTotal = calculateTotal(total, tipAmount);
	// Printing the new variables to the DOM.
	document.querySelector("#tip-amount").textContent = tipAmount;
	document.querySelector("#new-total").textContent = newTotal;
}

// function splitTotal() {
// 	var numPeople = document.querySelector("#num-people");
// 	var split = document.querySelector("#split");
// 	var splitTotal = document.querySelector("#split-total");
// }

// Set the onclick event to put the new total in the div below the form in the markup.
submitEl.addEventListener("click", addTip);
splitEl.addEventListener("click", splitTotal);
