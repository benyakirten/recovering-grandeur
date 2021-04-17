<template>
  <div class="range-input">
    <label class="range-input__label" :for="randomId">
      <slot></slot>
    </label>
    <input
      type="text"
      class="range-input__number-input"
      @input="validateNumberThenEmit"
      :min="min"
      :max="max"
      :step="step"
      :value="variable"
    />
    <input
      type="range"
      class="range-input__range"
      @input="emitNumber"
      :name="randomId"
      :min="min"
      :max="max"
      :step="step"
      :value="variable"
    />
  </div>
</template>

<script>
export default {
  emits: ["emit-number"],
  props: {
    variable: {
      type: Number,
      required: true
    },
    min: {
      type: String,
      required: true
    },
    max: {
      type: String,
      required: true
    },
    step: {
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
    emitNumber(e) {
      this.$emit("emit-number", +e.target.value);
    },
    validateNumberThenEmit(e) {
      const value = +e.target.value;
      if (
        +this.max >= value &&
        value >= +this.min &&
        value % +this.step === 0
      ) {
        this.$emit("emit-number", value);
      }
    }
  }
};
</script>

<style lang="scss">
.range-input {
  position: relative;

  display: flex;
  align-items: center;

  padding: 0.5rem 2rem;
  font-size: $font-size-small;

  &__label {
    min-width: 14rem;
  }
  &__number-input {
    &:focus {
      outline: 1px solid $color-primary-dark;
    }
  }
  &__range {
    margin-left: 1rem;
  }
}
</style>
