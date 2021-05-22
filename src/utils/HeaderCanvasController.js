import {
  getCanvasDimensions,
  getNearestCornerPosition,
  drawCircle
} from "@/utils/canvasFunctions";

import { getAverageOffset, getHexForIteration } from "@/utils/hexAndDecimals";

export default class HeaderCanvasController {
  constructor(canvas) {
    this.updateCanvasPosition(canvas);
  }

  updateCanvasPosition(canvas) {
    const { left, top, width, height } = getCanvasDimensions(canvas);
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
    this.canvas = canvas;
  }
  getNearestCornerPosition(x, y) {
    return getNearestCornerPosition(this.canvas, x, y);
  }
  setCircleProperties(startColor, endColor, numberOfCircles) {
    this.startColor = startColor;
    this.endColor = endColor;
    this.numberOfCircles = numberOfCircles;
    this.averageOffset = getAverageOffset(
      startColor,
      endColor,
      numberOfCircles
    );
  }
  makeConcentricCircles(x, y, r) {
    for (let i = 1; i <= this.numberOfCircles; i++) {
      const color = getHexForIteration(i, this.averageOffset, this.startColor);
      drawCircle(this.canvas, x, y, r * (1 + 0.01 * i), color);
    }
  }
  clearCanvas() {
    if (this.canvas.getContext) {
      const ctx = this.canvas.getContext("2d");
      // I have no idea why this doesn't work if the height is less than 190
      // The width is * 1.05 because on small screens, there can be a small
      // amount left over. This ways it clears no matter what
      this.height < 190
        ? ctx.clearRect(0, 0, this.width * 1.05, 190)
        : ctx.clearRect(0, 0, this.width * 1.05, this.height);
    }
  }
}
