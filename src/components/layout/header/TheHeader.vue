<template>
  <header
    :class="headerClass"
    :style="headerBackground"
    id="header"
    @mouseenter="beginWave"
  >
    <header-canvas></header-canvas>
    <transition-group name="link-fall" @afterEnter="afterEnter">
      <header-link
        v-for="link in liveLinks"
        :key="link.link"
        :linkRoute="link.link"
        :linkName="link.name"
        :linkStyle="breakpointActive ? 'alternate' : ''"
      ></header-link>
    </transition-group>
  </header>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import { checkBreakpointActive } from "@/utils/other";
import HeaderCanvasController from "@/utils/HeaderCanvasController";
import { separateRGB, getRGBAStringFromHex } from "@/utils/hexAndDecimals";

import HeaderLink from "./HeaderLink";
import HeaderCanvas from "./HeaderCanvas";
export default {
  components: { HeaderLink, HeaderCanvas },
  data() {
    return {
      HeaderCanvasController: null,
      EVENT_NOT_CHANCE: 25
    };
  },
  computed: {
    ...mapGetters("breakpoint", ["breakpoint", "minimum", "makeHeaderWave"]),
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
      "breakpointEnabled",
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
    },
    breakpointActive() {
      return checkBreakpointActive(
        this.breakpointEnabled,
        this.breakpoint,
        this.minimum,
        this.EVENT_NOT_CHANCE
      );
    },
    headerClass() {
      return this.breakpointActive ? `header-alternate` : "header";
    }
  },
  watch: {
    makeHeaderWave(val) {
      if (val) {
        this.beginWave({ clientX: 0, clientY: 0 });
        this.stopHeaderWave();
      }
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
    ...mapActions("breakpoint", ["stopHeaderWave"]),
    ...mapActions("headerCanvas", ["setRandomStartAndEndColors"]),
    afterEnter(el) {
      // Prevent the hover animation until the link is in place
      if (!this.breakpointActive) {
        el.classList.add("link-animation");
      }
    },
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
.header {
  position: absolute;
  top: 5rem;
  right: 12rem;

  z-index: 1;
  border: 1px solid $color-black;

  display: flex;
  flex-direction: column;

  padding: 1rem;
  padding-right: 5rem;
  transform: skewX(-25deg);
}

.header-alternate {
  position: absolute;
  top: 5rem;
  left: 50%;
  transform: translateX(-50%) skewX(-25deg);

  min-width: 80%;
  height: 5rem;
  z-index: 1;

  display: flex;
  padding: 2rem 3rem;
  @include respond(tab-port) {
    padding: 1rem 1.5rem;
  }
  justify-content: space-between;
  align-items: center;
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
