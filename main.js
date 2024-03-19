// Associate Empty HTML boxes with outputs
const changeBox = document.getElementById("change-output");
const dollarBox = document.getElementById("dollars-output");
const quarterBox = document.getElementById("quarters-output");
const dimeBox = document.getElementById("dimes-output");
const nickelBox = document.getElementById("nickels-output");
const pennyBox = document.getElementById("pennies-output");

// Function to calculate change
function giveChange(paidIn, price) {
  const change = paidIn - price;
  return change;
}

// Event handler for Calculate Button
function clickCalc() {
  // Establish input boxes to accept a value
  const price = parseFloat(document.getElementById("amount-due").value);
  const paidIn = parseFloat(document.getElementById("amount-received").value);
  
    // Calculate Change
    const change = giveChange(paidIn, price);

  // Check if change has a decimal
  if (change % 100 === 0) {
    // No decimal, display dollar amount
    dollarBox.textContent = `${Math.floor(change)}`;

     // Display dollars and cents separately
    // Make sure whole number goes into dollars first
  } else {
    const dollars = Math.floor(change);
    const cents = Math.round((change.toFixed(2) % 1) * 100);

     // Check if it is enough money
   if (paidIn < price) {
    alert(`You need $${Math.abs(dollars)}.${Math.abs(cents.toFixed(2))} more to purchase this item.`);
    return;
  };

    //Update dollar
    dollarBox.textContent = `${dollars}`;
    
    // Use cents to calculate remaining change
    let remainingChange = cents;
    const quarters = Math.floor(remainingChange/ 25);
    remainingChange %= 25;
    const dimes = Math.floor(remainingChange/ 10);
    remainingChange %= 10;
    const nickels = Math.floor(remainingChange / 5);
    remainingChange %= 5;
    const pennies = remainingChange;

    // Update HTML elements with coin count
    changeBox.textContent = `$${change.toFixed(2)}`;
    quarterBox.textContent = `${quarters}`;
    dimeBox.textContent = `${dimes}`;
    nickelBox.textContent = `${nickels}`;
    pennyBox.textContent = `${pennies}`;
  }
  // Check if inputs are numbers
  if (isNaN(price) || isNaN(paidIn)) {
    alert("Please enter valid numbers.");
    return;
  };

};

// Add event listener to Calculate Button
const calculateButton = document.getElementById("calculate-change");
calculateButton.addEventListener("click", clickCalc);
