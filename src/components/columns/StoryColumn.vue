<template>
  <div class="container">
    <h2 class="heading">
      <slot name="heading"></slot>
    </h2>
    <p class="text">
      <slot name="first-paragraph"></slot>
    </p>
    <p class="text">
      <slot name="second-paragraph"></slot>
    </p>
    <blockquote class="blockquote" v-if="blockquote">
      <slot name="blockquote"></slot>
    </blockquote>
    <p class="text">
      <slot name="third-paragraph"></slot>
    </p>
    <p class="text">
      <slot name="fourth-paragraph"></slot>
    </p>
    <p class="text">
      <slot name="fifth-paragraph"></slot>
    </p>
    <p class="text" v-if="extraPara">
      <slot name="sixth-paragraph"></slot>
    </p>
    <p class="disclaimer" v-if="disclaimer">
      For legal reasons, the story is a complete fabrication. Recovering
      Grandeur<sup class="small-text">&copy;</sup>
      is not responsible for any meaning derived from this story.
    </p>
  </div>
</template>

<script>
export default {
  props: {
    disclaimer: {
      type: Boolean,
      required: false,
      default: () => true
    },
    blockquote: {
      type: Boolean,
      required: false,
      default: () => true
    },
    extraPara: {
      type: Boolean,
      required: false,
      default: () => false
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;

  margin: 2rem auto;
  width: 80%;
  height: 80%;
}

.heading {
  font-size: $font-size-xl;
  font-family: $font-family-serif;

  text-align: center;

  letter-spacing: 4px;
  margin: 2rem 0;
}

.text {
  font-size: $font-size-medium;
  margin: 1rem 0;
}

.blockquote {
  width: 60%;
  margin: 1rem auto;

  text-align: center;
  font-size: $font-size-large;
}

.disclaimer {
  font-size: $font-size-small;
}
</style>
