<template>
  <teleport to="#modal-teleport">
    <div
      class="background"
      @click="onDismiss"
      :style="{ top: `${scrollY - 50}px` }"
    />
    <div class="modal" :style="{ top: `${scrollY + 100}px` }">
      <slot></slot>
      <span class="modal__close" @click="onDismiss">&times;</span>
    </div>
  </teleport>
</template>

<script>
import { mapState } from "vuex";
export default {
  emits: ["dismiss"],
  computed: {
    ...mapState("settings", ["scrollY"]),
    body() {
      return document.body;
    }
  },
  methods: {
    onDismiss() {
      this.$emit("dismiss");
    }
  },
  mounted() {
    this.body.style.overflow = "hidden";
  },
  unmounted() {
    this.body.style.overflow = "visible";
  }
};
</script>

<style lang="scss" scoped>
.background {
  position: absolute;
  top: 0;
  left: 0;

  height: 200vh;
  width: 100vw;
  background: rgba($color-black, 0.8);
  z-index: 100;
  overflow: hidden;
}
.modal {
  position: absolute;
  left: 50%;
  transform: translate(-50%, -5%);

  width: 60%;
  @include respond(phone) {
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
