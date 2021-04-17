<template>
  <div class="checkbox">
    <div class="checkbox__slider">
      <slide-checkbox
        :property="clickAnimationEnabled"
        @toggle-checked="toggleAnimation"
      >
        <span class="slider-desc">
          Click Animation
          {{ clickAnimationEnabled ? "Enabled" : "Disabled" }}
        </span>
        <hover-modal>
          {{ clickAnimationToolbar }}
        </hover-modal>
      </slide-checkbox>
    </div>
    <base-foldout
      :enableContent="clickAnimationEnabled"
      name="clickAnimation"
      :showContent="whichDropdownIsOpen === 'clickAnimation'"
      @broadcast-click="toggleOpenDropdown"
    >
      <template #top>Click Animation Settings</template>
      <ClickAnimationsDropdown />
    </base-foldout>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import clickAnimationToolbars from "@/data/about/clickAnimationToolbars";
import SlideCheckbox from "@/components/inputs/SlideCheckbox";
import HoverModal from "@/components/general/HoverModal";
import BaseFoldout from "@/components/ui/BaseFoldout";
import ClickAnimationsDropdown from "./ClickAnimationsDropdown";
export default {
  components: {
    SlideCheckbox,
    HoverModal,
    BaseFoldout,
    ClickAnimationsDropdown
  },
  data() {
    const { clickAnimationToolbar } = clickAnimationToolbars;
    return {
      clickAnimationToolbar
    };
  },
  computed: {
    ...mapGetters("settings", ["clickAnimationEnabled", "whichDropdownIsOpen"])
  },
  methods: {
    ...mapActions("settings", [
      "toggleClickAnimation",
      "toggleOpenDropdown",
      "closeDropdowns"
    ]),
    toggleAnimation() {
      this.toggleClickAnimation();
      if (this.whichDropdownIsOpen === "clickAnimation") {
        this.closeDropdowns();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.checkbox {
  display: flex;
  align-items: flex-start;
  justify-content: center;

  &__slider {
    width: 35rem;
  }
}
.slider-desc {
  color: $color-primary-dark;
  font-size: $font-size-medium;
}
</style>
