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
    :variable="maxSub"
    min="-10"
    max="0"
    step="1"
    @emit-number="setMaxSub"
  >
    Max Decrement
    <hover-modal leftMargin="0">
      {{ maxSubToolbar }}
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
      maxSubToolbar
    } = breakpointToolbars;
    return {
      breakpointExplanationToolbar,
      maxAddToolbar,
      maxSubToolbar
    };
  },
  computed: {
    ...mapGetters("breakpoint", ["breakpoint", "maxAdd", "maxSub"])
  },
  methods: {
    ...mapActions("breakpoint", ["setBreakpoint", "setMaxAdd", "setMaxSub"])
  }
};
</script>
