<template>
  <div class="picker">
    <label class="picker__label" :for="name">
      <slot></slot>
    </label>
    <input
      type="text"
      class="picker__text-input"
      :value="color"
      @keyup.enter="onEnter"
      @input="onInput"
      :name="name + '-text-input'"
      :id="name + '-text-input'"
    />
    <input
      type="color"
      class="picker__color-input"
      :value="color"
      @input="onInput"
      :name="name + '-color-input'"
      :id="name + '-color-input'"
    />
  </div>
</template>

<script>
export default {
  emits: ["emit-color"],
  props: {
    name: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true,
      validator: value => /^#(?:[0-9A-F]{3}|[0-9A-F]{6})$/i.test(value)
    }
  },
  computed: {
    randomId() {
      return new Date().toISOString() + Math.floor(Math.random() * 1000);
    }
  },
  methods: {
    onEnter(e) {
      e.target.blur();
      this.onInput(e);
    },
    onInput(e) {
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
