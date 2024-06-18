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
  const tableContainer = document.getElementById("table-container");
  tableContainer.innerHTML = ""; // Clear any existing table
  const element = document.getElementById("nawds-container");
  element.innerHTML = ``;
  element.innerHTML += `<h4>NAWDS 3 (1)</h4>`;

  if (validationResult !== null) {
    element.innerHTML += `<p>${validationResult}</p>`;
  } else {
    element.innerHTML += `<p>n = ${intervals}</p>`;
    if (dropdownClass == "iiihd") {
      element.innerHTML += `<h4>NAWDS 8 (3)</h4>`;
    } else {
      element.innerHTML += `<h4>NAWDS 8 (1)</h4>`;
    }

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
