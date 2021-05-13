<template>
  <base-two-columns additionalClass="book">
    <template #left>
      <text-column>
        <template #leading>
          <p class="leading-text">
            {{ title }}
          </p>
        </template>
        <template #main>
          <p class="text" v-html="paragraphs[0]" />
          <p class="text" v-html="paragraphs[1]" />
          <p class="text" v-html="paragraphs[2]" />
          <p class="text" v-html="paragraphs[3]" />
          <p class="small-text" v-html="paragraphs[4]" />
          <p class="small-text" v-html="paragraphs[5]" />
          <div class="small-text" v-html="paragraphs[6]" />
        </template>
      </text-column>
    </template>
    <template #right>
      <image-column
        imgAnim="fold-to-kitty-corner 4s infinite 1s"
        imgClipPath="polygon(0% 100%, 100% 0%, 100% 100%)"
      >
        {{ name }}
      </image-column>
    </template>
  </base-two-columns>
</template>

<script>
import { mapState } from "vuex";

import { checkBreakpointActive, shuffleArray } from "@/utils/other";
import { title, name, paragraphs } from "@/data/home/homeCenterFront";
import BaseTwoColumns from "@/components/ui/BaseTwoColumns";
import TextColumn from "@/components/columns/TextColumn";
import ImageColumn from "@/components/columns/ImageColumn";
export default {
  components: {
    BaseTwoColumns,
    TextColumn,
    ImageColumn
  },
  data() {
    return {
      title,
      paragraphs,
      name,
      EVENT_NOT_CHANCE: 20
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
  },
  mounted() {
    if (this.breakpointActive) {
      shuffleArray(this.paragraphs);
    }
  }
};
</script>

<style lang="scss" scoped>
.leading-text {
  @include respond(phone) {
    padding-top: 2rem;
  }
}
</style>
