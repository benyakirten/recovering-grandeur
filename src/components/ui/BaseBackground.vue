<template>
  <div :style="backgroundImage" class="background">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: false,
      default: () => "Tech"
    },
    clipPath: {
      type: String,
      required: false,
      default: () => "default"
    },
    height: {
      type: String,
      required: false,
      default: () => "100vh"
    }
  },
  computed: {
    backgroundImage() {
      return {
        backgroundImage: `url(${require(`@/assets/${this.image}.svg`)})`,
        backgroundSize: "cover",
        clipPath: this.computedClipPath,
        height: this.height
      };
    },
    computedClipPath() {
      switch (this.clipPath.toLowerCase()) {
        case "default":
          return "polygon(0% 0%, 100% 0%, 100% 100%, 50% 90%, 0% 100%)";
        case "none":
          return "";
        default:
          return this.clipPath;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.background {
  position: relative;
}
</style>
