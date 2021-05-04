<template>
  <base-layout>
    <template #top>
      <HomeTop />
    </template>
    <template #center>
      <HomeCenter v-if="!breakpointActive" />
      <HomeBottom v-else />
    </template>
    <template #bottom>
      <HomeBottom v-if="!breakpointActive" />
      <HomeCenter v-else />
    </template>
  </base-layout>
</template>

<script>
import { mapState } from "vuex";

import { checkBreakpointActive } from "@/utils/other";

import BaseLayout from "@/components/ui/BaseLayout";
import HomeTop from "./top/HomeTop";
import HomeCenter from "./center/HomeCenter";
import HomeBottom from "./bottom/HomeBottom";
export default {
  components: {
    BaseLayout,
    HomeTop,
    HomeCenter,
    HomeBottom
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
    }
  }
};
</script>
