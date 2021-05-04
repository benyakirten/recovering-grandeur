<template>
  <base-caption>
    <template #caption> A sick man has never left our hospital </template>
    <template #content>
      <base-two-columns tabHeight="100rem">
        <template #left>
          <image-column image="Smokestack">
            Some of our advanced techniques?
          </image-column>
        </template>
        <template #right>
          <base-three-rows>
            <template #top>
              <skew-row>
                <portrait-with-text
                  imgName="Portrait2"
                  imgAlt="An abstract expression of jaundice"
                  animation="spin"
                >
                  <template #caption>
                    {{ captions[0] }}
                  </template>
                  <template #text>
                    {{ content[0] }}
                  </template>
                </portrait-with-text>
              </skew-row>
            </template>
            <template #center>
              <skew-row :skew="-25">
                <portrait-with-text
                  imgName="Portrait2"
                  imgAlt="Death is inevitable"
                  animation="spin-back"
                >
                  <template #caption>
                    {{ captions[1] }}
                  </template>
                  <template #text>
                    {{ content[1] }}
                  </template>
                </portrait-with-text>
              </skew-row>
            </template>
            <template #bottom>
              <text-column marginTop="0" marginBottom="0">
                <template #leading>
                  {{ captions[2] }}
                </template>
                <template #main>
                  {{ content[2] }}
                </template>
              </text-column>
            </template>
          </base-three-rows>
        </template>
      </base-two-columns>
    </template>
  </base-caption>
</template>

<script>
import { mapState } from "vuex";

import { checkBreakpointActive, shuffleArray } from "@/utils/other";
import { captions, content } from "@/data/quality/qualityCenter";

import BaseCaption from "@/components/ui/BaseCaption";
import BaseTwoColumns from "@/components/ui/BaseTwoColumns";
import ImageColumn from "@/components/columns/ImageColumn";
import BaseThreeRows from "@/components/ui/BaseThreeRows";
import SkewRow from "@/components/rows/SkewRow";
import PortraitWithText from "@/components/general/PortraitWithText";
import TextColumn from "@/components/columns/TextColumn";
export default {
  components: {
    BaseCaption,
    BaseTwoColumns,
    ImageColumn,
    BaseThreeRows,
    SkewRow,
    PortraitWithText,
    TextColumn
  },
  data() {
    return { captions, content, EVENT_NOT_CHANCE: 10 };
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
      shuffleArray(this.captions);
      shuffleArray(this.content);
    }
  }
};
</script>
