// Get the form element
var form = document.getElementById("add-player-form");

// Add a submit event listener to the form
form.addEventListener("submit", function(event) {
  event.preventDefault();

  // Get the values of the form inputs
  var firstName = document.getElementById("first-name").value;
  var lastName = document.getElementById("last-name").value;
  var sport = document.getElementById("sport").value;
  var position = document.getElementById("position").value;

  // Create a new table row with the player information
  var table = document.getElementById("player-table");
  var row = table.insertRow();
  var firstNameCell = row.insertCell(0);
  var lastNameCell = row.insertCell(1);
  var sportCell = row.insertCell(2);
  var positionCell = row.insertCell(3);
  firstNameCell.innerHTML = firstName;
  lastNameCell.innerHTML = lastName;
  sportCell.innerHTML = sport;
  positionCell.innerHTML = position;

  // Clear the form inputs
  form.reset();
});
