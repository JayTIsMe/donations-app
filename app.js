const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const amountInput = document.getElementById("amountInput");
const messageInput = document.getElementById("messageInput");
const causeInput = document.getElementById("causeInput");

const submitBtn = document.getElementById("submitBtn");
const thankYouOutput = document.getElementById("thankYouOutput");

submitBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const amount = Number(amountInput.value.trim());
  const message = messageInput.value.trim();
  const cause = causeInput.value.trim().toLowerCase();

  if (!name || !email || !amount || !cause) {
    thankYouOutput.textContent = "Please fill out all required fields.";
    return;
  }

  // IMPACT LOGIC
  let impactText = "";

  if (cause.includes("homeless")) {
    const meals = amount * 1; // $1 = 1 meal
    impactText = `Your donation provided ${meals} meals to the homeless.`;
  } 
  else if (cause.includes("animal") || cause.includes("dog") || cause.includes("cat")) {
    const petsHelped = Math.floor(amount / 10); // $10 = 1 pet helped
    impactText = `Your donation helped ${petsHelped} dogs/cats find homes.`;
  } 
  else if (cause.includes("children") || cause.includes("kids")) {
    const supplies = amount * 2; // $1 = 2 school supplies
    impactText = `Your donation provided ${supplies} school supplies for children.`;
  } 
  else {
    // Default impact if cause is unknown
    impactText = `Your donation made a meaningful impact toward ${cause}.`;
  }

  thankYouOutput.textContent =
    `Thank you, ${name}, for your generous donation of $${amount} ` +
    `toward ${cause}. ${impactText} ` +
    (message ? `Your message: "${message}"` : "");
});
