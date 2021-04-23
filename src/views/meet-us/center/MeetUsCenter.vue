<template>
  <base-caption>
    <template #caption> Hear From Some of Our Staff </template>
    <template #content>
      <base-two-columns phoneHeight="75rem">
        <template #left>
          <image-column image="Portrait3" :imgRotate="180">
            3c4e635f-ecd2-4d37-92d5-4eda61198a66, Compliance Monitor
          </image-column>
        </template>
        <template #right>
          <text-column>
            <template #leading> Yeah, so this dude showed up. </template>
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
      </base-two-columns>
    </template>
  </base-caption>
</template>

<script>
import { mapGetters } from "vuex";

import { checkBreakpointActive, shuffleArray } from "@/utils/other";
import { paras } from "@/data/meet-us/meetUsCenter";

import BaseCaption from "@/components/ui/BaseCaption";
import BaseTwoColumns from "@/components/ui/BaseTwoColumns";
import ImageColumn from "@/components/columns/ImageColumn";
import TextColumn from "@/components/columns/TextColumn";
export default {
  components: {
    BaseCaption,
    BaseTwoColumns,
    ImageColumn,
    TextColumn
  },
  data() {
    return { paras, EVENT_NOT_CHANCE: 10 };
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
      shuffleArray(this.paras);
    }
  }
};
</script>
