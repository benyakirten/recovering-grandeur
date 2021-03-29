<template>
  <div class="container">
    <div class="container__row">
      <slot name="top"></slot>
    </div>
    <div class="container__row">
      <slot name="center"></slot>
    </div>
    <div class="container__row">
      <slot name="bottom"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;

  &__row {
    margin: 4rem 8rem;
    height: 100%;
  }
}
</style>
