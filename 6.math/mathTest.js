// Generate a random integer between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber); // This will log a random number between 1 and 100

document.getElementById("mySubmit").onclick = function () {
  // Retrieve the radius value from the input field
  const radius = Number(document.getElementById("radius").value);

  // Calculate the area of the circle
  const area = Math.PI * Math.pow(radius, 2);

  // Update the result element with the calculated area
  document.getElementById("result").textContent = `The area is ${area.toFixed(
    2
  )}`;
};


// Math = built-in object that provides a
//              collection of properties and methods

let x = 3;
let y = 2;
let z = 1;

//console.log(Math.PI);
//console.log(Math.E);

//z = Math.round(x);
//z = Math.floor(x);
//z = Math.ceil(x);
//z = Math.trunc(x);
//z = Math.pow(x, y);
//z = Math.sqrt(x);
//z = Math.log(x);
//z = Math.sin(x);
//z = Math.cos(x);
//z = Math.tan(x);
//z = Math.abs(x);
//z = Math.sign(x);
let max = Math.max(x, y, z);
let min = Math.min(x, y, z);

console.log(min);
