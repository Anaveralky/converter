// Conversion rates
const phpToUsdRate = 56.00; // Example: 1 USD = 56 PHP
const usdToPhpRate = 1 / phpToUsdRate; // Inverse for USD to PHP

// Function to convert currency based on user selection
function convertCurrency() {
    const amount = parseFloat(document.getElementById("amountInput").value);
    const resultDiv = document.getElementById("result");
    const conversionDirection = document.getElementById("currencySelect").value;
    
    // Check if the input is valid
    if (isNaN(amount) || amount <= 0) {
        resultDiv.innerHTML = "Please enter a valid positive number.";
        resultDiv.style.color = "red";
        return;
    }

    let result;
    if (conversionDirection === "PHPtoUSD") {
        // Convert PHP to USD
        result = amount / phpToUsdRate;
        resultDiv.innerHTML = `${amount} Philippine Pesos is equal to ${result.toFixed(2)} US Dollars.`;
    } else if (conversionDirection === "USDtoPHP") {
        // Convert USD to PHP
        result = amount * phpToUsdRate;
        resultDiv.innerHTML = `${amount} US Dollars is equal to ${result.toFixed(2)} Philippine Pesos.`;
    }

    resultDiv.style.color = "green";
}
