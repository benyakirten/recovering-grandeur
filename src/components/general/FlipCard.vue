<template>
  <div class="card">
    <div class="card__side card__side" :style="frontStyles">
      <span :style="contrastFrontText">
        {{ frontText }}
      </span>
    </div>
    <div class="card__side card__side" :style="backStyles">
      <span :style="contrastBackText">
        {{ backText }}
      </span>
    </div>
  </div>
</template>

<script>
import {
  getContrastingHex,
  getRGBAStringFromHex
} from "@/utils/hexAndDecimals";
export default {
  props: {
    rotated: {
      type: Boolean,
      required: false,
      default: false
    },
    frontColor: {
      type: String,
      required: false,
      default: "#c3c3c3",
      validator: value =>
        /^rgba\([\d]{1,3},\s?[\d]{1,3},\s?[\d]{1,3},\s?(0?\.)?[\d]{1,2}\)$|^#(?:[0-9A-F]{3}|[0-9A-F]{6})$/i.test(
          value
        )
    },
    backColor: {
      type: String,
      required: false,
      default: "#000000",
      validator: value =>
        /^rgba\([\d]{1,3},\s?[\d]{1,3},\s?[\d]{1,3},\s?(0?\.)?[\d]{1,2}\)$|^#(?:[0-9A-F]{3}|[0-9A-F]{6})$/i.test(
          value
        )
    },
    frontText: {
      type: String,
      required: false,
      default: ""
    },
    backText: {
      type: String,
      required: false,
      default: ""
    }
  },
  computed: {
    contrastFrontText() {
      const contrasting = getContrastingHex(this.frontColor);
      return { color: contrasting };
    },
    contrastBackText() {
      const contrasting = getContrastingHex(this.backColor);
      return { color: contrasting };
    },
    frontStyles() {
      const rotate = {
        transform: !this.rotated ? "rotateY(0)" : "rotateY(180deg)"
      };
      return {
        ...rotate,
        backgroundColor: getRGBAStringFromHex(this.frontColor, 0.7)
      };
    },
    backStyles() {
      const rotate = {
        transform: !this.rotated ? "rotateY(-180deg)" : "rotateY(0)"
      };
      return {
        ...rotate,
        backgroundColor: getRGBAStringFromHex(this.backColor, 0.7)
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  perspective: 130rem;
  border-radius: $border-radius-standard;

  height: 30rem;
  width: 20rem;

  @include respond(tab-port) {
    height: 24rem;
    width: 18rem;
  }

  @include respond(phone) {
    height: 18rem;
    width: 12rem;
  }

  &__side {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;

    height: 30rem;
    width: 20rem;

    @include respond(tab-port) {
      height: 24rem;
      width: 18rem;
    }

    @include respond(phone) {
      height: 18rem;
      width: 12rem;
    }

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: $font-size-large;
    border-radius: $border-radius-standard;
    box-shadow: $shadow-normal;

    transition: all 0.8s ease;

    overflow: hidden;
    backface-visibility: hidden;
  }
}
</style>
