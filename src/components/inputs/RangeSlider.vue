<template>
  <div class="range-input" :style="rangeInputStyles">
    <label class="range-input__label" :for="randomId">
      <slot></slot>
    </label>
    <input
      type="number"
      class="range-input__number-input"
      @input="onNumberInput"
      @keyup.enter="onNumberEnter"
      :min="min.toString()"
      :max="max.toString()"
      :step="step.toString()"
      :value="variable"
    />
    <input
      type="range"
      class="range-input__range"
      @input="onNumberInput"
      :name="randomId"
      :min="min.toString()"
      :max="max.toString()"
      :step="step.toString()"
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
      type: Number,
      required: true
    },
    max: {
      type: Number,
      required: true
    },
    step: {
      type: Number,
      required: true
    },
    allowVertical: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    randomId() {
      return new Date().toISOString() + Math.floor(Math.random() * 1000);
    },
    rangeInputStyles() {
      if (
        this.allowVertical &&
        window.matchMedia("only screen and (max-width: 56.25em)").matches
      ) {
        return {
          flexDirection: "column",
          alignItems: "flex-start",
          padding: "1rem 0"
        };
      }
      return {};
    }
  },
  methods: {
    onNumberEnter(e) {
      e.target.blur();
      this.onNumberInput(e);
    },
    onNumberInput(e) {
      const value = +e.target.value;
      const mult = this.step < 1 ? 1 / this.step : 1;
      if (
        this.max >= value &&
        this.min <= value &&
        (value * mult) % (this.step * mult) === 0
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
    @include respond(tab-port) {
      width: 6rem;
      margin-left: 1rem;
    }
    &:focus {
      outline: 1px solid $color-primary-dark;
    }
  }
  &__range {
    margin-left: 1rem;

    @include respond(tab-port) {
      width: 10rem;
    }
  }
}
</style>
