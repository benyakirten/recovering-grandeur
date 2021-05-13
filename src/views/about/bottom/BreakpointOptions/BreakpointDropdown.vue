<template>
  <range-slider
    :variable="breakpoint"
    :min="0"
    :max="breakpointMaximum"
    :step="1"
    @emit-number="setBreakpoint"
  >
    Breakpoint
    <hover-modal leftMargin="0">
      {{ breakpointExplanationToolbar }}
    </hover-modal>
  </range-slider>
  <range-slider
    :variable="breakpointMaximum"
    :min="100"
    :max="500"
    :step="5"
    @emit-number="setBreakpointMaximum"
  >
    Breakpoint Maximum
    <hover-modal leftMargin="0">
      {{ breakpointMaximumToolbar }}
    </hover-modal>
  </range-slider>
  <range-slider
    :variable="maxAdd"
    :min="0"
    :max="10"
    :step="1"
    @emit-number="setMaxAdd"
  >
    Max Increment
    <hover-modal leftMargin="0">
      {{ maxAddToolbar }}
    </hover-modal>
  </range-slider>
  <range-slider
    :variable="minimum"
    :min="0"
    :max="100"
    :step="1"
    @emit-number="setMinimum"
  >
    Minimum To Act
    <hover-modal leftMargin="0">
      {{ minimumToolbar }}
    </hover-modal>
  </range-slider>
</template>

<script>
import { mapActions, mapState } from "vuex";

import breakpointToolbars from "@/data/about/breakpointToolbars";
import RangeSlider from "@/components/inputs/RangeSlider";
import HoverModal from "@/components/general/HoverModal";
export default {
  components: {
    RangeSlider,
    HoverModal
  },
  data() {
    const {
      breakpointExplanationToolbar,
      breakpointMaximumToolbar,
      maxAddToolbar,
      minimumToolbar
    } = breakpointToolbars;
    return {
      breakpointExplanationToolbar,
      breakpointMaximumToolbar,
      maxAddToolbar,
      minimumToolbar
    };
  },
  computed: {
    ...mapState("breakpoint", [
      "breakpoint",
      "breakpointMaximum",
      "maxAdd",
      "minimum"
    ])
  },
  methods: {
    ...mapActions("breakpoint", [
      "setBreakpoint",
      "setBreakpointMaximum",
      "setMaxAdd",
      "setMinimum"
    ])
  }
};
</script>
