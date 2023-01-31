var userInputs = {};

function saveUserInput() {
    document.getElementById("symbol").value = "Enter stock symbol here";
    document.getElementById("number-of-shares").value = "Enter # of shares here";
}

function doTheCalculations() {
    document.getElementById("hidden").style.display = "block";
}

var modal = document.getElementById("modal");
var btn = document.getElementById("openModal");
var close = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

close.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
