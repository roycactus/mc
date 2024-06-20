const button = document.querySelector(".btn");

function handleButtonClick() {
  const e = parseFloat(document.getElementById("eInput").value);
  const maxInput = parseFloat(document.getElementById("maxInput").value);
  const scaleClass = document.getElementById("dropdownClass").value;
  const application = document.getElementById("dropdownApplication").value;
  const unit = document.getElementById("dropdownUnit").value;

  const intervals = maxInput / e;
  const classification = validateScale(unit, scaleClass, e, intervals);
  const suitability = validateUse(unit, scaleClass, e, application);
  const loe = validateLoe(unit, scaleClass, e, intervals);

  const element = document.getElementById("nawds-container");
  element.innerHTML = ``;

  // NAWDS 3 check if valid classification

  element.innerHTML += `<h4>NAWDS 3 (1) - Classification</h4>`;
  if (classification !== null) {
    element.innerHTML += `<p>${classification}</p>`;
    return;
  }
  element.innerHTML += `<p>n = ${intervals}</p>`;

  //NAWDS 62 - Suitability
  element.innerHTML += `<h4>NAWDS 62 (1) - Suitability</h4>`;
  if (suitability[0] == 0) {
    element.innerHTML += `<p>${suitability[1]}</p>`;
    return;
  }
  element.innerHTML += `<p>${suitability[1]}</p>`;

  // NAWDS 8 Table
  if (scaleClass == "iiihd") {
    element.innerHTML += `<h4>NAWDS 8 (3) - Performance</h4>`;
  } else {
    element.innerHTML += `<h4>NAWDS 8 (1) - Performance</h4>`;
  }
  element.innerHTML += `<div id="table-container"></div>`;
  const tableContainer = document.getElementById("table-container");
  const table = document.createElement("table");
  table.classList.add("data-table");
  loe.forEach((rowData) => {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.innerHTML = rowData;
    row.appendChild(cell);
    table.appendChild(row);
  });
  tableContainer.appendChild(table);

  // NAWDS Design
  element.innerHTML += `<h4>NAWDS 40-44 - Zero Mechanisms</h4>`;
  element.innerHTML += `<p>AZSM: ${-5 * e} ${unit} (-5e)</p>`;
  element.innerHTML += `<p>AZTM: test load + ${
    0.7 * e
  } ${unit} (test load + 0.7e)</p>`;
  element.innerHTML += `<p>IZSM: ${maxInput * 0.2} ${unit} (20% Max)</p>`;
  element.innerHTML += `<p>SAZSM ${maxInput * 0.04} ${unit} (4% Max)</p>`;
}

button.addEventListener("click", handleButtonClick);
