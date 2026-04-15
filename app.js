const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const amountInput = document.getElementById("amountInput");
const messageInput = document.getElementById("messageInput");
const causeInput = document.getElementById("causeInput");

const submitBtn = document.getElementById("submitBtn");
const thankYouOutput = document.getElementById("thankYouOutput");
const resetBtn = document.getElementById("resetBtn");

const formBox = document.querySelector(".form-box");

// IMPACT LOGIC FUNCTION
function getImpact(amount, cause) {
  cause = cause.toLowerCase();

  if (cause.includes("homeless")) {
    return `Your donation provided ${amount} meals to the homeless.`;
  } 
  else if (cause.includes("animal") || cause.includes("dog") || cause.includes("cat")) {
    const petsHelped = Math.floor(amount / 10);
    return `Your donation helped ${petsHelped} dogs/cats find homes.`;
  } 
  else if (cause.includes("children") || cause.includes("kids")) {
    const supplies = amount * 2;
    return `Your donation provided ${supplies} school supplies for children.`;
  } 
  else {
    return `Your donation made a meaningful impact toward ${cause}.`;
  }
}

submitBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const amount = Number(amountInput.value.trim());
  const message = messageInput.value.trim();
  const cause = causeInput.value.trim();

  if (!name || !email || !amount || !cause) {
    thankYouOutput.textContent = "Please fill out all required fields.";
    thankYouOutput.style.display = "block";
    thankYouOutput.classList.add("show");
    return;
  }

  const impactText = getImpact(amount, cause);

  thankYouOutput.textContent =
    `Thank you, ${name}, for your generous donation of $${amount} toward ${cause}. ${impactText} ` +
    (message ? `Your message: "${message}"` : "");

  // Hide form, show thank-you
  formBox.style.display = "none";

  thankYouOutput.style.display = "block";
  setTimeout(() => thankYouOutput.classList.add("show"), 50);

  resetBtn.style.display = "block";
});

// RESET BUTTON
resetBtn.addEventListener("click", () => {
  // Clear fields
  nameInput.value = "";
  emailInput.value = "";
  amountInput.value = "";
  messageInput.value = "";
  causeInput.value = "";

  // Hide thank-you
  thankYouOutput.classList.remove("show");
  setTimeout(() => {
    thankYouOutput.style.display = "none";
  }, 300);

  resetBtn.style.display = "none";

  // Show form again
  formBox.style.display = "block";
});
