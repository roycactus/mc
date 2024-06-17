const button = document.querySelector(".btn");

function handleButtonClick() {
  const input1 = document.getElementById("eInput").value;
  const input2 = document.getElementById("maxInput").value;
  const dropdownClass = document.getElementById("dropdownClass").value;
  const dropdownUnit = document.getElementById("dropdownUnit").value;

  const eInput = parseFloat(input1);
  const maxInput = parseFloat(input2);
  const intervals = maxInput / eInput;

  const validationResult = validateScale(
    dropdownUnit,
    dropdownClass,
    eInput,
    intervals
  );

  const loe = validateLoe(dropdownUnit, dropdownClass, eInput, intervals);
  //console.log(loe);

  if (validationResult !== null) {
    alert(validationResult);
  } else {
    // Sample data array with four columns

    const tableContainer = document.getElementById("table-container");
    tableContainer.innerHTML = ""; // Clear any existing table

    const table = document.createElement("table");
    table.classList.add("data-table");

    // Iterate over each row in the array
    loe.forEach((rowData) => {
      const row = document.createElement("tr");
      const cell = document.createElement("td");
      cell.innerHTML = rowData;
      row.appendChild(cell);
      table.appendChild(row);
    });

    tableContainer.appendChild(table);
  }
}

button.addEventListener("click", handleButtonClick);
