<template>
  <range-slider
    :variable="clickAnimationLength"
    min="50"
    max="2000"
    step="10"
    @emit-number="setAnimationLength"
  >
    Click Animation Length
    <hover-modal leftMargin="0">
      {{ clickAnimationLengthToolbar }}
    </hover-modal>
  </range-slider>
  <range-slider
    :variable="clickAnimationLengthVariation"
    min="0"
    :max="clickAnimationLength.toString()"
    step="10"
    @emit-number="setAnimationLengthVariation"
  >
    Animation Variation
    <hover-modal leftMargin="0">
      {{ clickAnimationLengthVariationToolbar }}
    </hover-modal>
  </range-slider>
  <color-picker :color="clickAnimationColor" @emit-color="setAnimationColor">
    Animation Color:
  </color-picker>
  <range-slider
    :variable="clickAnimationRadius"
    min="1"
    max="40"
    step="1"
    @emit-number="setAnimationRadius"
  >
    Initial Radius:
  </range-slider>
</template>

<script>
import { mapActions, mapState } from "vuex";

import clickAnimationToolbars from "@/data/about/clickAnimationToolbars";
import RangeSlider from "@/components/inputs/RangeSlider";
import HoverModal from "@/components/general/HoverModal";
import ColorPicker from "@/components/inputs/ColorPicker";
export default {
  components: {
    RangeSlider,
    HoverModal,
    ColorPicker
  },
  data() {
    const {
      clickAnimationLengthToolbar,
      clickAnimationLengthVariationToolbar
    } = clickAnimationToolbars;
    return {
      clickAnimationLengthToolbar,
      clickAnimationLengthVariationToolbar
    };
  },
  computed: {
    ...mapState("clickAnimation", [
      "clickAnimationLength",
      "clickAnimationLengthVariation",
      "clickAnimationColor",
      "clickAnimationRadius"
    ])
  },
  methods: {
    ...mapActions("clickAnimation", [
      "setAnimationLength",
      "setAnimationLengthVariation",
      "setAnimationColor",
      "setAnimationRadius"
    ])
  }
};
</script>
