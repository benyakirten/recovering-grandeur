<template>
  <div :class="columnsClass">
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
    }
  },
  computed: {
    columnsClass() {
      let allClasses = "columns";
      if (this.additionalClass) {
        allClasses += ` ${this.additionalClass}`;
      }
      return allClasses;
    }
  }
};
</script>

<style lang="scss" scoped>
.columns {
  display: flex;

  height: 75rem;

  border-radius: $border-radius-standard;
  box-shadow: $shadow-small;
}
.column {
  width: 50%;
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

  .column {
    &--right {
      box-shadow: $shadow-normal;
    }
  }
}
</style>
