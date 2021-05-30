<template>
  <div class="columns-container" :style="containerStyling">
    <div
      class="section"
      @mouseenter="highlight"
      @mouseleave="removeHighlight"
      :style="sectionStyling"
    >
      <slot name="first"></slot>
    </div>
    <div
      class="section"
      @mouseenter="highlight"
      @mouseleave="removeHighlight"
      :style="sectionStyling"
    >
      <slot name="second"></slot>
    </div>
    <div
      class="section"
      @mouseenter="highlight"
      @mouseleave="removeHighlight"
      :style="sectionStyling"
    >
      <slot name="third"></slot>
    </div>
    <div
      class="section"
      @mouseenter="highlight"
      @mouseleave="removeHighlight"
      :style="sectionStyling"
    >
      <slot name="fourth"></slot>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { checkBreakpointActive } from "@/utils/other";
export default {
  props: {
    containerWidth: {
      type: String,
      required: false,
      default: "100%",
      validator: value =>
        /(^auto$|^initial$|^inherit$|^0$)|(^((0\.)?\d+|\d+\.\d+)(rem|em|ex|ch|%|vw|vh|vmin|vmax|cm|mm|in|px|pt|pt|pc))$/.test(
          value
        )
    },
    sectionWidth: {
      type: String,
      required: false,
      default: "25%",
      validator: value =>
        /(^auto$|^initial$|^inherit$|^0$)|(^((0\.)?\d+|\d+\.\d+)(rem|em|ex|ch|%|vw|vh|vmin|vmax|cm|mm|in|px|pt|pt|pc))$/.test(
          value
        )
    },
    paddingVertical: {
      type: String,
      required: false,
      default: "0",
      validator: value =>
        /(^auto$|^initial$|^inherit$|^0$)|(^((0\.)?\d+|\d+\.\d+)(rem|em|ex|ch|%|vw|vh|vmin|vmax|cm|mm|in|px|pt|pt|pc))$/.test(
          value
        )
    },
    paddingHorizontal: {
      type: String,
      required: false,
      default: "0",
      validator: value =>
        /(^auto$|^initial$|^inherit$|^0$)|(^((0\.)?\d+|\d+\.\d+)(rem|em|ex|ch|%|vw|vh|vmin|vmax|cm|mm|in|px|pt|pt|pc))$/.test(
          value
        )
    },
    boxShadow: {
      type: String,
      required: false,
      default: "none"
    },
    normalBorder: {
      type: String,
      required: false,
      default: "none"
    },
    highlightedBorder: {
      type: String,
      required: false,
      default: "none"
    },
    childBoxShadow: {
      type: String,
      required: false,
      default: "none"
    }
  },
  data() {
    return {
      EVENT_NOT_CHANCE: 10
    };
  },
  computed: {
    ...mapState("breakpoint", ["breakpoint", "minimum"]),
    ...mapState("settings", ["breakpointEnabled"]),
    breakpointActive() {
      return checkBreakpointActive(
        this.breakpointEnabled,
        this.breakpoint,
        this.minimum,
        this.EVENT_NOT_CHANCE
      );
    },
    computedBoxShadow() {
      return this.getBoxShadow(this.boxShadow);
    },
    computedChildBoxShadow() {
      return this.getBoxShadow(this.childBoxShadow);
    },
    containerStyling() {
      return {
        padding: `${this.paddingVertical} ${this.paddingHorizontal}`,
        boxShadow: this.computedBoxShadow,
        width: this.containerWidth
      };
    },
    sectionStyling() {
      return {
        width: window.matchMedia("only screen and (max-width: 37.5em)").matches
          ? "80%"
          : window.matchMedia("only screen and (max-width: 56.25em)").matches
          ? "45%"
          : window.matchMedia("only screen and (max-width: 75em)").matches
          ? "40%"
          : this.sectionWidth,
        border: this.normalBorder,
        boxShadow: this.computedChildBoxShadow,
        animation: this.breakpointActive ? "spin-off 5s infinite linear" : ""
      };
    }
  },
  methods: {
    highlight(e) {
      e.target.style.border = this.highlightedBorder;
    },
    removeHighlight(e) {
      e.target.style.border = this.normalBorder;
    },
    getBoxShadow(shadow) {
      switch (shadow.toLowerCase()) {
        case "none":
          return null;
        case "small":
          return "0 1rem 2rem rgba(0, 0, 0, 0.4)";
        case "normal":
          return "0 2rem 4rem rgba(0, 0, 0, 0.4)";
        default:
          return shadow;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.columns-container {
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  border-radius: $border-radius-standard;

  @include respond(tab-land) {
    flex-wrap: wrap;
  }

  @include respond(phone) {
    align-items: center;
    flex-direction: column;
  }
}
.section {
  border-radius: $border-radius-standard;
  @include respond(tab-land) {
    margin-bottom: 2rem;
  }

  @include respond(phone) {
    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }
}
</style>
