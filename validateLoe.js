function validateLoe(scaleUnit, scaleClass, e, n) {
  // loe in e, loe e range, loe in unit, loe unit range
  let loe = [];
  loe[0] = [];
  loe[0] = `Range<br>In Service<br>Acceptance`;
  if (scaleClass == `ii`) {
    loe[1] = [];
    loe[1] = `0${scaleUnit} - ${e * 5000}${scaleUnit}`;
    loe[1] += `<br>±1e (±${e * 1}${scaleUnit})`;
    loe[1] += `<br)±0.5e (±${e * 0.5}${scaleUnit})`;
    if (n > 5000) {
      loe[2] = [];
      loe[2] = `${e * 5001}${scaleUnit} - ${e * 20000}${scaleUnit}`;
      loe[2] = `<br>±2e (±${e * 2}${scaleUnit})`;
      loe[2] = `<br>±1e (±${e * 0.5}${scaleUnit})`;
    }
    if (n > 20000) {
      loe[3] = [];
      loe[3] = `${e * 20001}${scaleUnit} - ${e * 100000}${scaleUnit}`;
      loe[3] = `<br>±3e (±${e * 2}${scaleUnit})`;
      loe[3] = `<br>±1.5e (±${e * 0.5}${scaleUnit})`;
    }
  }
  if (scaleClass == `iii`) {
    loe[1] = [];
    loe[1] = `0${scaleUnit} - ${e * 500}${scaleUnit}`;
    loe[1] += `<br>±1e (±${e * 1}${scaleUnit})`;
    loe[1] += `<br>±0.5e (±${e * 0.5}${scaleUnit})`;
    if (n > 500) {
      loe[2] = [];
      loe[2] = `${e * 501}${scaleUnit} - ${e * 2000}${scaleUnit}`;
      loe[2] += `<br>±2e (±${e * 2}${scaleUnit})`;
      loe[2] += `<br>±1e (±${e * 0.5}${scaleUnit})`;
    }
    if (n > 2000) {
      loe[3] = [];
      loe[3] = `${e * 2001}${scaleUnit} - ${e * 4000}${scaleUnit}`;
      loe[3] += `<br>±3e (±${e * 2}${scaleUnit})`;
      loe[3] += `<br>±1.5e (±${e * 0.5}${scaleUnit})`;
    }
    if (n > 4000) {
      loe[4] = [];
      loe[4] = `${e * 4001}${scaleUnit} - ${e * 10000}${scaleUnit}`;
      loe[4] += `<br>±5e (±${e * 2}${scaleUnit})`;
      loe[4] += `<br>±2.5e (±${e * 0.5}${scaleUnit})`;
    }
  }
  if (scaleClass == `iiii`) {
    loe[1] = [];
    loe[1] = `0${scaleUnit} - ${e * 50}${scaleUnit}`;
    loe[1] = `<br>±1e (±${e * 1}${scaleUnit})`;
    loe[1] = `<br>±0.5e (±${e * 0.5}${scaleUnit})`;
    if (n > 50) {
      loe[2] = [];
      loe[2] = `${e * 51}${scaleUnit} - ${e * 200}${scaleUnit}`;
      loe[2] = `<br>±2e (±${e * 2}${scaleUnit})`;
      loe[2] = `<br>±1e (±${e * 0.5}${scaleUnit})`;
    }
    if (n > 200) {
      loe[3] = [];
      loe[3] = `${e * 201}${scaleUnit} - ${e * 400}${scaleUnit}`;
      loe[3] = `<br>±3e (±${e * 2}${scaleUnit})`;
      loe[3] = `<br>±1.5e (±${e * 0.5}${scaleUnit})`;
    }
    if (n > 400) {
      loe[4] = [];
      loe[4] = `${e * 401}${scaleUnit} - ${e * 1200}${scaleUnit}`;
      loe[4] = `<br>±5e (±${e * 2}${scaleUnit})`;
      loe[4] = `<br>±2.5e (±${e * 0.5}${scaleUnit})`;
    }
  }

  if (scaleClass == `iiihd`) {
    for (let c = 1; c <= 22; c++) {
      if (c === 1) {
        loe[c] = `0${scaleUnit} - 500${scaleUnit}`;
        loe[c] += `<br>±1e (±${e * 1}${scaleUnit})`;
        loe[c] += `<br>±0.5e (±${e * 0.5}${scaleUnit})`;
      } else {
        loe[c] = `${(c - 2) * 800 + 500 + e}${scaleUnit} - ${
          (c - 1) * 800 + 500
        }${scaleUnit}`;
        loe[c] += `<br>±${c}e (±${e * c}${scaleUnit})`;
        loe[c] += `<br>±${c / 2}e (±${(e * c) / 2}${scaleUnit})`;
      }
      console.log(c);
    }
  }

  return loe;
}