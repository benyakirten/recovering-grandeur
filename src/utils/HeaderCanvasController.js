// To reduce the need for repeated calls to the DOM
// and reduce the load on the browser
// all data can be stored in a class that contains all
// functions we need for the header canvas

import {
  getCanvasDimensions,
  getAbsoluteCorners,
  getRelativeCorners
} from "@/utils/canvasFunctions";

import { getAverageOffset, getHexForIteration } from "@/utils/hexAndDecimals";

export default class HeaderCanvasController {
  startColor;
  endColor;
  numberOfCircles;
  averageOffset;

  constructor(canvas) {
    const { left, top, width, height } = getCanvasDimensions(canvas);
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;

    this.absoluteCorners = getAbsoluteCorners(canvas);
    this.relativeCorners = getRelativeCorners(canvas);

    this.canvas = canvas;
  }
  getNearestCornerPosition(x, y) {
    const dist = this.absoluteCorners
      .map(p => Math.sqrt((p.x - x) ** 2 + (p.y - y) ** 2))
      .reduce(
        (acc, next, idx) => (next < acc.dist ? { dist: next, idx } : acc),
        { dist: 10000, idx: 0 }
      );
    const corrected = this.relativeCorners[dist.idx];
    return { x: corrected.x, y: corrected.y };
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
      this.drawCircle(x, y, r * (1 + 0.01 * i), color);
    }
  }
  drawCircle(x, y, r, color = "#000000") {
    if (this.canvas.getContext) {
      const ctx = this.canvas.getContext("2d");
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.strokeStyle = color;
      ctx.stroke();
    }
  }
  clearCanvas() {
    if (this.canvas.getContext) {
      const ctx = this.canvas.getContext("2d");
      ctx.clearRect(0, 0, this.width, this.height);
    }
  }
}
