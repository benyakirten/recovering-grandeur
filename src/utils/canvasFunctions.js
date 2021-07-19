// To avoid too much bloat in the vue files
// serveral functions related to canvas dimensions
// have been moved here
export const getCanvasDimensions = canvas => {
  const { left, top, width, height } = canvas.getBoundingClientRect();
  return { left, top, width, height };
};
export const getAbsoluteCorners = canvas => {
  // Get the corners of the canvas based on where it's located on screen
  const { left, top, width, height } = getCanvasDimensions(canvas);
  return [
    { x: left, y: top }, // Top left
    { x: left + width, y: top }, // Top right
    { x: left + width, y: top + height }, // Bottom right
    { x: left, y: top + height } // Bottom left
  ];
};
export const getRelativeCorners = canvas => {
  // Get the corners of the canvas based on its dimensions
  if (!canvas.width || !canvas.height) {
    throw new TypeError("Canvas does not have a width and/or height");
  }
  const { width, height } = canvas;
  return [
    { x: 0, y: 0 }, // Top left
    { x: width, y: 0 }, // Top right
    { x: width, y: height }, //  Bottom right
    { x: 0, y: height } // Bottom left
  ];
};

// Doubles of the class functions but generalized and separate
// If they're needed for other classes/files
export const getNearestCornerPosition = (canvas, x, y) => {
  const dist = getAbsoluteCorners(canvas)
    .map(p => Math.sqrt((p.x - x) ** 2 + (p.y - y) ** 2))
    .reduce((acc, next, idx) => (next < acc.dist ? { dist: next, idx } : acc), {
      dist: Infinity,
      idx: 0
    });
  const relative = getRelativeCorners(canvas);
  const corrected = relative[dist.idx];
  return { x: corrected.x, y: corrected.y };
};
export const clearCanvas = canvas => {
  if (typeof canvas.getContext !== "function") {
    throw new TypeError("Canvas does not have a getContext method");
  }
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    const { width, height } = getCanvasDimensions(canvas);
    ctx.clearRect(0, 0, width, height);
  }
};
export const drawCircle = (canvas, x, y, r, color = "#000000") => {
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.strokeStyle = color;
    ctx.stroke();
  }
};
