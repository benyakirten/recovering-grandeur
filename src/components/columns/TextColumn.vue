<template>
  <div class="container" :style="containerStyles">
    <h2 class="container__leading">
      <slot name="leading"></slot>
    </h2>
    <p class="container__main">
      <slot name="main"></slot>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    marginTop: {
      type: String,
      required: false,
      default: () => "4rem"
    },
    marginBottom: {
      type: String,
      required: false,
      default: () => "4rem"
    }
  },
  computed: {
    containerStyles() {
      return {
        margin: `${this.marginTop} auto ${this.marginBottom}`
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;

  width: 70%;
  height: 100%;
  margin: 0 auto;

  text-align: left;

  &__leading {
    font-size: $font-size-xl;
    font-family: $font-family-serif;
    margin-bottom: 2rem;
  }
  &__main {
    font-size: $font-size-medium;
  }
}
</style>
