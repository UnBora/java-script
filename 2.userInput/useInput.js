let useName;
document.getElementById("mySubmit").onclick = function () {
  useName = document.getElementById("myInput").value;
  document.getElementById("varInput").textContent = `Hello ${useName}`;
};
  