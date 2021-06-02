<template>
  <button
    class="button"
    @click="activateEvent"
    @keydown.space="activateEvent"
    @keydown.enter="activateEvent"
    :style="buttonStyles"
    :disabled="disabled"
  >
    <span class="button__text" :style="spanStyles">
      <slot></slot>
    </span>
  </button>
</template>

<script>
import { getContrastingHex } from "@/utils/hexAndDecimals";
export default {
  props: {
    onClick: {
      type: Function,
      required: false,
      default: () => null
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    color: {
      type: String,
      required: false,
      default: "#000000",
      validator: value => /^#(?:[0-9A-F]{3}|[0-9A-F]{6})$/i.test(value)
    }
  },
  computed: {
    buttonStyles() {
      let backgroundColor;
      let border;
      if (this.disabled) {
        backgroundColor = getContrastingHex(this.color);
        border = `1px solid ${this.color}`;
      } else {
        backgroundColor = this.color;
        border = `1px solid ${getContrastingHex(this.color)}`;
      }
      return {
        border,
        backgroundColor
      };
    },
    spanStyles() {
      let color;
      if (this.disabled) {
        color = this.color;
      } else {
        color = getContrastingHex(this.color);
      }
      return {
        color
      };
    }
  },
  methods: {
    activateEvent(e) {
      if (this.disabled) {
        return;
      }
      this.onClick(e);
    }
  }
};
</script>

<style lang="scss" scoped>
.button {
  position: relative;

  display: flex;
  align-items: center;

  padding: 1rem 2rem;
  margin-bottom: 2rem;

  outline: none;

  cursor: pointer;

  transition: $transition-normal;

  &:not(:disabled) {
    &:hover {
      transform: translateY(-3px);
      box-shadow: $shadow-small;
    }

    &:active {
      transform: translateY(-1px);
      box-shadow: $shadow-small;
    }
  }

  &:disabled {
    cursor: not-allowed;
  }
}
</style>
