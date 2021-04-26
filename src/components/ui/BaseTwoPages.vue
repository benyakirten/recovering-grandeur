<template>
  <div :class="'book flip-' + transitionStyle + '-start'" :id="bookId">
    <div
      :id="bookId + '-flipper'"
      class="flip"
      :style="flipPagePosition"
      @click="flipPage"
    >
      {{ flipArrow }}
    </div>
    <div class="page page--front">
      <slot name="front"></slot>
    </div>
    <div class="page page--back">
      <slot name="back"></slot>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  props: {
    bookId: {
      type: String,
      required: false,
      default: () => "two-pages-book"
    },
    transitionStyle: {
      type: String,
      required: false,
      default: () => "right"
    }
  },
  data() {
    return {
      flipped: false
    };
  },
  computed: {
    ...mapGetters("settings", ["breakpointEnabled"]),
    book() {
      return document.getElementById(this.bookId);
    },
    flipper() {
      return document.getElementById(this.bookId + "-flipper");
    },
    flipPagePosition() {
      if (this.flipped) {
        return {
          left: "0",
          clipPath: "polygon(0% 0%, 100% 0%, 0% 100%)",
          textAlign: "left"
        };
      } else {
        return {
          right: "0",
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%)",
          textAlign: "right"
        };
      }
    },
    flipArrow() {
      return this.flipped ? "\u2190" : "\u2192";
    }
  },
  methods: {
    ...mapActions("breakpoint", ["incrementBreakpoint"]),
    flipPage() {
      this.flipper.style.opacity = 0;
      this.flipped ? this.flipPageBackward() : this.flipPageForward();
      this.flipped = !this.flipped;
      if (this.breakpointEnabled) {
        this.incrementBreakpoint();
      }
      setTimeout(() => {
        this.flipper.style.opacity = 1;
      }, 800);
    },
    flipPageForward() {
      this.book.classList.add(`flip-${this.transitionStyle}-end`);
      this.book.classList.remove(`flip-${this.transitionStyle}-start`);
    },
    flipPageBackward() {
      this.book.classList.add(`flip-${this.transitionStyle}-start`);
      this.book.classList.remove(`flip-${this.transitionStyle}-end`);
    }
  }
};
</script>

<style lang="scss" scoped>
// FLIPPING CLASSES

// FLIP - DEFAULT POSITION
.flip-right-start {
  .page--front {
    transform: rotateY(0deg);
  }
  .page--back {
    transform: rotateY(180deg);
  }
}

.flip-left-start {
  .page--front {
    transform: rotateY(0deg);
  }
  .page--back {
    transform: rotateY(-180deg);
  }
}

.flip-up-start {
  .page--front {
    transform: rotateX(0deg);
  }
  .page--back {
    transform: rotateX(180deg);
  }
}

.flip-down-start {
  .page--front {
    transform: rotateX(0deg);
  }
  .page--back {
    transform: rotateX(-180deg);
  }
}

// FLIP - FLIPPED POSITION
.flip-right-end {
  .page--front {
    transform: rotateY(180deg);
  }
  .page--back {
    transform: rotateY(0deg);
  }
}

.flip-left-end {
  .page--front {
    transform: rotateY(-180deg);
  }
  .page--back {
    transform: rotateY(0deg);
  }
}

.flip-up-end {
  .page--front {
    transform: rotateX(180deg);
  }
  .page--back {
    transform: rotateX(0deg);
  }
}

.flip-down-end {
  .page--front {
    transform: rotateX(-180deg);
  }
  .page--back {
    transform: rotateX(0deg);
  }
}

// OTHER STYLING

// FLIP BUTTON STYLING
.flip {
  position: absolute;
  display: inline-block;
  z-index: 1;
  border-radius: 1rem;

  cursor: pointer;
  font-size: $font-size-xl;
  color: $color-white;
  background-image: linear-gradient(
    to right,
    $color-alt-primary,
    $color-alt-primary-dark
  );

  top: 0;
  width: 10rem;
  height: 10rem;
  padding: 1rem;
}

// BOOK/ROOT STYLING
.book {
  perspective: 300rem;
  position: relative;
  height: 75rem;
}

// PAGE - FRONT AND BACK
.page {
  position: absolute;
  top: 0;
  left: 0;

  height: 75rem; // MUST always be same height as book
  width: 100%;

  border-radius: $border-radius-standard;
  box-shadow: $shadow-normal;
  transition: $transition-super-slow;

  overflow: hidden;
  backface-visibility: hidden;
}
</style>
