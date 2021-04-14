<template>
  <div class="container">
    <div class="top-bar" @click="toggleContent">
      <span class="top-bar__item" :style="itemStyle">
        <span class="top-bar__item__caret" :style="caretStyle">&#10148;</span>
        <slot name="top"></slot>
      </span>
    </div>
    <transition name="content">
      <div class="content" v-if="showContent && enableContent">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    enableContent: {
      type: Boolean,
      required: false,
      default: () => true
    }
  },
  data() {
    return {
      showContent: false
    };
  },
  computed: {
    itemStyle() {
      return {
        cursor: this.enableContent ? "pointer" : "not-allowed",
        color: this.enableContent ? "#000000" : "#54483A",
        opacity: this.enableContent ? 1 : 0.5
      };
    },
    caretStyle() {
      return {
        transform: this.showContent ? "rotate(270deg)" : "rotate(90deg)"
      };
    }
  },
  methods: {
    toggleContent() {
      if (this.enableContent) {
        this.showContent = !this.showContent;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  margin-bottom: 2rem;
}
.top-bar {
  display: flex;
  align-items: center;

  border: 1px solid $color-black;
  border-radius: $border-radius-standard;

  padding-left: 2rem;
  text-align: left;

  &__item {
    display: flex;
    align-items: center;

    font-size: $font-size-large;
    font-family: $font-family-sans;

    &__caret {
      transition: $transition-normal;
      margin-right: 1rem;
    }
  }
}
.content {
  border: 1px solid $color-black;
}

.content-leave-to,
.content-enter-from {
  transform: scaleY(0);
}
.content-leave-from,
.content-enter-to {
  transform: scaleY(1);
}

.content-leave-active,
.content-enter-active {
  transform-origin: top;
  transition: $transition-normal;
}
</style>
