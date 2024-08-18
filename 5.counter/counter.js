let count = 0;
const counterDisplay = document.getElementById("counter");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const resetButton = document.getElementById("reset");

function updateDisplay() {
  counterDisplay.textContent = count;
}

incrementButton.addEventListener("click", () => {
  count++;
  updateDisplay();
});

decrementButton.addEventListener("click", () => {
  count--;
  updateDisplay();
});

resetButton.addEventListener("click", () => {
  count = 0;
  updateDisplay();
});
