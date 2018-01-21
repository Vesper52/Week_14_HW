// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $DateInput = document.querySelector("#date");
var $CityInput = document.querySelector("#city");
var $StateInput = document.querySelector("#state");
var $CountryInput = document.querySelector("#country");
var $ShapeInput = document.querySelector("#shape");
var $searchBtn = document.querySelector("#search");

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);

// Set filteredata to addressData initially
var filteredata = dataSet;

// renderTable renders the filteredata to the tbody
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filteredata.length; i++) {
    // Get get the current data object and its fields
    var data = filteredata[i];
    var fields = Object.keys(data);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the data object, create a new cell at set its inner text to be the current value at the current data's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = data[field];
    }
  }
}

function handleSearchButtonClick() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  if ($DateInput.value != ""){
    var filterDate = $DateInput.value.trim();

    // Set filteredata to an array of all addresses whose "state" matches the filter
    filteredata = dataSet.filter(function(data) {
      var DataDate = data.datetime.toLowerCase();

      // If true, add the data to the filteredata, otherwise don't add it to filteredata
      return DataDate === filterDate;
    });

  }
  if ($CityInput.value != ""){
    var filterCity = $CityInput.value.trim().toLowerCase();

    // Set filteredata to an array of all addresses whose "state" matches the filter
    filteredata = dataSet.filter(function(data) {
      var DataCity = data.city.toLowerCase();

      // If true, add the data to the filteredata, otherwise don't add it to filteredata
      return DataCity === filterCity;
    });

  }
  if ($StateInput.value != ""){
    var filterState = $StateInput.value.trim().toLowerCase();

    // Set filteredata to an array of all addresses whose "state" matches the filter
    filteredata = dataSet.filter(function(data) {
      var DataState = data.state.toLowerCase();

      // If true, add the data to the filteredata, otherwise don't add it to filteredata
      return DataState === filterState;
    });

  }
  if ($CountryInput.value != ""){
    var filterCountry = $CountryInput.value.trim().toLowerCase();

    // Set filteredata to an array of all addresses whose "state" matches the filter
    filteredata = dataSet.filter(function(data) {
      var DataCountry = data.country.toLowerCase();

      // If true, add the data to the filteredata, otherwise don't add it to filteredata
      return DataCountry === filterCountry;
    });

  }
  if ($ShapeInput.value != ""){
    var filterShape = $ShapeInput.value.trim().toLowerCase();

    // Set filteredata to an array of all addresses whose "state" matches the filter
    filteredata = dataSet.filter(function(data) {
      var DataShape = data.shape.toLowerCase();

      // If true, add the data to the filteredata, otherwise don't add it to filteredata
      return DataShape === filterShape;
    });

  }

  renderTable();
}

// Render the table for the first time on page load
renderTable();
