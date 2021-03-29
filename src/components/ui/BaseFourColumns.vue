<template>
  <div class="container" :style="containerStyling">
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
export default {
  props: {
    containerWidth: {
      type: String,
      required: false,
      default: () => "100%"
    },
    sectionWidth: {
      type: String,
      required: false,
      default: () => "25%"
    },
    paddingVertical: {
      type: String,
      required: false,
      default: () => "0"
    },
    paddingHorizontal: {
      type: String,
      required: false,
      default: () => "0"
    },
    boxShadow: {
      type: String,
      required: false,
      default: () => "none"
    },
    normalBorder: {
      type: String,
      required: false,
      default: () => "none"
    },
    highlightedBorder: {
      type: String,
      required: false,
      default: () => "none"
    },
    childBoxShadow: {
      type: String,
      required: false,
      default: () => "none"
    }
  },
  computed: {
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
        width: this.sectionWidth,
        border: this.normalBorder,
        boxShadow: this.computedChildBoxShadow
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
.container {
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  border-radius: $border-radius-standard;
}
.section {
  border-radius: $border-radius-standard;
}
</style>
