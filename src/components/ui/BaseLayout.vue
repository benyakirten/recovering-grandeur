<template>
  <div class="container">
    <section class="section" :style="{ height: topHeight }">
      <slot name="top"></slot>
    </section>
    <section class="section" :style="{ height: centerHeight }">
      <slot name="center"></slot>
    </section>
    <section class="section" :style="{ height: bottomHeight }">
      <slot name="bottom"></slot>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    topHeight: {
      type: String,
      required: false,
      default: () => "90rem"
    },
    centerHeight: {
      type: String,
      required: false,
      default: () => "90rem"
    },
    bottomHeight: {
      type: String,
      required: false,
      default: () => "80rem"
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  background-color: $color-gray-light-1;
}
.section {
  margin: 2rem;
  margin-bottom: 4rem;

  &:first-child {
    margin-top: 0;
    padding-top: 2rem;
  }

  &:last-child {
    margin-bottom: 0;
    padding-bottom: 2rem;
  }
}
</style>
