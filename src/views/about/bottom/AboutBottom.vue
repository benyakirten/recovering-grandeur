<template>
  <base-caption>
    <template #caption> Configurable Settings </template>
    <template #content>
      <base-two-columns>
        <template #left>
          <div class="left-container">
            <slide-checkbox
              :property="headerCanvasEnabled"
              @toggle-checked="toggleHeaderCanvas"
            >
              <span class="slider-desc">
                Header Canvas
                {{ headerCanvasEnabled ? "Enabled" : "Disabled" }}
              </span>
              <hover-modal>
                The header canvas displays the circles when hovering over a
                link. Though it's ineffeciency is the point, disabling it will
                improve performance.
              </hover-modal>
            </slide-checkbox>
            <base-foldout :enableContent="headerCanvasEnabled">
              <template #top>
                Header Canvas Options
              </template>
              STUFF!
            </base-foldout>
            <slide-checkbox
              :property="clickAnimationEnabled"
              @toggle-checked="toggleClickAnimation"
            >
              <span class="slider-desc">
                Click Animation
                {{ clickAnimationEnabled ? "Enabled" : "Disabled" }}
              </span>
              <hover-modal>
                The click animation is the brown circle that radiates out from
                anywhere you click. It is not particularly performance
                intensive, but it is highly annoying.
              </hover-modal>
            </slide-checkbox>
          </div>
        </template>
        <template #right> RIGHT </template>
      </base-two-columns>
    </template>
  </base-caption>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import BaseTwoColumns from "@/components/ui/BaseTwoColumns";
import BaseCaption from "@/components/ui/BaseCaption";
import SlideCheckbox from "@/components/general/SlideCheckbox";
import HoverModal from "@/components/general/HoverModal";
import BaseFoldout from "@/components/ui/BaseFoldout";
export default {
  components: {
    BaseTwoColumns,
    SlideCheckbox,
    BaseCaption,
    HoverModal,
    BaseFoldout
  },
  methods: {
    ...mapActions("settings", ["toggleClickAnimation", "toggleHeaderCanvas"])
  },
  computed: {
    ...mapGetters("settings", ["clickAnimationEnabled", "headerCanvasEnabled"])
  }
};
</script>

<style lang="scss" scoped>
.left-container {
  display: flex;
  flex-direction: column;

  margin: 4rem;
}
.slider-desc {
  color: $color-primary-dark;
  font-size: $font-size-medium;
}
</style>
