<template>
  <base-two-columns phoneHeight="85rem">
    <template #left>
      <text-column>
        <template #leading> I had much more sympathy </template>
        <template #main>
          <p class="text big-tab-text">
            {{ paras[0] }}
          </p>
          <p class="text big-tab-text">
            {{ paras[1] }}
          </p>
          <p class="text big-tab-text">
            {{ paras[2] }}
          </p>
          <p class="text big-tab-text">
            {{ paras[3] }}
          </p>
        </template>
      </text-column>
    </template>
    <template #right>
      <image-column image="Portrait4">
        c93f1f94-406e-44c2-8100-05c943f14663, Empathy Generator
      </image-column>
    </template>
  </base-two-columns>
</template>

<script>
import { mapState } from "vuex";

import { checkBreakpointActive, shuffleSmallArray } from "@/utils/other";
import { paras } from "@/data/meet-us/meetUsBottom";

import BaseTwoColumns from "@/components/ui/BaseTwoColumns";
import ImageColumn from "@/components/columns/ImageColumn";
import TextColumn from "@/components/columns/TextColumn";
export default {
  components: {
    BaseTwoColumns,
    ImageColumn,
    TextColumn
  },
  data() {
    return { paras, EVENT_NOT_CHANCE: 10 };
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
  },
  mounted() {
    if (this.breakpointActive) {
      shuffleSmallArray(this.paras);
    }
  }
};
</script>

<style lang="scss" scoped>
.text {
  margin: 1.5rem 0;
}
</style>
