<template>
  <span class="click-animation" :style="clickAnimationStyles" />
</template>

<script>
import { mapState, mapActions } from "vuex";
import { animationShapeEnum } from "@/utils/enums";
export default {
  props: {
    pageX: {
      type: Number,
      required: true
    },
    pageY: {
      type: Number,
      required: true
    },
    breakpointActive: {
      type: Boolean,
      required: true
    },
    animationLength: {
      type: Number,
      required: true
    }
  },
  computed: {
    ...mapState("clickAnimation", [
      "clickAnimationColor",
      "clickAnimationRadius"
    ]),
    clickAnimationStyles() {
      let styles = {
        left: `${this.pageX}px`,
        top: `${this.pageY}px`,
        width: `${this.clickAnimationRadius}rem`,
        height: `${this.clickAnimationRadius}rem`,
        backgroundColor: this.clickAnimationColor,
        animation: `click-flash-out-anim ${this.animationLength}ms forwards`
      };
      if (this.breakpointActive) {
        styles = {
          ...styles,
          clipPath: this.getAnimationClipPath(this.getAnimationShape())
        };
      } else {
        styles = {
          ...styles,
          borderRadius: "50%"
        };
      }
      return styles;
    }
  },
  methods: {
    ...mapActions("breakpoint", ["ghostActs"]),
    getAnimationShape() {
      return Math.floor(Math.random() * Object.keys(animationShapeEnum).length);
    },
    getAnimationClipPath(shape) {
      switch (shape) {
        case animationShapeEnum.square:
          return "polygon(25% 25%, 75% 25%, 75% 75%, 25% 75%)";
        case animationShapeEnum.star:
          return "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)";
        case animationShapeEnum.x:
          return "polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%)";
        case animationShapeEnum.rhombus:
          return "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)";
        case animationShapeEnum.frame:
          return "polygon(0% 0%, 0% 100%, 25% 100%, 25% 25%, 75% 25%, 75% 75%, 25% 75%, 25% 100%, 100% 100%, 100% 0%)";
        case animationShapeEnum.arrow:
          return "polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%)";
        case animationShapeEnum.trapezoid:
          return "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)";
        case animationShapeEnum.circle:
        default:
          return "circle(50% at 50% 50%)";
      }
    }
  },
  mounted() {
    if (this.breakpointActive) {
      this.ghostActs();
    }
  }
};
</script>

<style lang="scss" scoped>
.click-animation {
  position: absolute;
  z-index: 100;

  transform: translate(-50%, -50%) scale(0.2);
}
</style>
