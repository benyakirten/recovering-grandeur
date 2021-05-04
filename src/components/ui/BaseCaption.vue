<template>
  <div class="container">
    <div class="caption-container">
      <h2 class="caption-container__caption" :class="captionAnimation">
        <slot name="caption"></slot>
      </h2>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { checkBreakpointActive } from "@/utils/other";
export default {
  data() {
    return {
      EVENT_NOT_CHANCE: 40
    };
  },
  computed: {
    ...mapState("breakpoint", ["breakpoint", "minimum"]),
    ...mapState("settings", ["breakpointEnabled"]),
    breakpointActive() {
      return checkBreakpointActive(
        this.breakpointEnabled,
        this.breakpoint,
        this.minimum,
        this.EVENT_NOT_CHANCE
      );
    },
    captionAnimation() {
      return this.breakpointActive
        ? "alternate-animation"
        : "default-animation";
    }
  }
};
</script>

<style lang="scss">
.caption-container {
  width: 80%;
  margin: -8rem auto 4rem;

  @include respond(tab-land) {
    margin: 4rem auto;
    padding: 0 0.5rem;
  }

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: $border-radius-standard;
  box-shadow: $shadow-normal;

  background-image: linear-gradient(
    to right,
    $color-white,
    $color-gray-light-1 20%,
    lighten($color-gray-light-2, 15%) 50%,
    lighten($color-gray-light-1, 15%) 80%,
    $color-white
  );

  @include respond(phone) {
    background-image: none;
  }

  &__caption {
    text-align: center;
    font-size: $font-size-xl;

    letter-spacing: 3px;
    font-family: $font-family-serif;

    padding: 1rem 0;

    color: transparent;
    background-clip: text;
    background-image: linear-gradient(
      to right,
      $color-primary-dark,
      $color-primary 20%,
      darken($color-primary, 15%) 50%,
      $color-primary 80%,
      $color-primary-dark
    );
  }
}

.default-animation {
  &:hover {
    animation: skew-up-and-down 1s infinite ease;
  }
}

.alternate-animation {
  &:hover {
    animation: breathe 0.5s infinite linear;
  }
}
</style>
