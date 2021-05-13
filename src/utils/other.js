export const betweenMinAndMax = (currentAmt, newAmt, min = 0, max = 100) => {
  if (min > max) {
    throw new Error("Min value must be less than max value");
  }
  const sum = currentAmt + newAmt;
  if (sum > max) {
    return max;
  } else if (sum < min) {
    return min;
  } else {
    return sum;
  }
};

export const getRandomNumberBetweenMinAndMax = (min = 1, max = 200) => {
  if (min > max) {
    throw new Error("Min value must be less than max value");
  }
  if (typeof min !== "number" || typeof max !== "number") {
    throw new TypeError("Min and max must be numbers");
  }
  return Math.floor(Math.random() * (max - min)) + min;
};

export const getRandomItemFromArray = arr => {
  if (!Array.isArray(arr)) {
    throw new TypeError("Parameter must be an array");
  }
  if (arr.length < 1) {
    throw new Error("Array must be of at least length 1");
  }
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
};

export const getRandomValueFromObject = obj => {
  if (obj !== Object(obj)) {
    throw new TypeError("Parameter must be an object");
  }
  if (Object.keys(obj).length < 1) {
    throw new Error("Object must have at least one key/value pair");
  }
  const values = Object.values(obj);
  const idx = Math.floor(Math.random() * values.length);
  return values[idx];
};

export const getRandomKeyFromObject = obj => {
  if (obj !== Object(obj)) {
    throw new TypeError("Parameter must be an object");
  }
  if (Object.keys(obj).length < 1) {
    throw new Error("Object must have at least one key/value pair");
  }
  const keys = Object.keys(obj);
  const idx = Math.floor(Math.random() * keys.length);
  return keys[idx];
};

export const shuffleArray = arr => {
  // Shuffles in place
  if (!Array.isArray(arr)) {
    throw new TypeError("Parameter must be an array");
  }
  arr.sort(() => Math.random() - 0.5);
};

export const checkBreakpointActive = (
  enabled,
  breakpoint,
  minimum,
  negChance
) => {
  return enabled && breakpoint > minimum
    ? Math.random() * breakpoint > negChance
    : false;
};
