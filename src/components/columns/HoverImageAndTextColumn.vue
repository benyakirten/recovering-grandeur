<template>
  <div class="container">
    <hover-image v-bind="hoverProps" @click="emitClick">
      <slot name="caption"></slot>
    </hover-image>
    <div class="content">
      <h2 class="content__heading">
        <slot name="heading-1"></slot>
      </h2>
      <p class="content__para">
        <slot name="para-1"></slot>
      </p>
      <h2 class="content__heading">
        <slot name="heading-2"></slot>
      </h2>
      <p class="content__para">
        <slot name="para-2"></slot>
      </p>
      <h2 class="content__heading">
        <slot name="heading-3"></slot>
      </h2>
      <p class="content__para">
        <slot name="para-3"></slot>
      </p>
      <h2 class="content__heading">
        <slot name="heading-4"></slot>
      </h2>
      <p class="content__para">
        <slot name="para-4"></slot>
      </p>
      <h2 class="content__heading">
        <slot name="heading-5"></slot>
      </h2>
      <p class="content__para">
        <slot name="para-5"></slot>
      </p>
    </div>
  </div>
</template>

<script>
import HoverImage from "@/components/general/HoverImage";
export default {
  emits: ["click"],
  props: {
    image: {
      type: String,
      required: false,
      default: "Tech"
    },
    alt: {
      type: String,
      required: false,
      default: "I'm sure it's related"
    },
    height: {
      type: String,
      required: false,
      default: "15rem",
      validator: value =>
        /(^auto$|^initial$|^inherit$|^0$)|(^((0\.)?\d+|\d+\.\d+)(rem|em|ex|ch|%|vw|vh|vmin|vmax|cm|mm|in|px|pt|pt|pc))$/.test(
          value
        )
    },
    width: {
      type: String,
      required: false,
      default: "15rem",
      validator: value =>
        /(^auto$|^initial$|^inherit$|^0$)|(^((0\.)?\d+|\d+\.\d+)(rem|em|ex|ch|%|vw|vh|vmin|vmax|cm|mm|in|px|pt|pt|pc))$/.test(
          value
        )
    },
    shape: {
      type: String,
      required: false,
      default: "square"
    },
    float: {
      type: String,
      required: false,
      default: "left",
      validator: value => /left|right/.test(value)
    },
    cursor: {
      type: String,
      required: false,
      default: "default"
    }
  },
  components: {
    HoverImage
  },
  data() {
    const { image, alt, height, width, shape, float, cursor } = this;
    return {
      hoverProps: { image, alt, height, width, shape, float, cursor }
    };
  },
  methods: {
    emitClick() {
      this.$emit("click");
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  padding: 2rem 4rem;
  @include respond(tab-land) {
    padding: 2rem;
  }
}
.content {
  &__heading {
    font-size: $font-size-large;
    @include respond(tab-port) {
      font-size: reduce($font-size-large, 0.4);
    }
    font-family: $font-family-sans;
    text-align: left;
    padding: 2rem 0 0.5rem;
    letter-spacing: 3px;
    font-weight: lighter;
  }
  &__para {
    text-align: left;
    font-size: $font-size-medium;

    @include respond(tab-port) {
      font-size: reduce($font-size-medium, 0.2);
    }

    letter-spacing: 1px;
    &:not(:last-child) {
      margin-bottom: 2rem;
    }
  }
}
</style>
