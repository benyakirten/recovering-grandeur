<template>
  <div class="container" :style="skewParent">
    <div class="container__contents" :style="skewChild">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    skew: {
      type: Number,
      required: false,
      default: () => 25
    }
  },
  computed: {
    skewParent() {
      return {
        transform: `skewX(${this.skew}deg)`
      };
    },
    skewChild() {
      return {
        transform: `skewX(${-this.skew}deg)`
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  box-shadow: $shadow-normal;

  &__contents {
    position: relative;
    display: flex;
  }
}
</style>
