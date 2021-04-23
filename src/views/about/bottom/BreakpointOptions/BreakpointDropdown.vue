<template>
  <range-slider
    :variable="breakpoint"
    min="0"
    max="100"
    step="1"
    @emit-number="setBreakpoint"
  >
    Breakpoint
    <hover-modal leftMargin="0">
      {{ breakpointExplanationToolbar }}
    </hover-modal>
  </range-slider>
  <range-slider
    :variable="maxAdd"
    min="0"
    max="10"
    step="1"
    @emit-number="setMaxAdd"
  >
    Max Increment
    <hover-modal leftMargin="0">
      {{ maxAddToolbar }}
    </hover-modal>
  </range-slider>
  <range-slider
    :variable="minimum"
    min="0"
    max="100"
    step="1"
    @emit-number="setMinimum"
  >
    Minimum To Act
    <hover-modal leftMargin="0">
      {{ minimumToolbar }}
    </hover-modal>
  </range-slider>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

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
      maxAddToolbar,
      minimumToolbar
    } = breakpointToolbars;
    return {
      breakpointExplanationToolbar,
      maxAddToolbar,
      minimumToolbar
    };
  },
  computed: {
    ...mapGetters("breakpoint", ["breakpoint", "maxAdd", "minimum"])
  },
  methods: {
    ...mapActions("breakpoint", ["setBreakpoint", "setMaxAdd", "setMinimum"])
  }
};
</script>
