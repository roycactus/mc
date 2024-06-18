function validateScale(scaleUnit, scaleClass, e, n) {
  let grams = 0.0;
  if (scaleUnit == "kg") {
    grams = e * 1000;
  } else {
    grams = e;
  }
  console.log(scaleUnit, scaleClass, e, n, grams);
  // Class II
  if (scaleClass == "ii") {
    if (grams >= 0.001 && grams <= 0.05) {
      if (n < 100 || n > 100000) {
        return `Invalid n = ${n}`;
      }
    } else if (grams >= 0.1) {
      if (n < 5000 || n > 100000) {
        return `Invalid n = ${n}`;
      }
    } else {
      return `Invalid e = ${e} ${scaleUnit}`;
    }

    // Class III
  } else if (scaleClass == "iii") {
    if (grams >= 0.1 && grams <= 2) {
      if (n < 100 || n > 10000) {
        return `Invalid n = ${n}`;
      }
    } else if (grams >= 5) {
      if (n < 500 || n > 10000) {
        return `Invalid n = ${n}`;
      }
    } else {
      return `Invalid e = ${e} ${scaleUnit}`;
    }

    // Class IIIHD
  } else if (scaleClass == "iiihd") {
    if (grams >= 2000) {
      if (n < 2000) {
        return `Invalid n = ${n}`;
      }
    } else {
      return `Invalid e = ${e} ${scaleUnit}`;
    }
    // Class IIII
  } else if (scaleClass == "iiii") {
    if (grams >= 5000) {
      if (n < 100 || n > 1200) {
        return `Invalid n = ${n}`;
      }
    } else {
      return `Invalid e = ${e} ${scaleUnit}`;
    }
  }
  return null;
}
