<template>
  <base-layout bottomHeight="85rem">
    <template #top>
      <QualityTop />
    </template>
    <template #center>
      <QualityCenter />
    </template>
    <template #bottom>
      <QualityBottom />
    </template>
  </base-layout>
</template>

<script>
import { mapActions } from "vuex";
import BaseLayout from "@/components/ui/BaseLayout";
import QualityTop from "./top/QualityTop";
import QualityCenter from "./center/QualityCenter";
import QualityBottom from "./bottom/QualityBottom";
export default {
  components: {
    BaseLayout,
    QualityTop,
    QualityCenter,
    QualityBottom
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
    this.setHeaderLinkColor("#2998ff");
    this.setHeaderOpacity(0.6);
    setTimeout(() => this.enlivenLinks(), 1000);
  }
};
</script>

<style lang="scss" scoped></style>
