<template>
  <div class="container" :style="skewParent">
    <div class="container__contents" :style="skewChild">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { checkBreakpointActive } from "@/utils/other";
export default {
  props: {
    skew: {
      type: Number,
      required: false,
      default: 25
    }
  },
  data() {
    return {
      EVENT_NOT_CHANCE: 25
    };
  },
  computed: {
    ...mapState("breakpoint", ["breakpoint", "minimum"]),
    ...mapState("settings", ["breakpointEnabled"]),
    breakpointActive() {
      return checkBreakpointActive(
        this.breakpointEnabled,
        this.breakpoint,
        this.minimum,
        this.EVENT_NOT_CHANCE
      );
    },
    randomSkew() {
      return Math.floor((this.skew + 10) * Math.random());
    },
    skewParent() {
      return {
        transform: this.breakpointActive
          ? `skewX(${-this.skew}deg)`
          : `skewX(${this.randomSkew}deg)`
      };
    },
    skewChild() {
      return {
        transform: this.breakpointActive
          ? `skewX(${this.skew}deg)`
          : `skewX(${-1 * this.randomSkew}deg)`
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  box-shadow: $shadow-normal;

  &__contents {
    position: relative;
    display: flex;
  }
}
</style>
