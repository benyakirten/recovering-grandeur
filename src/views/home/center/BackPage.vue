<template>
  <story-column>
    <template #heading>
      {{ heading }}
    </template>
    <template #first-paragraph>
      <p class="no-margin" v-html="paragraphs[0]" />
    </template>
    <template #second-paragraph>
      <p class="no-margin" v-html="paragraphs[1]" />
    </template>
    <template #blockquote>
      <p class="no-margin" v-html="paragraphs[2]" />
    </template>
    <template #third-paragraph>
      <p class="no-margin" v-html="paragraphs[3]" />
    </template>
    <template #fourth-paragraph>
      <p class="no-margin" v-html="paragraphs[4]" />
    </template>
    <template #fifth-paragraph>
      <p class="no-margin" v-html="paragraphs[5]" />
    </template>
  </story-column>
</template>

<script>
import { mapState } from "vuex";

import { checkBreakpointActive, shuffleSmallArray } from "@/utils/other";
import { heading, paragraphs } from "@/data/home/homeCenterBack";
import StoryColumn from "@/components/columns/StoryColumn";
export default {
  components: {
    StoryColumn
  },
  data() {
    return { heading, paragraphs, EVENT_NOT_CHANCE: 10 };
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
      shuffleSmallArray(this.paragraphs);
    }
  }
};
</script>
