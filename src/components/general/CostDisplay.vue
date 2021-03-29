<template>
  <div class="container">
    <h2 class="price">
      <slot></slot>
    </h2>
  </div>
</template>

<style lang="scss" scoped>
.container {
  margin: 0;
  padding: 0;

  background-color: $color-gray-dark-1;

  display: flex;
  align-items: center;
  justify-content: center;
}
.price {
  padding: 1rem 2rem;
  text-align: center;
  font-family: $font-family-serif;
  font-size: $font-size-large;
  color: $color-gray-light-1;
}
</style>
