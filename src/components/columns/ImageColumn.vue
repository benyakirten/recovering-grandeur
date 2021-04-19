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
    },
    imgRotate: {
      type: Number,
      required: false,
      default: () => null
    }
  },
  computed: {
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
          borderRadius: "2rem"
        };
      }
      if (this.imgRotate) {
        imgStyles = {
          ...imgStyles,
          transform: `rotate(${this.imgRotate}deg)`
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
