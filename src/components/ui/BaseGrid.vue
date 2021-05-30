<template>
  <div class="grid">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.grid {
  position: relative;
  padding: 8rem 4rem;

  display: grid;
  grid-template-columns: repeat(auto-fill, 20rem);
  grid-gap: 4rem;

  justify-items: center;

  border-radius: $border-radius-standard;
  box-shadow: $shadow-normal;

  @include respond(tab-land) {
    padding: 6rem 2rem;
  }

  @include respond(phone) {
    grid-gap: 1rem;
    padding: 4rem 1rem;

    grid-template-columns: repeat(auto-fill, 16rem);
  }
}
</style>
