<template>
  <div class="container">
    <div
      :style="{ color }"
      class="container__heading container__heading--primary"
    >
      <h1 class="text">
        <slot name="primary"></slot>
      </h1>
    </div>
    <div
      :style="{ color }"
      class="container__heading container__heading--secondary"
    >
      <h2 class="text">
        <slot name="secondary"></slot>
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      required: false,
      default: () => "#ffffff"
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  @include absolute-position(50%, 75%);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 20rem;
  min-width: 70rem;

  padding: 0 1rem;
  border-radius: 5%;

  text-align: center;

  &__heading {
    background-color: rgba($color-gray-dark-2, 0.2);
    font-family: $font-family-serif;

    &--primary {
      padding: 1rem;

      font-size: $font-size-xl;
      letter-spacing: 4px;

      opacity: 0;
      animation: load-in 2s forwards 2s;
    }

    &--secondary {
      margin-top: -1rem;
      max-width: 65rem;

      font-size: $font-size-large;
      letter-spacing: 2px;

      opacity: 0;
      animation: load-in 2s forwards 2s;
    }
  }
}
</style>
