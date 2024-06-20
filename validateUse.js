function validateUse(scaleUnit, scaleClass, e, application) {
  let grams = 0.0;
  scaleUnit == "kg" ? (grams = e * 1000) : (grams = e);

  if (application == "1a") {
    if (scaleClass !== "ii") {
      return [0, `Maximum accuracy class II`];
    } else if (grams > 0.01) {
      return [0, `e must not be greater than 10 mg`];
    } else {
      return [1, `Minimum net load: ${e} ${scaleUnit} (factor: 1)`];
    }
  } else if (application == "1b") {
    if (scaleClass !== "ii") {
      return [0, `Maximum accuracy class II`];
    } else if (grams >= 0.02) {
      return [1, `Minimum net load: ${e * 2000} ${scaleUnit} (factor: 2000)`];
    } else {
      return [1, `Minimum net load: ${e} ${scaleUnit} (factor: 1)`];
    }
  } else if (application == "2") {
    if (scaleClass !== "ii") {
      return [0, `Maximum accuracy class II`];
    } else if (grams > 0.001) {
      return [0, `e must not be greater than 1 mg`];
    } else {
      return [1, `Minimum net load: ${e} ${scaleUnit} (factor: 1)`];
    }
  } else if (application == "3") {
    if (scaleClass == "iiihd" || scaleClass == "iiii") {
      return [0, `Maximum accuracy class III`];
    } else if (grams <= 50) {
      return [1, `Minimum net load: ${e * 10} ${scaleUnit} (factor: 10)`];
    } else {
      return [1, `Minimum net load: ${e * 20} ${scaleUnit} (factor: 20)`];
    }
  } else if (application == "4") {
    return [1, `Minimum net load: ${e * 50} ${scaleUnit} (factor: 50)`];
  } else if (application == "5") {
    return [1, `Minimum net load: ${e * 10} ${scaleUnit} (factor: 10)`];
  } else if (application == "6") {
    if (scaleClass == "iiii") {
      return [0, `Maximum accuracy class IIIHD`];
    } else {
      return [1, `Minimum net load: ${e * 20} ${scaleUnit} (factor: 20)`];
    }
  } else if (application == "7") {
    if (scaleClass == "iiii") {
      return [0, `Maximum accuracy class IIIHD`];
    } else {
      return [1, `Minimum net load: ${e * 100} ${scaleUnit} (factor: 100)`];
    }
  } else if (application == "8") {
    if (scaleClass == "iiii") {
      return [0, `Maximum accuracy class IIIHD`];
    } else {
      return [1, `Minimum net load: ${e * 200} ${scaleUnit} (factor: 200)`];
    }
  } else if (application == "9") {
    if (scaleClass == "iiii") {
      return [0, `Maximum accuracy class IIIHD`];
    } else {
      return [1, `Minimum net load: ${e * 100} ${scaleUnit} (factor: 100)`];
    }
  } else if (application == "10") {
    if (scaleClass == "iiihd" || scaleClass == "iiii") {
      return [0, `Maximum accuracy class III`];
    } else if (grams <= 5) {
      return [1, `Minimum net load: ${e * 20} ${scaleUnit} (factor: 20)`];
    } else if (grams >= 50) {
      return [1, `Minimum net load: ${e * 100} ${scaleUnit} (factor: 100)`];
    } else {
      return [1, `Minimum net load: ${e * 50} ${scaleUnit} (factor: 50)`];
    }
  }
}
