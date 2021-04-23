<template>
  <base-three-rows>
    <template #top>
      <skew-row>
        <portrait-with-text
          imgName="Portrait1"
          imgAlt="Very Human Indeed"
          :animation="animations[0]"
        >
          <template #caption>
            {{ names[0] }}
          </template>
          <template #text>
            {{ paragraphs[0] }}
          </template>
        </portrait-with-text>
      </skew-row>
    </template>
    <template #center>
      <skew-row :skew="35">
        <portrait-with-text
          imgName="Portrait1"
          imgAlt="Very Human Indeed"
          :rotate="90"
          :animation="animations[1]"
        >
          <template #caption>
            {{ names[1] }}
          </template>
          <template #text>
            {{ paragraphs[1] }}
          </template>
        </portrait-with-text>
      </skew-row>
    </template>
    <template #bottom>
      <skew-row :skew="-15">
        <portrait-with-text
          imgName="Portrait1"
          imgAlt="Very Human Indeed"
          :rotate="180"
          :animation="animations[2]"
        >
          <template #caption>
            {{ names[2] }}
          </template>
          <template #text>
            {{ paragraphs[2] }}
          </template>
        </portrait-with-text>
      </skew-row>
    </template>
  </base-three-rows>
</template>

<script>
import { mapGetters } from "vuex";

import { checkBreakpointActive, shuffleArray } from "@/utils/other";
import { names, paragraphs, animations } from "@/data/home/homeBottom";
import BaseThreeRows from "@/components/ui/BaseThreeRows";
import SkewRow from "@/components/rows/SkewRow";
import PortraitWithText from "@/components/general/PortraitWithText";
export default {
  components: {
    BaseThreeRows,
    SkewRow,
    PortraitWithText
  },
  data() {
    return {
      names,
      paragraphs,
      animations,
      EVENT_NOT_CHANCE: 10
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
    }
  },
  mounted() {
    if (this.breakpointActive) {
      shuffleArray(this.names);
      shuffleArray(this.paragraphs);
      shuffleArray(this.animations);
    }
  }
};
</script>
