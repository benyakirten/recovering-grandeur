<template>
  <div class="picker">
    <label class="picker__label" :for="randomId">
      <slot></slot>
    </label>
    <input
      type="text"
      class="picker__text-input"
      :value="color"
      @keyup.enter="emitColor"
      @input="emitColor"
    />
    <input
      type="color"
      class="picker__color-input"
      :value="color"
      @input="emitColor"
      :name="randomId"
    />
  </div>
</template>

<script>
export default {
  emits: ["emit-color"],
  props: {
    color: {
      type: String,
      required: true
    }
  },
  computed: {
    randomId() {
      return new Date().toISOString() + Math.floor(Math.random() * 1000);
    }
  },
  methods: {
    emitColor(e) {
      this.$emit("emit-color", e.target.value);
    }
  }
};
</script>

<style lang="scss" scoped>
.picker {
  position: relative;

  display: flex;
  align-items: center;

  padding: 0.5rem 2rem;
  font-size: $font-size-small;

  &__label {
    min-width: 14rem;
  }
  &__text-input {
    &:focus {
      outline: 1px solid $color-primary-dark;
    }
  }
}
</style>
