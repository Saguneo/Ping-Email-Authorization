const notifyButton = document.getElementById("notify-button");
const emailInput = document.getElementById("email-input");
const errorMessage = document.getElementById("error-message");

function validateEmail() {
  // Using a simple regular expression to check for a valid email format
  if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(emailInput.value)) {
    errorMessage.classList.remove("hidden");
    emailInput.classList.add("error-outline");
    return false; // Prevent form submission
  } else {
    errorMessage.classList.add("hidden");
    emailInput.classList.remove("error-outline");
    return true; // Allow form submission
  }
}

console.log(emailInput);
console.log(emailInput.value);
