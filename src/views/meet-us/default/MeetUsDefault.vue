<template>
  <base-layout centerHeight="0" bottomHeight="0">
    <template #top>
      <MeetUsTop />
    </template>
  </base-layout>
</template>

<script>
import { mapActions } from "vuex";
import BaseLayout from "@/components/ui/BaseLayout";
import MeetUsTop from "./top/MeetUsTop";
export default {
  components: {
    BaseLayout,
    MeetUsTop
  },
  methods: {
    ...mapActions("colorScheme", [
      "setHeaderBackgroundColor",
      "setHeaderLinkColor",
      "setHeaderOpacity"
    ]),
    ...mapActions("links", ["enlivenLinks"])
  },
  mounted() {
    this.setHeaderBackgroundColor("#2c2c2c");
    this.setHeaderLinkColor("#ff7730");
    this.setHeaderOpacity(0.4);
    setTimeout(() => this.enlivenLinks(), 1000);
  }
};
</script>
