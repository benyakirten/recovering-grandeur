<template>
  <header
    :class="headerClass"
    :style="headerBackground"
    id="header"
    @mouseenter="startHeaderWave($event)"
  >
    <header-canvas></header-canvas>
    <nav :style="navStyles">
      <transition-group :name="transitionName" @afterEnter="afterEnter">
        <header-link
          v-for="link in liveLinks"
          :key="link.link"
          :linkRoute="link.link"
          :linkName="link.name"
          :linkStyle="breakpointActive ? 'alternate' : ''"
        ></header-link>
      </transition-group>
    </nav>
  </header>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";

import { checkBreakpointActive } from "@/utils/other";
import { getRGBAStringFromHex } from "@/utils/hexAndDecimals";

import HeaderLink from "./HeaderLink";
import HeaderCanvas from "./HeaderCanvas";
export default {
  components: { HeaderLink, HeaderCanvas },
  data() {
    return {
      EVENT_NOT_CHANCE: 25
    };
  },
  computed: {
    ...mapState("breakpoint", ["breakpoint", "minimum", "makeHeaderWave"]),
    ...mapState("colorScheme", ["headerBackgroundColor", "headerOpacity"]),
    ...mapGetters("links", ["liveLinks"]),
    ...mapState("settings", ["breakpointEnabled"]),
    headerBackground() {
      return {
        background: getRGBAStringFromHex(
          this.headerBackgroundColor,
          this.headerOpacity
        )
      };
    },
    breakpointActive() {
      return checkBreakpointActive(
        this.breakpointEnabled,
        this.breakpoint,
        this.minimum,
        this.EVENT_NOT_CHANCE
      );
    },
    headerClass() {
      return this.breakpointActive ? "header-alternate" : "header";
    },
    transitionName() {
      return this.breakpointActive ? "link-fall-alt" : "link-fall";
    },
    navStyles() {
      if (this.breakpointActive) {
        return { display: "flex" };
      }
      return {};
    }
  },
  methods: {
    ...mapActions("breakpoint", ["startHeaderWave"]),
    ...mapActions("headerCanvas", ["setRandomStartAndEndColors"]),
    afterEnter(el) {
      // Prevent the hover animation until the link is in place
      if (!this.breakpointActive) {
        el.classList.add("link-animation");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  position: absolute;
  top: 5rem;
  right: 12rem;

  z-index: 1;
  border: 1px solid $color-black;

  display: flex;
  flex-direction: column;

  padding: 0 5rem 1rem 1rem;
  transform: skewX(-25deg);
}

.header-alternate {
  position: absolute;
  top: 5rem;
  left: 50%;
  padding: 2rem 3rem;

  @include respond(tab-port) {
    padding: 1rem 1.5rem;
  }
  transform: translateX(-50%) skewX(-25deg);

  min-width: 80%;
  height: 5rem;
  z-index: 1;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

// HEADER-LINK TRANSITIONS

// DEFAULT
.link-fall-leave-from,
.link-fall-enter-to {
  transform: translateY(0) skewX(25deg) scale(1);
}
.link-fall-leave-active,
.link-fall-enter-active {
  transition: all 3s;
}

.link-fall-leave-to {
  transform: translate(-20rem, 100rem) skewX(25deg) scale(0.5);
}
.link-fall-enter-from {
  transform: translate(-20rem, -20rem) skewX(25deg) scale(0.5);
}

// ALTERNATE - NO SKEW
.link-fall-alt-leave-from,
.link-fall-alt-enter-to {
  transform: translateY(0) scale(1);
}
.link-fall-alt-leave-active,
.link-fall-alt-enter-active {
  transition: all 3s;
}

.link-fall-alt-leave-to {
  transform: translate(-20rem, 100rem) scale(0.5);
}
.link-fall-alt-enter-from {
  transform: translate(-20rem, -20rem) scale(0.5);
}
</style>
