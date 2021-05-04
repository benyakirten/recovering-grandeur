<template>
  <base-layout bottomHeight="60rem">
    <template #top>
      <PricingTop />
    </template>
    <template #center>
      <div :style="altCenterStyle">
        <PricingCenter />
      </div>
    </template>
    <template #bottom>
      <div :style="altBottomStyle">
        <PricingBottom />
      </div>
    </template>
  </base-layout>
</template>

<script>
import { mapActions, mapState } from "vuex";

import { checkBreakpointActive } from "@/utils/other";

import BaseLayout from "@/components/ui/BaseLayout";
import PricingTop from "./top/PricingTop";
import PricingCenter from "./center/PricingCenter";
import PricingBottom from "./bottom/PricingBottom";
export default {
  components: {
    BaseLayout,
    PricingTop,
    PricingCenter,
    PricingBottom
  },
  data() {
    return {
      EVENT_NOT_CHANCE: 80
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
    altCenterStyle() {
      if (this.breakpointActive) {
        return {
          animation: "bounce-up-down 2s infinite linear"
        };
      }
      return {};
    },
    altBottomStyle() {
      if (this.breakpointActive) {
        return {
          marginTop: "-50rem",
          opacity: 0.7
        };
      }
      return {};
    }
  },
  methods: {
    ...mapActions("links", ["setAnchorId", "setButtonAction"])
  },
  mounted() {
    this.setAnchorId("centerTableId");
    this.setButtonAction(() => {
      const table = document.getElementById("centerTableId");
      table.scrollIntoView({ behavior: "smooth" });
    });
  }
};
</script>
