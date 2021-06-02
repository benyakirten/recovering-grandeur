<template>
  <div class="sidebar" id="sidebar">
    <div class="sidebar__center" id="sidebar-center" :style="centerStyle">
      <slot></slot>
    </div>
    <aside
      class="sidebar__side"
      id="sidebar-side"
      :style="sideStyle"
      @click="onSidebarInteract"
      @keydown.enter="onSidebarInteract"
      @keydown.space="onSidebarInteract"
    >
      <transition name="opacity">
        <div
          class="sidebar__popout"
          id="summary-popout"
          v-if="popout"
          :tabindex="checkIfHidden"
        >
          <slot name="popout"></slot>
        </div>
      </transition>
      <div class="sidebar__summary" id="sidebar-summary">
        <slot name="summary"></slot>
      </div>
    </aside>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  emits: ["sidebar-click"],
  props: {
    side: {
      type: String,
      required: false,
      default: "right",
      validator: value => /(left|right)/.test(value)
    },
    popout: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      showSidebar: false,
      timeout: null
    };
  },
  computed: {
    ...mapState("settings", ["scrollY"]),
    centerStyle() {
      let transform = {};
      if (this.popout && this.side === "left") {
        transform = { transform: "translateX(24rem)" };
      }
      if (window.matchMedia("only screen and (max-width: 37.5em)").matches) {
        transform = { transform: "translateX(4rem)" };
        if (this.popout && this.side === "left") {
          transform = { transform: "translateX(16rem)" };
        }
      }
      return {
        width: this.popout ? "60%" : "80%",
        ...transform
      };
    },
    sideStyle() {
      const leftOrRight = this.side === "left" ? { left: "0" } : { right: "0" };
      // eslint-disable-next-line
      const disabledSidebar = this.side === "left"
        ? { borderLeft: "none" }
        : { borderRight: "none" };
      const borderRadius =
        this.side === "left"
          ? {
              borderTopRightRadius: "3rem",
              borderBottomRightRadius: "3rem"
            }
          : {
              borderTopLeftRadius: "3rem",
              borderBottomLeftRadius: "3rem"
            };
      let width = this.popout ? "52%" : "10%";
      if (window.matchMedia("only screen and (max-width: 56.25em)").matches) {
        width = this.popout ? "55%" : "10%";
      }
      if (window.matchMedia("only screen and (max-width: 37.5em)").matches) {
        width = this.popout ? "60%" : "15%";
      }
      return {
        transition: "all 0.4s",
        width,
        opacity: this.showSidebar ? "1" : "0",
        ...leftOrRight,
        ...disabledSidebar,
        ...borderRadius
      };
    },
    checkIfHidden() {
      return this.showSidebar ? 0 : -1;
    }
  },
  methods: {
    onSidebarInteract(e) {
      this.$emit("sidebar-click", e);
    }
  },
  watch: {
    scrollY() {
      const sidebarSide = document.querySelector("#sidebar-side");
      const sidebarClientRect = document
        .querySelector("#sidebar")
        .getBoundingClientRect();
      if (this.timeout) {
        window.clearTimeout(this.timeout);
      }
      if (sidebarClientRect.top < 250 && sidebarClientRect.bottom > 500) {
        this.showSidebar = true;
        sidebarSide.style.display = "initial";
      } else {
        this.showSidebar = false;
        this.timeout = setTimeout(() => {
          sidebarSide.style.display = "none";
          this.timeout = null;
        }, 800);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.sidebar {
  position: relative;
  &__center {
    margin: 0 auto;
    transition: $transition-normal;
  }
  &__side {
    position: fixed;
    top: 2rem;

    height: 80vh;

    background-color: $color-brown;
    box-shadow: $shadow-normal;
    border: 2px solid $color-primary;
  }

  &__popout {
    position: absolute;
    left: 0;
    top: 2rem;
  }

  &__summary {
    position: absolute;
    right: 0;
    top: 2rem;
  }
}
</style>
