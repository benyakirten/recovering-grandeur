<template>
  <base-layout bottomHeight="85rem">
    <template #top>
      <QualityTop />
    </template>
    <template #center>
      <div :style="altCenterStyle">
        <QualityCenter />
      </div>
    </template>
    <template #bottom>
      <div :style="altBottomStyle">
        <QualityBottom />
      </div>
    </template>
  </base-layout>
</template>

<script>
import { mapGetters } from "vuex";

import { checkBreakpointActive } from "@/utils/other";

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
    altCenterStyle() {
      if (this.breakpointActive) {
        return {
          position: "absolute",
          top: 0,
          left: 0,
          opacity: 0.7
        };
      }
      return {};
    },
    altBottomStyle() {
      if (this.breakpointActive) {
        return {
          marginTop: "-80rem",
          animation: "spin-off 4s infinite ease"
        };
      }
      return {};
    }
  }
};
</script>
