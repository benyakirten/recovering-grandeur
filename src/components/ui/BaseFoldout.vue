<template>
  <div class="container" :style="containerStyle">
    <div class="top-bar" @click="toggleContent" :style="topbarStyle">
      <span class="top-bar__item" :style="itemStyle">
        <span class="top-bar__item__caret" :style="caretStyle">&#10148;</span>
        <slot name="top"></slot>
      </span>
    </div>
    <transition name="content">
      <div class="content" v-if="showDropdownContent" :style="dropdownStyle">
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
    },
    width: {
      type: String,
      required: false,
      default: "",
      validator: value =>
        /(^$|^auto$|^initial$|^inherit$|^0$)|^\d+(rem|em|ex|ch|%|vw|vh|vmin|vmax|cm|mm|in|px|pt|pt|pc)$/.test(
          value
        )
    },
    margin: {
      type: String,
      required: false,
      default: "",
      validator: value =>
        /(^$|^auto$|^initial$|^inherit$|^0$)|^((0\.)?\d+|\d+\.\d+)(rem|em|ex|ch|%|vw|vh|vmin|vmax|cm|mm|in|px|pt|pt|pc)$/.test(
          value
        )
    },
    background: {
      type: String,
      required: false,
      default: ""
    }
  },
  computed: {
    containerStyle() {
      let styles = {};
      styles = this.width
        ? { ...styles, width: this.width }
        : { ...styles, minWidth: "40rem" };
      styles = this.margin
        ? { ...styles, margin: this.margin }
        : { ...styles, margin: "0 4rem 2rem" };
      return styles;
    },
    topbarStyle() {
      let styles = {};
      if (this.background) {
        styles = { ...styles, background: this.background };
      }
      if (this.width) {
        styles = { ...styles, width: this.width };
      }
      return styles;
    },
    itemStyle() {
      return {
        cursor: this.enableContent ? "pointer" : "not-allowed",
        color: this.enableContent ? "#000000" : "#54483A",
        opacity: this.enableContent ? 1 : 0.5
      };
    },
    dropdownStyle() {
      let styles = {};
      if (this.background) {
        styles = { ...styles, background: this.background };
      }
      if (
        this.width &&
        window.matchMedia("only screen and (max-width: 37.5em)").matches
      ) {
        styles = {
          ...styles,
          margin: "0",
          padding: "2rem 0.5",
          alignItems: "flex-start"
        };
      }
      return styles;
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
  max-width: 110%;
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
