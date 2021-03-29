// To avoid too much bloat in the vue files
// serveral functions concerning
// hex and decimal conversions
export const separateRGB = hexString => {
  // Given a string that's a hash pound followed by three pairs of hex numbers
  // Returns it as an object with those three paris separated into r, g and b keys
  return {
    r: hexString.slice(1, 3),
    g: hexString.slice(3, 5),
    b: hexString.slice(5, 7)
  };
};
export const getAverageOffset = (initialColor, endColor, iterations) => {
  // This function takes a CSS color hex STRING (i.e. '#000000')
  // separated into an OBJECT with r, g and b properties and returns an INTEGER
  // NOTE: initialColor and endColor are expected to be
  // objects of the type returned by separateRGB
  // This function returns an object with the same properties but as average integers
  const redOffset = getColorOffset(initialColor.r, endColor.r, iterations);
  const greenOffset = getColorOffset(initialColor.g, endColor.g, iterations);
  const blueOffset = getColorOffset(initialColor.b, endColor.b, iterations);
  return { r: redOffset, g: greenOffset, b: blueOffset };
};
export const getColorOffset = (firstValue, lastValue, iterations) => {
  // firstValue and lastValue are hex string for a single color value (r, g or b)
  // They are parsed as integers base 16 then returned as their
  // SIGNED difference averaged over the iterations.
  const firstColor = parseInt(firstValue, 16);
  const lastColor = parseInt(lastValue, 16);
  return Math.floor((firstColor - lastColor) / iterations);
};
export const getHexForIteration = (i, offset, initialColor) => {
  // Given a certain iteration, what the offset is and what the starting color is
  // This function returns the color for the iteration as a CSS hex string
  const redHex = getHexDigits(offset.r, i, initialColor.r);
  const greenHex = getHexDigits(offset.g, i, initialColor.g);
  const blueHex = getHexDigits(offset.b, i, initialColor.b);
  return `#${redHex}${greenHex}${blueHex}`;
};
export const getHexDigits = (color, i, initialColor) => {
  // For an individual color, gets the hex code for the iteration

  const delta = (color * i).toString(16);
  let hex = subtractHexes(initialColor, delta);
  // If the hex is 0-9, we want it to be two digits long because
  // a CSS hex code expects two digits per color
  if (hex.length === 1) {
    hex = `0${hex}`;
  }
  return hex;
};
export const subtractHexes = (original, delta) => {
  // Convert hexes to integers, subtract them, then return them as hexes
  const i = parseInt(original, 16);
  const j = parseInt(delta, 16);
  return (i - j).toString(16);
};
export const getRGBAStringFromHex = (hexString, opacity) => {
  // Create a CSS RGBA String i.e. rgba(0, 0, 0, opacity)
  // from a hex string i.e. #000000 and an opacity number
  let { r, g, b } = separateRGB(hexString);
  r = parseInt(r, 16);
  g = parseInt(g, 16);
  b = parseInt(b, 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};
