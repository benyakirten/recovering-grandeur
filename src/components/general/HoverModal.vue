<template>
  <div class="container">
    <span
      class="container__span"
      :style="spanStyle"
      @mouseenter="toggleDialog"
      @mouseleave="toggleDialog"
    >
      <slot name="hoverable">i</slot>
    </span>
    <transition :name="transitionDirection">
      <dialog
        :style="modalDirection"
        class="container__modal"
        v-if="dialogOpen"
        open
      >
        <slot></slot>
      </dialog>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    iconColor: {
      type: String,
      required: false,
      default: () => "#b28451"
    },
    leftMargin: {
      type: String,
      required: false,
      default: () => "0.5rem"
    },
    direction: {
      type: String,
      required: false,
      default: () => "left"
    }
  },
  data() {
    return {
      dialogOpen: false,
      transitionDirection: "vertical"
    };
  },
  computed: {
    spanStyle() {
      return {
        color: this.iconColor,
        marginLeft: this.leftMargin
      };
    },
    modalDirection() {
      if (window.matchMedia("only screen and (max-width: 37.5em)").matches) {
        return { right: "2rem" };
      }
      return this.direction === "left" ? { left: "4rem" } : { right: "1rem" };
    }
  },
  methods: {
    toggleDialog() {
      this.dialogOpen = !this.dialogOpen;
      this.transitionDirection =
        Math.random() > 0.5 ? "vertical" : "horizontal";
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  display: inline-block;

  &__span {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: $font-size-large;

    @include respond(tab-port) {
      font-size: $font-size-xl;
    }
    border: 1px solid $color-black;
    border-radius: 50%;
  }

  &__modal {
    position: absolute;
    top: 0;

    border-radius: 1rem;
    padding: 0.5rem;
    min-width: 25rem;
    z-index: 100;

    font-size: $font-size-small;
    box-shadow: $shadow-xs;

    border: 3px solid $color-black;
    background-color: rgba($color-white, 1);
    transition: $transition-normal;
  }
}
.horizontal-enter-from {
  transform: translateX(-3rem) scaleX(0.2);
  opacity: 0;
}
.horizontal-leave-to {
  transform: translateX(3rem) scaleX(0.2);
  opacity: 0;
}
.horizontal-enter-active {
  transform-origin: left;
}
.horizontalue-leave-active {
  transform-origin: right;
}
.horizontal-leave-from,
.horizontal-enter-to {
  transform: translateX(0) scaleX(1);
  opacity: 1;
}

.vertical-enter-from {
  transform: translateY(-3rem) scaleY(0.2);
  opacity: 0;
}
.vertical-leave-to {
  transform: translateY(3rem) scaleY(0.2);
  opacity: 0;
}
.vertical-enter-active {
  transform-origin: top;
}
.verticalue-leave-active {
  transform-origin: bottom;
}
.vertical-leave-from,
.vertical-enter-to {
  transform: translateY(0) scaleY(1);
  opacity: 1;
}
</style>
