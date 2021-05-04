// ENUMS
export const breakpointEnum = {
  changeHeaderColor: 0,
  changeHeaderRadiusDelta: 1,
  changeHeaderNoCircles: 2,
  changeClickAnimationLength: 3,
  changeClickAnimatonVariation: 4,
  changeClickAnimationColor: 5,
  changeClickAnimationInitialRadius: 6,
  makeClickAnimationWave: 7,
  makeHeaderWave: 8,
  toggleHeaderCanvas: 9,
  toggleHeaderCanvasColorRandomization: 10,
  toggleClickAnimation: 11
};

export const animationShapeEnum = {
  circle: 0,
  square: 1,
  star: 2,
  x: 3,
  rhombus: 4,
  frame: 5,
  arrow: 6,
  trapezoid: 7
};

// ENUM-LIKES
export const filterEnum = {
  0: { name: "blur", min: 1, max: 4, units: "px" },
  1: { name: "brightness", min: 50, max: 200, units: "%" },
  2: { name: "contrast", min: 50, max: 200, units: "%" },
  3: { name: "hue-rotate", min: 15, max: 345, units: "deg" },
  4: { name: "invert", min: 5, max: 100, units: "%" },
  5: { name: "saturate", min: 50, max: 200, units: "%" }
};
