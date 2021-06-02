<template>
  <div class="range-input" :style="rangeInputStyles">
    <label class="range-input__label" :for="name">
      <slot></slot>
    </label>
    <input
      type="number"
      class="range-input__number-input"
      @input="onNumberInput"
      @keydown.enter="onNumberEnter"
      @keydown="ariaKeyboardInputs"
      :id="name + '-number'"
      :name="name + '-number'"
      :min="min.toString()"
      :max="max.toString()"
      :step="step.toString()"
      :value="variable"
      :aria-valuenow="variable"
      :aria-valuemax="max.toString()"
      :aria-valuemin="min.toString()"
    />
    <input
      type="range"
      class="range-input__range"
      @input="onNumberInput"
      :id="name + '-range'"
      :name="name + '-range'"
      :min="min.toString()"
      :max="max.toString()"
      :step="step.toString()"
      :value="variable"
      :aria-valuenow="variable"
      :aria-valuemax="max.toString()"
      :aria-valuemin="min.toString()"
    />
  </div>
</template>

<script>
import { betweenMinAndMax } from "@/utils/other";
export default {
  emits: ["emit-number"],
  props: {
    variable: {
      type: Number,
      required: true
    },
    name: {
      type: String,
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
    },
    ariaKeyboardInputs(e) {
      switch (e.code) {
        case "ArrowRight":
        case "ArrowUp":
          this.$emit(
            "emit-number",
            betweenMinAndMax(this.variable, this.step, this.min, this.max)
          );
          break;
        case "ArrowLeft":
        case "ArrowDown":
          this.$emit(
            "emit-number",
            betweenMinAndMax(this.variable, -1 * this.step, this.min, this.max)
          );
          break;
        case "Home":
          this.$emit("emit-number", this.min);
          break;
        case "End":
          this.$emit("emit-number", this.max);
          break;
        case "PageUp":
          this.$emit(
            "emit-number",
            betweenMinAndMax(this.variable, this.step * 10, this.min, this.max)
          );
          break;
        case "PageDown":
          this.$emit(
            "emit-number",
            betweenMinAndMax(this.variable, this.step * -10, this.min, this.max)
          );
          break;
        default:
          break;
      }
    },
    log(e) {
      console.log(e);
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
