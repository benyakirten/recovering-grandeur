<template>
  <figure class="figure" :style="figureStyle">
    <img :src="imgSrc" :style="imgStyle" :alt="alt" class="figure__img" />
    <figcaption class="figure__caption" aria-hidden="true">
      <slot></slot>
    </figcaption>
  </figure>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: false,
      default: () => "Tech"
    },
    alt: {
      type: String,
      required: false,
      default: () => "I'm sure it's related"
    },
    height: {
      type: String,
      required: false,
      default: () => "15rem"
    },
    width: {
      type: String,
      required: false,
      default: () => "15rem"
    },
    tabHeight: {
      type: String,
      required: false,
      default: () => ""
    },
    tabWidth: {
      type: String,
      required: false,
      default: () => ""
    },
    shape: {
      type: String,
      required: false,
      default: () => "square"
    },
    float: {
      type: String,
      required: false,
      default: () => "left"
    }
  },
  computed: {
    imgSrc() {
      // If the link has an extension in it, we use that;
      // otherwise we default to a SVG
      const _imgPath = this.image.match(/\.\w+$/)
        ? this.image
        : this.image + ".svg";
      return require(`@/assets/${_imgPath}`);
    },
    imgShape() {
      switch (this.shape) {
        case "square":
          return {
            borderRadius: "5%"
          };
        case "circle":
          return {
            clipPath: "circle(50% at 50% 50%)",
            shapeOutside: "circle(50% at 50% 50%)"
          };
        case "simple-circle":
          return {
            borderRadius: "50%"
          };
        default:
          return this.shape;
      }
    },
    figureStyle() {
      const { width, height, tabWidth, tabHeight, float } = this;
      let marginDirection =
        float === "left"
          ? (marginDirection = { marginRight: "2rem" })
          : { marginLeft: "2rem" };
      if (
        window.matchMedia("only screen and (max-width: 56.25em)").matches &&
        (tabWidth || tabHeight)
      ) {
        return {
          width: tabWidth,
          height: tabHeight,
          float,
          ...marginDirection,
          ...this.imgShape
        };
      }
      return { width, height, float, ...marginDirection, ...this.imgShape };
    },
    imgStyle() {
      const { width, height, tabWidth, tabHeight } = this;
      if (
        window.matchMedia("only screen and (max-width: 75em)").matches &&
        (tabWidth || tabHeight)
      ) {
        return {
          width: tabWidth,
          height: tabHeight,
          ...this.imgShape
        };
      }
      return { width, height, ...this.imgShape };
    }
  }
};
</script>

<style lang="scss" scoped>
.figure {
  position: relative;
  overflow: hidden;

  &__img {
    height: 100%;
    backface-visibility: hidden;
    transition: all 0.5s;
  }
  &__caption {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 20%);

    text-transform: uppercase;
    color: $color-white;
    font-size: $font-size-small;
    text-align: center;

    opacity: 0;
    transition: all 0.5s;

    backface-visibility: hidden;
  }

  &:hover &__caption {
    opacity: 1;
    transform: translate(-50%, -50%);
  }

  &:hover &__img {
    filter: blur(0.3rem) brightness(80%) contrast(70%);
  }
}
</style>
