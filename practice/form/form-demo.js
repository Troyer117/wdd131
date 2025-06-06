function validateForm(event) {
  const theForm = event.target;
  const errors = [];
  let isValid = true;

  const name = theForm.name.value.trim();
  const cardNumber = theForm.cardNumber.value.trim();
  const paymentMethod = theForm.paymentMethod.value;

  // Validation 1: Only "Bob" allowed
  if (name !== "Bob") {
    isValid = false;
    errors.push("Only users named 'Bob' are allowed to submit the form.");
  }

  // Validation 2: Only one valid credit card number is allowed
  if (paymentMethod === "creditCard") {
    if (cardNumber !== "1234123412341234") {
      isValid = false;
      errors.push("The credit card number is invalid. Only one test number is allowed.");
    }
  }

  if (!isValid) {
    event.preventDefault(); // Stop form submission
    showErrors(errors);
    return false;
  }

  // Clear errors if all is valid
  document.querySelector(".errors").innerHTML = "";
}

function togglePaymentDetails(e) {
  const theForm = document.getElementById("checkoutForm");
  const creditCardContainer = document.getElementById("cardNumber").parentElement;
  const paypalContainer = document.getElementById("paypalUsername").parentElement;
  const paymentMethod = document.getElementById("paymentMethod").value;

  if (paymentMethod === "creditCard") {
    creditCardContainer.classList.remove("hide");
    paypalContainer.classList.add("hide");

    // Set required on credit card, remove from PayPal
    theForm.cardNumber.required = true;
    theForm.paypalUsername.required = false;
  } else if (paymentMethod === "paypal") {
    creditCardContainer.classList.add("hide");
    paypalContainer.classList.remove("hide");

    // Set required on PayPal, remove from credit card
    theForm.cardNumber.required = false;
    theForm.paypalUsername.required = true;
  } else {
    // Hide both if nothing selected
    creditCardContainer.classList.add("hide");
    paypalContainer.classList.add("hide");

    theForm.cardNumber.required = false;
    theForm.paypalUsername.required = false;
  }
}

function showErrors(errors) {
  const errorEl = document.querySelector(".errors");
  const html = errors.map((error) => `<p>${error}</p>`);
  errorEl.innerHTML = html.join("");
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("paymentMethod").addEventListener("change", togglePaymentDetails);
  togglePaymentDetails();

  document.getElementById("checkoutForm").addEventListener("submit", validateForm);
});