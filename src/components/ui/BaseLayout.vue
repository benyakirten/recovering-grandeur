<template>
  <div class="container">
    <section class="section" :style="columnHeight(topHeight)">
      <slot name="top"></slot>
    </section>
    <section class="section" :style="columnHeight(centerHeight)">
      <slot name="center"></slot>
    </section>
    <section class="section" :style="columnHeight(bottomHeight)">
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
  },
  methods: {
    columnHeight(itemHeight) {
      return {
        minHeight: window.matchMedia("only screen and (max-width: 37.5em)")
          .matches
          ? "50rem"
          : itemHeight
      };
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

  @include respond(phone) {
    margin: 0 0.5rem;
  }

  margin-bottom: 4rem;

  &:first-child {
    margin-top: 0;
    padding-top: 2rem;

    @include respond(tab-port) {
      padding-top: 1rem;
    }

    @include respond(phone) {
      padding-top: 0;
    }
  }

  &:last-child {
    margin-bottom: 0;
    padding-bottom: 2rem;
  }
}
</style>
