<template>
  <canvas class="header-canvas"></canvas>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { separateRGB } from "@/utils/hexAndDecimals";
import HeaderCanvasController from "@/utils/HeaderCanvasController";
export default {
  data() {
    return {
      HeaderCanvasController: null
    };
  },
  watch: {
    makeHeaderWave(val) {
      if (val) {
        this.beginWave({
          clientX: val.clientX || 0,
          clientY: val.clientY || 0
        });
        this.stopHeaderWave();
      }
    }
  },
  mounted() {
    // If we run this function right on mount, then the canvas won't be
    // properly mounted so the dimensions will be slightly off for the controller
    setTimeout(() => {
      this.HeaderCanvasController = new HeaderCanvasController(this.canvas);
    }, 10);
  },
  computed: {
    ...mapState("breakpoint", ["makeHeaderWave"]),
    ...mapState("headerCanvas", [
      "numberOfCircles",
      "startColor",
      "endColor",
      "startRadius",
      "radiusDelta"
    ]),
    ...mapState("settings", [
      "headerCanvasEnabled",
      "headerCanvasRandomizeColorsEnabled"
    ]),
    canvas() {
      return document.querySelector(".header-canvas");
    },
    startColorRGB() {
      return separateRGB(this.startColor);
    },
    endColorRGB() {
      return separateRGB(this.endColor);
    }
  },
  methods: {
    ...mapActions("breakpoint", ["stopHeaderWave"]),
    ...mapActions("headerCanvas", ["setRandomStartAndEndColors"]),
    beginWave({ clientX, clientY }) {
      if (!this.headerCanvasEnabled || !this.HeaderCanvasController) {
        return;
      }
      if (this.headerCanvasRandomizeColorsEnabled) {
        this.setRandomStartAndEndColors();
      }
      this.HeaderCanvasController.updateCanvasPosition(this.canvas);
      const { x, y } = this.HeaderCanvasController.getNearestCornerPosition(
        clientX,
        clientY
      );
      this.HeaderCanvasController.setCircleProperties(
        this.startColorRGB,
        this.endColorRGB,
        this.numberOfCircles
      );
      requestAnimationFrame(() => this.canvasWave(x, y, this.startRadius));
    },
    canvasWave(x, y, r) {
      if (r < 400) {
        this.HeaderCanvasController.clearCanvas();
        this.HeaderCanvasController.makeConcentricCircles(x, y, r);
        requestAnimationFrame(() =>
          this.canvasWave(x, y, r * this.radiusDelta)
        );
      } else {
        this.HeaderCanvasController.clearCanvas();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.header-canvas {
  position: absolute;
  top: 0;
  left: 0;

  height: 100%;
  width: 100%;
  border-radius: inherit;
  z-index: -1;
}
</style>
