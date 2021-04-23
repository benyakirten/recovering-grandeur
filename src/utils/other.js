export const betweenMinAndMax = (currentAmt, newAmt, min = 0, max = 100) => {
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
  return Math.floor(Math.random() * (max - min)) + min;
};

export const getRandomItemFromArray = arr => {
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
};

export const getRandomItemFromObject = obj => {
  const keys = Object.keys(obj);
  const idx = Math.floor(Math.random() * keys.length);
  return obj[keys[idx]];
};

export const shuffleArray = arr => {
  arr.sort(() => Math.random() - 0.5);
};

export const checkBreakpointActive = (
  enabled,
  breakpoint,
  minimum,
  negChance
) => {
  if (enabled && breakpoint > minimum) {
    return Math.random() * breakpoint > negChance;
  }
  return false;
};
