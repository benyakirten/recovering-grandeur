<template>
  <slide-checkbox
    :property="headerCanvasEnabled"
    @toggle-checked="toggleProperty"
  >
    <span class="slider-desc">
      <slot name="slider-description"></slot>
    </span>
    <hover-modal>
      <slot name="hover-modal"></slot>
    </hover-modal>
  </slide-checkbox>
</template>

<script>
import SlideCheckbox from "@/components/inputs/SlideCheckbox";
import HoverModal from "@/components/general/HoverModal";
export default {
  emits: ["toggle"],
  components: {
    SlideCheckbox,
    HoverModal
  },
  props: {
    property: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    toggleProperty(e) {
      this.$emits("toggle", e);
    }
  }
}
</script>

<style lang="scss" scoped>
.slider-desc {
  color: $color-primary-dark;
  font-size: $font-size-medium;
}
</style>
