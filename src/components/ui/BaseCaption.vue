<template>
  <div class="container">
    <div class="caption-container">
      <h2 class="caption-container__caption">
        <slot name="caption"></slot>
      </h2>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<style lang="scss">
.caption-container {
  width: 80%;
  margin: -8rem auto 4rem;

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

    &:hover {
      animation: skew-up-and-down 1s infinite ease;
    }
  }
}
</style>
