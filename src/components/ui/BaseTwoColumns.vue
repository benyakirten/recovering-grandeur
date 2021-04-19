<template>
  <div :class="columnsClass" :style="columnsHeight">
    <div class="column">
      <slot name="left"></slot>
    </div>
    <div class="column column--right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    additionalClass: {
      type: String,
      required: false,
      default: () => ""
    },
    phoneHeight: {
      type: String,
      required: false,
      default: () => "105rem"
    },
    tabHeight: {
      type: String,
      required: false,
      default: () => "85rem"
    }
  },
  computed: {
    columnsClass() {
      let allClasses = "columns";
      if (this.additionalClass) {
        allClasses += ` ${this.additionalClass}`;
      }
      return allClasses;
    },
    columnsHeight() {
      return {
        height: window.matchMedia("only screen and (max-width: 37.5em)").matches
          ? this.phoneHeight
          : window.matchMedia("only screen and (max-width: 56.25em)").matches
          ? this.tabHeight
          : "75rem"
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.columns {
  display: flex;

  @include respond(phone) {
    flex-direction: column;
  }

  border-radius: $border-radius-standard;
  box-shadow: $shadow-small;
}
.column {
  width: 50%;

  @include respond(phone) {
    width: 100%;
  }

  text-align: center;
}

.book {
  background-image: linear-gradient(
    to right,
    $color-white,
    $color-gray-light-1 20%,
    $color-gray-light-2 48%,
    $color-gray-dark-1,
    48%,
    $color-gray-light-2,
    50%,
    $color-gray-light-2,
    55%,
    $color-gray-light-1 80%,
    $color-white
  );

  @include respond(phone) {
    background-image: inherit;
  }

  .column {
    &--right {
      box-shadow: $shadow-normal;

      @include respond(phone) {
        box-shadow: none;
      }
    }
  }
}
</style>
