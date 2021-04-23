<template>
  <div :style="backgroundImage" class="background">
    <slot></slot>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { checkBreakpointActive } from "@/utils/other";
import { constructFilterString } from "@/utils/cssFilters";
export default {
  props: {
    image: {
      type: String,
      required: false,
      default: () => "Tech"
    },
    clipPath: {
      type: String,
      required: false,
      default: () => "default"
    },
    height: {
      type: String,
      required: false,
      default: () => "100vh"
    }
  },
  data() {
    return {
      EVENT_NOT_CHANCE: 25
    };
  },
  computed: {
    ...mapGetters("breakpoint", ["breakpoint", "minimum"]),
    ...mapGetters("settings", ["breakpointEnabled"]),
    breakpointActive() {
      return checkBreakpointActive(
        this.breakpointEnabled,
        this.breakpoint,
        this.minimum,
        this.EVENT_NOT_CHANCE
      );
    },
    backgroundImage() {
      return {
        backgroundImage: `url(${require(`@/assets/${this.image}.svg`)})`,
        backgroundSize: "cover",
        clipPath: this.computedClipPath,
        height: this.height,
        filter: this.breakpointActive
          ? constructFilterString(Math.floor(Math.random() * 3) + 1)
          : ""
      };
    },
    computedClipPath() {
      switch (this.clipPath.toLowerCase()) {
        case "default":
          return "polygon(0% 0%, 100% 0%, 100% 100%, 50% 90%, 0% 100%)";
        case "none":
          return "";
        default:
          return this.clipPath;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.background {
  position: relative;
}
</style>
