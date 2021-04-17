<template>
  <header class="header" :style="headerBackground" @mouseenter="beginWave">
    <header-canvas v-if="headerCanvasEnabled"></header-canvas>
    <transition-group name="link-fall" tag="span" @afterEnter="afterEnter">
      <header-link
        v-for="link in liveLinks"
        :key="link.link"
        :linkRoute="link.link"
        :linkName="link.name"
      ></header-link>
    </transition-group>
  </header>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import HeaderCanvasController from "@/utils/HeaderCanvasController";
import { separateRGB, getRGBAStringFromHex } from "@/utils/hexAndDecimals";

import HeaderLink from "./HeaderLink";
import HeaderCanvas from "./HeaderCanvas";
export default {
  components: { HeaderLink, HeaderCanvas },
  data() {
    return {
      HeaderCanvasController: null
    };
  },
  computed: {
    ...mapGetters("links", ["liveLinks"]),
    ...mapGetters("headerCanvas", [
      "numberOfCircles",
      "startColor",
      "endColor",
      "startRadius",
      "radiusDelta"
    ]),
    ...mapGetters("colorScheme", [
      "getHeaderBackgroundColor",
      "getHeaderOpacity"
    ]),
    ...mapGetters("settings", [
      "headerCanvasEnabled",
      "headerCanvasRandomizeColorsEnabled"
    ]),
    headerBackground() {
      const rgbaString = getRGBAStringFromHex(
        this.getHeaderBackgroundColor,
        this.getHeaderOpacity
      );
      return {
        background: rgbaString
      };
    },
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
  mounted() {
    // If we run this function right on mount, then the canvas won't be
    // properly mounted so the dimensions will be slightly off for the controller
    setTimeout(
      () =>
        (this.HeaderCanvasController = new HeaderCanvasController(this.canvas)),
      10
    );
  },
  methods: {
    ...mapActions("headerCanvas", ["setRandomStartAndEndColors"]),
    afterEnter(el) {
      el.classList.add("link-animation");
    },
    beginWave(e) {
      if (!this.headerCanvasEnabled) {
        return;
      }
      if (this.headerCanvasRandomizeColorsEnabled) {
        this.setRandomStartAndEndColors();
      }
      const { x, y } = this.HeaderCanvasController.getNearestCornerPosition(
        e.clientX,
        e.clientY
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
.header {
  position: absolute;
  top: 5rem;
  right: 10rem;
  z-index: 1;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;

  padding: 1rem;
  padding-right: 5rem;
  transform: skewX(-25deg);
}

.link-animation {
  &:hover {
    animation: float-out 1s forwards linear;
  }
}

// HEADER-LINK TRANSITIONS
.link-fall-leave-from,
.link-fall-enter-to {
  transform: translateY(0) skewX(25deg) scale(1);
}
.link-fall-leave-active,
.link-fall-enter-active {
  transition: all 3s;
}

.link-fall-leave-to {
  transform: translate(-20rem, 100rem) skewX(25deg) scale(0.5);
}
.link-fall-enter-from {
  transform: translate(-20rem, -20rem) skewX(25deg) scale(0.5);
}
</style>
