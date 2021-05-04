<template>
  <div class="background"></div>
  <div class="modal">
    <slot></slot>
    <span class="modal__close" @click="onDismiss">&times;</span>
  </div>
</template>

<script>
export default {
  emits: ["dismiss"],
  methods: {
    onDismiss() {
      this.$emit("dismiss");
    }
  }
};
</script>

<style lang="scss" scoped>
.background {
  position: absolute;
  top: 0;
  left: 0;

  height: 100vh;
  width: 100vw;
  background: rgba($color-black, 0.8);
  z-index: 100;
  overflow: hidden;
}
.modal {
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translate(-50%, -5%);

  height: 15%;
  width: 60%;
  @include respond(phone) {
    height: 20%;
    width: 80%;
  }

  z-index: 101;

  padding: 2rem;

  border-radius: $border-radius-standard;
  background-color: $color-white;

  &__close {
    position: absolute;
    top: 1rem;
    right: 2rem;

    font-size: $font-size-xl;
    cursor: pointer;
  }
}
</style>
