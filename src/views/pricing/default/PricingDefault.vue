<template>
  <base-layout centerHeight="75rem" bottomHeight="85rem">
    <template #top>
      <PricingTop />
    </template>
    <template #center>
      <PricingCenter />
    </template>
    <template #bottom>
      <PricingBottom />
    </template>
  </base-layout>
</template>

<script>
import { mapActions } from "vuex";

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
  methods: {
    ...mapActions("links", ["setAnchorId", "setButtonAction"]),
    ...mapActions("colorScheme", [
      "setHeaderBackgroundColor",
      "setHeaderLinkColor",
      "setHeaderOpacity"
    ]),
    ...mapActions("links", ["enlivenLinks"])
  },
  created() {
    this.setAnchorId("centerTableId");
    this.setButtonAction(() => {
      const table = document.getElementById("centerTableId");
      table.scrollIntoView({ behavior: "smooth" });
    });
  },
  mounted() {
    this.setHeaderBackgroundColor("#2c2c2c");
    this.setHeaderLinkColor("#7ed56f");
    this.setHeaderOpacity(0.2);
    setTimeout(() => this.enlivenLinks(), 1000);
  }
};
</script>
