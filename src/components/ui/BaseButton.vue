<template>
  <button class="button" @click="getButtonAction">
    <slot>
      Call To Action!
    </slot>
  </button>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("links", ["getButtonAction"])
  }
};
</script>

<style lang="scss" scoped>
.button {
  position: relative;
  display: inline-block;

  margin: 0 auto;
  padding: 1rem 0.5rem;
  width: 65%;

  color: $color-alt-primary-light;
  @include respond(no-hover) {
    color: $color-gray-light-1;
  }
  border-radius: $border-radius-standard;
  background: linear-gradient(
    to bottom right,
    $color-hero-1,
    darken($color-hero-2, 15%)
  );

  border: none;
  cursor: pointer;

  font-size: $font-size-medium;
  font-family: $font-family-serif;
  letter-spacing: 1px;

  opacity: 0.8;
  transition: $transition-normal;

  &:hover {
    transform: translateY(-3px);
    box-shadow: $shadow-small;
    opacity: 1;
    color: $color-alt-tertiary-light;
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: $shadow-small;
    opacity: 1;
    color: $color-alt-secondary-light;
  }
}
</style>
