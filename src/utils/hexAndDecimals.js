// To avoid too much bloat in the vue files
// serveral functions concerning
// hex and decimal conversions
export const separateRGB = hexString => {
  // Given a string that's a hash pound followed by three pairs of hex numbers
  // Returns it as an object with those three paris separated into r, g and b keys
  if (
    typeof hexString !== "string" ||
    !/^#(?:[0-9A-F]{3}|[0-9A-F]{6})$/i.test(hexString)
  ) {
    throw new TypeError(
      "Hex String must consist of # followed by 3 or 6 digits"
    );
  }
  return hexString.length === 4
    ? {
        r: hexString.slice(1, 2).repeat(2),
        g: hexString.slice(2, 3).repeat(2),
        b: hexString.slice(3, 4).repeat(2)
      }
    : {
        r: hexString.slice(1, 3),
        g: hexString.slice(3, 5),
        b: hexString.slice(5, 7)
      };
};
export const getCSSHexString = ({ r, g, b }) => {
  // Given an object of the type given by separateRGB,
  // make a CSS-friendly hex string from it
  if (typeof r !== "string" || typeof g !== "string" || typeof b !== "string") {
    throw new TypeError("RGB values must be strings");
  }
  if (
    r.length !== 2 ||
    !/^(?:[0-9A-F]{2})$/i.test(r) ||
    g.length !== 2 ||
    !/^(?:[0-9A-F]{2})$/i.test(g) ||
    b.length !== 2 ||
    !/^(?:[0-9A-F]{2})$/i.test(b)
  ) {
    throw new TypeError("Each RGB value must be 2 hexadecimal digits long");
  }
  return `#${r}${g}${b}`;
};
export const getRGBAStringFromHex = (hexString, opacity) => {
  // Create a CSS RGBA String i.e. rgba(0, 0, 0, opacity)
  // from a hex string i.e. #000000 and an opacity number
  if (typeof opacity !== "number" || opacity > 1 || opacity < 0) {
    throw new TypeError("Opacity must be a number between 0 and 1");
  }
  let { r, g, b } = separateRGB(hexString);
  r = parseInt(r, 16);
  g = parseInt(g, 16);
  b = parseInt(b, 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};
export const getAverageOffset = (initialColor, endColor, iterations) => {
  // This function takes a CSS color hex STRING (i.e. '#000000')
  // separated into an OBJECT with r, g and b properties and returns an INTEGER
  // NOTE: initialColor and endColor are expected to be
  // objects of the type returned by separateRGB
  // This function returns an object with the same properties but as average, decimal integers
  if (typeof iterations !== "number" || iterations % 1 !== 0) {
    throw new TypeError("Number of iterations must be a whole number");
  }
  const redOffset = getColorOffset(initialColor.r, endColor.r, iterations);
  const greenOffset = getColorOffset(initialColor.g, endColor.g, iterations);
  const blueOffset = getColorOffset(initialColor.b, endColor.b, iterations);
  return { r: redOffset, g: greenOffset, b: blueOffset };
};
export const getColorOffset = (firstValue, lastValue, iterations) => {
  // firstValue and lastValue are hex string for a single color value (r, g or b)
  // They are parsed as integers base 16 then returned as their
  // SIGNED difference averaged over the iterations.
  if (typeof iterations !== "number" || iterations % 1 !== 0) {
    throw new TypeError("Number of iterations must be a whole number");
  }
  const firstColor = parseInt(firstValue, 16);
  const lastColor = parseInt(lastValue, 16);
  return Math.floor((lastColor - firstColor) / iterations);
};
export const getHexForIteration = (iter, offset, initialColor) => {
  // Given a certain iteration, what the offset is and what the starting color is
  // This function returns the color for the iteration as a CSS hex string
  if (typeof iter !== "number" || iter % 1 !== 0) {
    throw new TypeError("Iteration count must be a whole number");
  }
  const redHex = getHexDigits(offset.r, iter, initialColor.r);
  const greenHex = getHexDigits(offset.g, iter, initialColor.g);
  const blueHex = getHexDigits(offset.b, iter, initialColor.b);
  return `#${redHex}${greenHex}${blueHex}`;
};
export const getHexDigits = (colorOffset, iter, initialColor) => {
  // For an individual color, gets the hex code for the iteration
  if (typeof iter !== "number" || iter % 1 !== 0) {
    throw new TypeError("Iteration count must be an integer");
  }
  const delta = (colorOffset * iter).toString(16);
  let hex = subtractHexes(initialColor, delta);
  // If the hex is 0-9, we want it to be two digits long because
  // a CSS hex code expects two digits per color
  if (hex.length === 1) {
    hex = `0${hex}`;
  }
  return hex;
};

export const getColorAndVariation = (
  separateColors,
  colorVariation,
  mult = 1
) => {
  const r = subtractHexes(separateColors.r, colorVariation, mult);
  const g = subtractHexes(separateColors.g, colorVariation, mult);
  const b = subtractHexes(separateColors.b, colorVariation, mult);
  return getCSSHexString({ r, g, b });
};

export const subtractHexes = (original, delta, multiplier = 1) => {
  // Convert hexes to integers, subtract them, then return them as hexes
  if (typeof multiplier !== "number") {
    throw new TypeError("Multiplier must be a number");
  }
  const i = parseInt(original, 16);
  const j = parseInt(delta, 16);
  if (isNaN(i) || isNaN(j)) {
    throw new TypeError(
      "Original and delta parameters must be able to be converted to decimal from hexadecimal"
    );
  }
  let difference = i - j * multiplier;
  if (difference > 255) {
    difference = 255;
  } else if (difference < 0) {
    difference = 0;
  }
  return difference.toString(16);
};
export const getDecimalFromHex = hex => {
  const decimal = parseInt(hex, 16);
  if (isNaN(decimal)) {
    throw new Error("Parameter could not be parsed as decimal");
  }
  return decimal;
};
export const getHexFromDecimal = decimal => {
  if (typeof decimal !== "number") {
    throw new TypeError("Parameter must be a number");
  }
  return decimal.toString(16);
};
