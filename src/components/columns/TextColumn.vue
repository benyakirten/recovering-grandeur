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
  @include respond(tab-land) {
    width: 100%;
    padding: 0 2rem;
  }
  height: 100%;
  margin: 0 auto;

  &__leading {
    font-size: $font-size-xl;
    font-family: $font-family-serif;
    margin-bottom: 2rem;

    @include respond(tab-port) {
      margin-bottom: 0;
    }
  }
  &__main {
    font-size: $font-size-medium;
    @include respond(tab-port) {
      font-size: $font-size-large;
      letter-spacing: 2px;
    }
    @include respond(phone) {
      font-size: increase($font-size-large, 0.2);
    }
  }
}
</style>
