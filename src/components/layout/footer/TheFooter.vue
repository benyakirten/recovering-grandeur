<template>
  <footer class="footer">
    <p class="legal">
      Recovering Grandeur does not use cookies. All information and
      customization options, most of which can be modified here, are collected
      in local storage. No personally identifying information is collected,
      stored or shared.
    </p>
    <p class="legal">
      &copy; 2021 by Benyakir Horowitz. All rights reserved.
    </p>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  position: relative;
  width: 100%;
  padding: 1rem 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-top: 3px solid $color-primary;
  background-color: $color-brown;
}
.legal {
  font-size: reduce($font-size-small, 0.2);
  color: $color-gray;
  &:not(:last-child) {
    margin-right: 2rem;
  }
}
</style>
