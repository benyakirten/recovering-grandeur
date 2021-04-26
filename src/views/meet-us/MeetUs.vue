<template>
  <base-layout>
    <template #top>
      <MeetUsTop />
    </template>
    <template #center>
      <div :style="altStyle">
        <MeetUsCenter />
      </div>
    </template>
    <template #bottom>
      <div :style="altStyle">
        <MeetUsBottom />
      </div>
    </template>
  </base-layout>
</template>

<script>
import { mapGetters } from "vuex";

import { checkBreakpointActive } from "@/utils/other";

import BaseLayout from "@/components/ui/BaseLayout";
import MeetUsTop from "./top/MeetUsTop";
import MeetUsCenter from "./center/MeetUsCenter";
import MeetUsBottom from "./bottom/MeetUsBottom";
export default {
  components: {
    BaseLayout,
    MeetUsTop,
    MeetUsCenter,
    MeetUsBottom
  },
  data() {
    return {
      EVENT_NOT_CHANCE: 80
    };
  },
  computed: {
    ...mapGetters("breakpoint", ["breakpoint", "minimum"]),
    ...mapGetters("settings", ["breakpointEnabled"]),
    breakpointActive() {
      return checkBreakpointActive(
        this.breakpointEnabled,
        this.breakpoint,
        this.minimum,
        this.EVENT_NOT_CHANCE
      );
    },
    altStyle() {
      if (this.breakpointActive) {
        return {
          transform: "rotate(180deg)"
        };
      }
      return {};
    }
  }
};
</script>
