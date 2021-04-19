<template>
  <base-layout bottomHeight="60rem">
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
