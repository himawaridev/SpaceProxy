// const colorBtn = document.getElementById("color-btn");

// colorBtn.addEventListener("click", function() {
//   colorBtn.classList.toggle("new-color");
// });

// const valueInput = document.getElementById("value");
// const decreaseButton = document.getElementById("decrease");
// const increaseButton = document.getElementById("increase");
// const daysSelect = document.getElementById("days");
// const calculateButton = document.getElementById("calculate");
// const resultElement = document.getElementById("result");

// decreaseButton.addEventListener("click", () => {
//   valueInput.stepDown();
// });

// increaseButton.addEventListener("click", () => {
//   valueInput.stepUp();
// });

// calculateButton.addEventListener("click", () => {
//   const value = parseInt(valueInput.value);
//   const days = parseInt(daysSelect.value);
//   const result = value * days;
//   resultElement.textContent = `Result: ${result}`;
// });

function setCountry(name, flagURL) {
  let countryName = document.getElementById("country-name");
  let countryFlag = document.getElementById("country-flag");

  countryName.innerHTML = name;
  countryFlag.src = flagURL;
}







