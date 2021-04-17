<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.container {
  height: 100%;
  border-radius: $border-radius-standard;
  box-shadow: $shadow-normal;
}
</style>
