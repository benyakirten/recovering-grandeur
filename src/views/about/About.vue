<template>
  <base-layout>
    <template #top>
      <AboutTop />
    </template>
    <template #center>
      <AboutCenter />
    </template>
    <template #bottom>
      <AboutBottom />
    </template>
  </base-layout>
</template>

<script>
import { mapActions } from "vuex";

import BaseLayout from "@/components/ui/BaseLayout";
import AboutTop from "./top/AboutTop";
import AboutCenter from "./center/AboutCenter";
import AboutBottom from "./bottom/AboutBottom";
export default {
  components: {
    BaseLayout,
    AboutTop,
    AboutCenter,
    AboutBottom
  },
  methods: {
    ...mapActions("settings", ["setAllDefaults"]),
    ...mapActions("links", ["setButtonAction"])
  },
  mounted() {
    this.setButtonAction(() => this.setAllDefaults());
  }
};
</script>
