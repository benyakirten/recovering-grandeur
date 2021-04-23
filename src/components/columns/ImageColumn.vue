<template>
  <figure class="figure">
    <img class="figure__img" :style="imgStyle" />
    <figcaption class="figure__caption">
      <slot></slot>
    </figcaption>
  </figure>
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
    imgAnim: {
      type: String,
      required: false,
      default: () => null
    },
    imgClipPath: {
      type: String,
      required: false,
      default: () => null
    },
    imgRotate: {
      type: Number,
      required: false,
      default: () => null
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
    imgStyle() {
      const _imgPath = this.image.match(/\.\w+$/)
        ? this.image
        : this.image + ".svg";
      let imgStyles = {
        backgroundImage: `url(${require(`@/assets/${_imgPath}`)})`,
        backgroundSize: "cover"
      };
      if (this.imgAnim) {
        imgStyles = {
          ...imgStyles,
          animation: this.imgAnim,
          clipPath: this.imgClipPath
        };
        if (!window.matchMedia("only screen and (max-width: 37.5em)").matches) {
          imgStyles = {
            ...imgStyles,
            height: "55%",
            marginTop: "10rem",
            marginBottom: "2rem"
          };
        } else {
          imgStyles = {
            ...imgStyles,
            height: "10rem",
            width: "8rem",
            marginTop: "-2rem",
            marginBottom: "0"
          };
        }
      } else {
        imgStyles = {
          ...imgStyles,
          borderRadius: this.breakpointActive
            ? `${Math.random() * this.breakpoint}%`
            : "2rem"
        };
      }
      if (this.imgRotate) {
        imgStyles = {
          ...imgStyles,
          transform: this.breakpointActive
            ? `rotate(${-this.imgRotate}deg)`
            : `rotate(${this.imgRotate}deg)`
        };
      }
      if (this.breakpointActive) {
        imgStyles = {
          ...imgStyles,
          filter: constructFilterString(Math.floor(Math.random() * 3) + 1)
        };
      }
      return imgStyles;
    }
  }
};
</script>

<style lang="scss" scoped>
.figure {
  position: relative;

  height: 100%;
  width: 100%;

  &__img {
    margin-top: 6rem;

    width: 60%;
    height: 70%;

    @include respond(phone) {
      height: 20rem;
      width: 16rem;
    }
  }

  &__caption {
    margin: 3rem 8rem;
    padding: 1rem 2rem;

    font-size: $font-size-large;
    box-shadow: $shadow-small;

    border: 1px solid $color-primary;
    border-radius: $border-radius-standard;
  }
}
</style>
