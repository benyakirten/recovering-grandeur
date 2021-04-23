<template>
  <div class="image-container">
    <img
      :src="imgSrc"
      :alt="imgAlt"
      :style="imgStyle"
      class="image-container__img"
    />
    <span class="image-container__caption">
      <slot name="caption"></slot>
    </span>
  </div>
  <div class="text-container">
    <span class="text-container__text">
      <slot name="text"></slot>
    </span>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { checkBreakpointActive } from "@/utils/other";
export default {
  props: {
    imgName: {
      type: String,
      required: false,
      default: () => "Tech"
    },
    imgAlt: {
      type: String,
      required: false,
      default: () => "Something to do with the picture"
    },
    rotate: {
      type: Number,
      required: false,
      default: () => 0
    },
    animation: {
      type: String,
      required: false,
      default: () => "none"
    }
  },
  data() {
    return {
      EVENT_NOT_CHANCE: 10
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
    imgSrc() {
      return require(`@/assets/${this.imgName}.svg`);
    },
    imgRotate() {
      return this.breakpointActive
        ? `rotate(${-this.rotate}deg)`
        : `rotate(${this.rotate}deg)`;
    },
    imgAnimation() {
      switch (this.animation) {
        case "none":
          return "";
        case "normal":
          return "bloat-and-spin 1s infinite linear";
        case "reverse":
          return "bloat-and-spin 1s infinite reverse linear";
        case "alternate":
          return "bloat-and-spin 1s infinite alternate linear";
        case "spin":
          return "spin 1s infinite linear";
        case "spin-back":
          return "spin 1s infinite reverse linear";
        default:
          return this.animation;
      }
    },
    imgStyle() {
      return {
        transform: this.imgRotate,
        animation: this.imgAnimation
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.image-container {
  width: 25%;
  margin: 2rem;
  margin-left: 4rem;

  display: flex;
  flex-direction: column;

  &__img {
    width: 45%;
    margin: 2rem auto;
    border-radius: $border-radius-circle;
  }
  &__caption {
    text-align: center;
    font-size: $font-size-small;
  }
}

.text-container {
  display: flex;
  align-items: center;

  width: 65%;
  margin: 2rem;
  &__text {
    text-align: left;
    font-size: $font-size-medium;
  }
}
</style>
