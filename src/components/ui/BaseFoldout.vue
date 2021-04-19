<template>
  <div class="container">
    <div class="top-bar" @click="toggleContent">
      <span class="top-bar__item" :style="itemStyle">
        <span class="top-bar__item__caret" :style="caretStyle">&#10148;</span>
        <slot name="top"></slot>
      </span>
    </div>
    <transition name="content">
      <div class="content" v-if="showDropdownContent">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  emits: ["broadcast-click"],
  props: {
    enableContent: {
      type: Boolean,
      required: false,
      default: () => true
    },
    name: {
      type: String,
      required: false,
      default: () => "BaseFoldout"
    },
    showContent: {
      type: Boolean,
      required: true
    }
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
    },
    showDropdownContent() {
      return this.enableContent && this.showContent;
    }
  },
  methods: {
    toggleContent() {
      if (this.enableContent) {
        this.$emit("broadcast-click", this.name);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  margin: 0 4rem 2rem;
  min-width: 40rem;
}
.top-bar {
  display: flex;
  align-items: center;

  border: 1px solid $color-black;
  border-radius: $border-radius-standard;
  width: 70rem;

  @include respond(tab-land) {
    width: 50rem;
  }

  @include respond(tab-port) {
    width: 40rem;
  }

  @include respond(phone) {
    width: 20rem;
  }

  text-align: left;
  padding: 0 2rem;

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
  @include respond(tab-land) {
    width: 50rem;
  }
  @include respond(phone) {
    width: 40rem;
    margin-left: -6rem;
  }
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
