<template>
  <div class="container">
    <h2 class="text title">
      <slot name="title"></slot>
    </h2>
    <h4 class="text subtitle">
      <slot name="subtitle"></slot>
    </h4>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1rem 0;
}
.text {
  text-align: center;
  min-height: 8rem;
}
.title {
  padding: 1rem 0.5rem;

  text-transform: uppercase;
  font-size: $font-size-large;
  font-family: $font-family-serif;
  letter-spacing: 4px;
}
.subtitle {
  padding: 1rem 2rem;

  font-size: $font-size-medium;
  font-family: $font-family-sans;
  letter-spacing: 2px;
}
</style>
