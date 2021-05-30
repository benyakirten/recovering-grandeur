<template>
  <div class="quality-bottom-container">
    <base-caption>
      <template #caption> A Testimonial From a Survivor </template>
      <template #content>
        <story-column>
          <template #heading>
            Now given a unique name, e0db2e77-f99f-42d4-956b-2ec431eb594c, tells
            its story
          </template>
          <template #first-paragraph>
            <p class="no-margin" v-html="paras[0]" />
          </template>
          <template #second-paragraph>
            <p class="no-margin" v-html="paras[1]" />
          </template>
          <template #blockquote>
            <p class="no-margin" v-html="paras[2]" />
          </template>
          <template #third-paragraph>
            <p class="no-margin" v-html="paras[3]" />
          </template>
          <template #fourth-paragraph>
            <p class="no-margin" v-html="paras[4]" />
          </template>
          <template #fifth-paragraph>
            <p class="no-margin" v-html="paras[5]" />
          </template>
        </story-column>
      </template>
    </base-caption>
  </div>
</template>

<script>
import { mapState } from "vuex";

import { checkBreakpointActive, shuffleSmallArray } from "@/utils/other";
import { heading, paras } from "@/data/quality/qualityBottom";
import BaseCaption from "@/components/ui/BaseCaption";
import StoryColumn from "@/components/columns/StoryColumn";
export default {
  components: {
    BaseCaption,
    StoryColumn
  },
  data() {
    return { heading, paras, EVENT_NOT_CHANCE: 10 };
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
.quality-bottom-container {
  padding: 4rem 0;
  margin-top: 8rem;
  border-radius: $border-radius-standard;
  box-shadow: $shadow-normal;
}
</style>
