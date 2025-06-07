// card.js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  function isCardNumberValid(number) {
    // Just accept this one hard-coded number as valid for now:
    return number === "1234123412341234";
  }

  function displayError(msg) {
    // Create or select an error message container dynamically
    let errorContainer = document.querySelector(".errorMsg");
    if (!errorContainer) {
      errorContainer = document.createElement("p");
      errorContainer.className = "errorMsg";
      errorContainer.style.color = "red";
      errorContainer.style.whiteSpace = "pre-line"; // To preserve line breaks
      form.prepend(errorContainer);
    }
    errorContainer.textContent = msg;
  }

  function submitHandler(event) {
    event.preventDefault();

    displayError(""); // Clear previous errors

    // Use 'this' to access the form inside submitHandler
    const cardNumberRaw = this["card-number"].value.replace(/\s+/g, "");
    const cardHolder = this["card-holder"].value.trim();
    const expMonth = this["exp-month"].value.trim();
    const expYear = this["exp-year"].value.trim();
    const cvc = this["cvc"].value.trim();

    let errorMsg = "";

    // Check if card number is numeric
    if (isNaN(cardNumberRaw)) {
      errorMsg += "Card number is not a valid number.\n";
    } else if (!isCardNumberValid(cardNumberRaw)) {
      errorMsg += "Card number is not a valid card number.\n";
    }

    // Validate card holder name - letters and spaces only, 3-40 chars
    if (!/^[a-zA-Z\s]{3,40}$/.test(cardHolder)) {
      errorMsg += "Card holder name must be 3–40 letters and spaces only.\n";
    }

    // Validate expiration month 01-12
    if (!/^(0[1-9]|1[0-2])$/.test(expMonth)) {
      errorMsg += "Expiration month must be between 01 and 12.\n";
    }

    // Validate expiration year two digits
    if (!/^\d{2}$/.test(expYear)) {
      errorMsg += "Expiration year must be two digits.\n";
    }

    // Validate CVC 3 or 4 digits
    if (!/^\d{3,4}$/.test(cvc)) {
      errorMsg += "CVC/CVV must be 3 or 4 digits.\n";
    }

    // Validate that expiration date is in the future
    if (/^(0[1-9]|1[0-2])$/.test(expMonth) && /^\d{2}$/.test(expYear)) {
      const currentDate = new Date();
      // Convert two-digit year to full year, assuming 20xx for years < 50, otherwise 19xx for safety
      let fullYear = parseInt(expYear, 10);
      fullYear += fullYear < 50 ? 2000 : 1900;
      // Month in JS Date is zero-based
      const expDate = new Date(fullYear, parseInt(expMonth, 10) - 1, 1);
      // Set expiration date to end of month
      expDate.setMonth(expDate.getMonth() + 1);
      expDate.setDate(expDate.getDate() - 1);

      if (expDate < currentDate) {
        errorMsg += "Expiration date must be in the future.\n";
      }
    }

    if (errorMsg) {
      displayError(errorMsg);
      return false;
    }

    // Success! You can process the payment or do whatever is next
    displayError(""); // Clear errors
    alert("Payment submitted successfully!");
    this.reset();
    return true;
  }

  form.addEventListener("submit", submitHandler);

  // Optional: auto-format card number field as user types (adds spaces every 4 digits)
  const cardNumberInput = document.getElementById("card-number");
  cardNumberInput.addEventListener("input", () => {
    let value = cardNumberInput.value.replace(/\D/g, "").substring(0, 16);
    let formatted = value.match(/.{1,4}/g);
    cardNumberInput.value = formatted ? formatted.join(" ") : "";
  });
});
