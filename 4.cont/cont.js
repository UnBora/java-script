//cont= a variable that cab't be change

const PI = 3.14159;
let radius;
let ciromforence;

document.getElementById("mySubmit").onclick = function () {
  radius = document.getElementById("myText").value;
  radius = Number(radius);
  console.log(radius);
  ciromforence = 2 * PI * radius;
  console.log(ciromforence);
  document.getElementById("result").textContent = ciromforence;
};
