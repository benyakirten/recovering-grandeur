<template>
  <figure class="figure">
    <img class="figure__img" :style="imgStyle" />
    <figcaption class="figure__caption">
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
    imgAnim: {
      type: String,
      required: false,
      default: () => null
    },
    imgClipPath: {
      type: String,
      required: false,
      default: () => null
    }
  },
  computed: {
    imgStyle() {
      let imgStyles = {
        backgroundImage: `url(${require(`@/assets/${this.image}.svg`)})`,
        backgroundSize: "cover"
      };
      if (this.imgAnim) {
        imgStyles = {
          ...imgStyles,
          animation: this.imgAnim,
          clipPath: this.imgClipPath,
          height: "55%",
          marginTop: "10rem",
          marginBottom: "2rem"
        };
      } else {
        imgStyles = {
          ...imgStyles,
          borderRadius: "2rem"
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
