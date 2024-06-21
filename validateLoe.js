function validateLoe(scaleUnit, scaleClass, e, n) {
  let loe = [];
  loe[0] = [];
  loe[0] = `Range / In Service LOE`;
  if (scaleClass == `ii`) {
    loe[1] = [];
    loe[1] = `0 ${scaleUnit} - ${e * 5000} ${scaleUnit}`;
    loe[1] += `  /  ${e * 1} ${scaleUnit}`;
    if (n > 5000) {
      loe[2] = [];
      loe[2] = `${e * 5001} ${scaleUnit} - ${e * 20000} ${scaleUnit}`;
      loe[2] += `  /  ${e * 2} ${scaleUnit}`;
    }
    if (n > 20000) {
      loe[3] = [];
      loe[3] = `${e * 20001} ${scaleUnit} - ${e * 100000} ${scaleUnit}`;
      loe[3] += `  /  ${e * 3} ${scaleUnit}`;
    }
  }
  if (scaleClass == `iii`) {
    loe[1] = [];
    loe[1] = `0 ${scaleUnit} - ${e * 500} ${scaleUnit}`;
    loe[1] += `  /  ${e * 1} ${scaleUnit}`;
    if (n > 500) {
      loe[2] = [];
      loe[2] = `${e * 501} ${scaleUnit} - ${e * 2000} ${scaleUnit}`;
      loe[2] += `  /  ${e * 2} ${scaleUnit}`;
    }
    if (n > 2000) {
      loe[3] = [];
      loe[3] = `${e * 2001} ${scaleUnit} - ${e * 4000} ${scaleUnit}`;
      loe[3] += `  /  ${e * 3} ${scaleUnit}`;
    }
    if (n > 4000) {
      loe[4] = [];
      loe[4] = `${e * 4001} ${scaleUnit} - ${e * 10000} ${scaleUnit}`;
      loe[4] += `  /  ${e * 5} ${scaleUnit}`;
    }
  }
  if (scaleClass == `iiii`) {
    loe[1] = [];
    loe[1] = `0 ${scaleUnit} - ${e * 50} ${scaleUnit}`;
    loe[1] += `  /  ${e * 1} ${scaleUnit}`;
    if (n > 50) {
      loe[2] = [];
      loe[2] = `${e * 51} ${scaleUnit} - ${e * 200} ${scaleUnit}`;
      loe[2] += `  /  ${e * 2} ${scaleUnit}`;
    }
    if (n > 200) {
      loe[3] = [];
      loe[3] = `${e * 201} ${scaleUnit} - ${e * 400} ${scaleUnit}`;
      loe[3] += `  /  ${e * 3} ${scaleUnit}`;
    }
    if (n > 400) {
      loe[4] = [];
      loe[4] = `${e * 401} ${scaleUnit} - ${e * 1200} ${scaleUnit}`;
      loe[4] += `  /  ${e * 5} ${scaleUnit}`;
    }
  }
  if (scaleClass == `iiihd`) {
    for (let c = 1; c <= 22; c++) {
      console.log(`${(c - 2) * 800 * e + 501 * e}`);

      if (c === 1) {
        loe[c] = `0 - ${500 * e} ${scaleUnit}`;
        loe[c] += `  /  ${e} ${scaleUnit}`;
      } else {
        if ((c - 2) * 800 * e + 501 * e <= n * e) {
          loe[c] = `${(c - 2) * 800 * e + 501 * e} ${scaleUnit} - ${
            ((c - 1) * 800 + 500) * e
          } ${scaleUnit}`;
          loe[c] += `  /  ± ${c}e (± ${e * c} ${scaleUnit}`;
        }
      }
    }
  }
  return loe;
}
