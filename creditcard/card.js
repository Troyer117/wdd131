document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  function isCardNumberValid(number) {
    return number === "1234123412341234";
  }

  function displayError(msg) {
    let errorContainer = document.querySelector(".errorMsg");
    if (!errorContainer) {
      errorContainer = document.createElement("p");
      errorContainer.className = "errorMsg";
      errorContainer.style.color = "red";
      errorContainer.style.whiteSpace = "pre-line";
      form.prepend(errorContainer);
    }
    errorContainer.textContent = msg;
  }

  function submitHandler(event) {
    event.preventDefault();

    displayError("");

    const cardNumberRaw = this["card-number"].value.replace(/\s+/g, "");
    const cardHolder = this["card-holder"].value.trim();
    const expMonth = this["exp-month"].value.trim();
    const expYear = this["exp-year"].value.trim();
    const cvc = this["cvc"].value.trim();

    let errorMsg = "";

    if (isNaN(cardNumberRaw)) {
      errorMsg += "Card number is not a valid number.\n";
    } else if (!isCardNumberValid(cardNumberRaw)) {
      errorMsg += "Card number is not a valid card number.\n";
    }

    if (!/^[a-zA-Z\s]{3,40}$/.test(cardHolder)) {
      errorMsg += "Card holder name must be 3–40 letters and spaces only.\n";
    }

    if (!/^(0[1-9]|1[0-2])$/.test(expMonth)) {
      errorMsg += "Expiration month must be between 01 and 12.\n";
    }

    if (!/^\d{2}$/.test(expYear)) {
      errorMsg += "Expiration year must be two digits.\n";
    }

    if (!/^\d{3,4}$/.test(cvc)) {
      errorMsg += "CVC/CVV must be 3 or 4 digits.\n";
    }

    if (/^(0[1-9]|1[0-2])$/.test(expMonth) && /^\d{2}$/.test(expYear)) {
      const currentDate = new Date();
      let fullYear = parseInt(expYear, 10);
      fullYear += fullYear < 50 ? 2000 : 1900;
      const expDate = new Date(fullYear, parseInt(expMonth, 10) - 1, 1);
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

    displayError("");
    alert("Payment submitted successfully!");
    this.reset();
    return true;
  }

  form.addEventListener("submit", submitHandler);

  const cardNumberInput = document.getElementById("card-number");
  cardNumberInput.addEventListener("input", () => {
    let value = cardNumberInput.value.replace(/\D/g, "").substring(0, 16);
    let formatted = value.match(/.{1,4}/g);
    cardNumberInput.value = formatted ? formatted.join(" ") : "";
  });
});