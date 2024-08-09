let age;
let defaultAge;

document.getElementById("mySubmit").onclick = function () {
  // Retrieve the text content of the h2 element, which contains the default age.
  defaultAge = Number(document.getElementById("age2").textContent);

  console.log(defaultAge);
  
  // Convert the input value to a number and add it to the default age.
  age = Number(document.getElementById("age").value) + defaultAge;

  // Update the text content of the h2 element with the new age.
  document.getElementById("age2").textContent = age;
};
