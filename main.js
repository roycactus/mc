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

  const el = document.getElementById("nawds-container");
  el.innerHTML = ``;

  // NAWDS 3 check if valid classification

  elAdd(el, `<h4>NAWDS 3 (1) - Classification</p>`);
  if (classification !== null) {
    elAdd(el, `<p>${classification}</p>`);
    return;
  }
  elAdd(el, `<p>n = ${intervals}</p>`);

  //NAWDS 62 - Suitability
  elAdd(el, `<h4>NAWDS 62 (1) - Suitability</p>`);
  if (suitability[0] == 0) {
    elAdd(el, `<p>${suitability[1]}</p>`);
    return;
  }
  elAdd(el, `<p>${suitability[1]}</p>`);

  // NAWDS 8 Table
  if (scaleClass == "iiihd") {
    elAdd(el, `<h4>NAWDS 8 (3) - Performance</p>`);
  } else {
    elAdd(el, `<h4>NAWDS 8 (1) - Performance</p>`);
  }
  elAdd(el, `<div id="table-container"></div>`);
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
  elAdd(el, `<h4>NAWDS 40-44 - Zero Mechanisms</p>`);
  elAdd(el, `<p>AZSM: ${-5 * e} ${unit} (-5e)</p>`);
  elAdd(el, `<p>AZTM: ~10e + ${0.7 * e} ${unit} (~10e + 0.7e)</p>`);
  elAdd(el, `<p>IZSM: ${maxInput * 0.2} ${unit} (20% Max)</p>`);
  elAdd(el, `<p>SAZSM ${maxInput * 0.04} ${unit} (4% Max)</p>`);

  elAdd(el, `<h4>NAWDS 11-13 - Performance</p>`);
  elAdd(el, `<p>Eccentricity: ~1/3 Max = ${maxInput / 3} ${unit}</p>`);
  elAdd(el, `<p>Repeatability: ~1/2 Max = ${maxInput / 2} ${unit}</p>`);

  elAdd(el, `<h4>NAWDS 39 - Performance</p>`);
  elAdd(el, `<p>Calculating Blank: 9e = ${9.0 * e} ${unit}</p>`);
  elAdd(el, `<p>Other Blank: 5% Max = ${maxInput * 0.05} ${unit}</p>`);
}

function elAdd(el, newText) {
  return (el.innerHTML += newText);
}

button.addEventListener("click", handleButtonClick);
