<template>
  <base-layout>
    <template #top>
      <MeetUsTop />
    </template>
    <template #center>
      <div :style="sectionStyle">
        <MeetUsCenter />
      </div>
    </template>
    <template #bottom>
      <div :style="sectionStyle">
        <MeetUsBottom />
      </div>
    </template>
  </base-layout>
</template>

<script>
import { mapState } from "vuex";

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
    sectionStyle() {
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
