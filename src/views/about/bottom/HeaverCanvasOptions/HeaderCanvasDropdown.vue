<template>
  <slide-checkbox
    :property="headerCanvasRandomizeColorsEnabled"
    @toggle-checked="toggleHeaderCanvasColorRandomization"
    name="header-color-randomization"
  >
    <span class="slider-desc slider-desc--small">
      Header Canvas Color Randomization
      {{ headerCanvasRandomizeColorsEnabled ? "Enabled" : "Disabled" }}
    </span>
    <hover-modal>
      {{ randomizeColorsToolbar }}
    </hover-modal>
  </slide-checkbox>
  <color-picker
    :color="startColor"
    @emit-color="changeHeaderStartColor"
    name="start-color"
  >
    Start Color:
  </color-picker>
  <color-picker
    :color="endColor"
    @emit-color="changeHeaderEndColor"
    name="end-color"
  >
    End Color:
  </color-picker>
  <range-slider
    :variable="radiusDelta"
    :min="1.01"
    :max="1.2"
    :step="0.01"
    name="radius-delta"
    @emit-number="setRadiusDelta"
  >
    Radius Delta
    <hover-modal leftMargin="0">
      {{ radiusDeltaToolbar }}
    </hover-modal>
  </range-slider>
  <range-slider
    :variable="numberOfCircles"
    :min="1"
    :max="300"
    :step="1"
    name="number-of-concentric-circles"
    @emit-number="setNumberOfCircles"
  >
    No. Concentric Circles
    <hover-modal leftMargin="0">
      {{ concentricCirclesToolbar }}
    </hover-modal>
  </range-slider>
</template>

<script>
import { mapActions, mapState } from "vuex";

import headerCanvasToolbars from "@/data/about/headerCanvasToolbars";
import ColorPicker from "@/components/inputs/ColorPicker";
import SlideCheckbox from "@/components/inputs/SlideCheckbox";
import HoverModal from "@/components/general/HoverModal";
import RangeSlider from "@/components/inputs/RangeSlider";
export default {
  components: {
    ColorPicker,
    SlideCheckbox,
    HoverModal,
    RangeSlider
  },
  data() {
    const {
      randomizeColorsToolbar,
      radiusDeltaToolbar,
      concentricCirclesToolbar
    } = headerCanvasToolbars;
    return {
      cssHexRE: /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/g,
      randomizeColorsToolbar,
      radiusDeltaToolbar,
      concentricCirclesToolbar
    };
  },
  computed: {
    ...mapState("headerCanvas", [
      "startColor",
      "endColor",
      "radiusDelta",
      "numberOfCircles"
    ]),
    ...mapState("settings", ["headerCanvasRandomizeColorsEnabled"])
  },
  methods: {
    ...mapActions("headerCanvas", [
      "setStartColor",
      "setEndColor",
      "setRadiusDelta",
      "setNumberOfCircles"
    ]),
    ...mapActions("settings", ["toggleHeaderCanvasColorRandomization"]),
    changeHeaderStartColor(e) {
      if (this.validateColor(e)) {
        this.setStartColor(e);
      }
    },
    changeHeaderEndColor(e) {
      if (this.validateColor(e)) {
        this.setEndColor(e);
      }
    },
    validateColor(e) {
      return e.search(this.cssHexRE) !== -1;
    }
  }
};
</script>

<style lang="scss" scoped>
.slider-desc {
  color: $color-primary-dark;
  font-size: $font-size-medium;

  &--small {
    font-size: $font-size-small;
  }
}
</style>
