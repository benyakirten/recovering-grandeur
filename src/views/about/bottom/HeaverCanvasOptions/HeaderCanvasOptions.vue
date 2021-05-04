<template>
  <div class="checkbox">
    <div class="checkbox__slider">
      <slide-checkbox
        :property="headerCanvasEnabled"
        @toggle-checked="toggleCanvas"
      >
        <span class="slider-desc">
          Header Canvas
          {{ headerCanvasEnabled ? "Enabled" : "Disabled" }}
        </span>
        <hover-modal>
          {{ headerCanvasToolbar }}
        </hover-modal>
      </slide-checkbox>
    </div>
    <base-foldout
      :enableContent="headerCanvasEnabled"
      name="headerCanvas"
      :showContent="dropdownOpen === 'headerCanvas'"
      @broadcast-click="toggleOpenDropdown"
    >
      <template #top> Header Canvas Options </template>
      <HeaderCanvasDropdown />
    </base-foldout>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

import headerCanvasToolbars from "@/data/about/headerCanvasToolbars";
import SlideCheckbox from "@/components/inputs/SlideCheckbox";
import HoverModal from "@/components/general/HoverModal";
import BaseFoldout from "@/components/ui/BaseFoldout";
import HeaderCanvasDropdown from "./HeaderCanvasDropdown";
export default {
  components: {
    SlideCheckbox,
    HoverModal,
    BaseFoldout,
    HeaderCanvasDropdown
  },
  data() {
    const { headerCanvasToolbar } = headerCanvasToolbars;
    return {
      headerCanvasToolbar
    };
  },
  computed: {
    ...mapState("settings", ["headerCanvasEnabled", "dropdownOpen"])
  },
  methods: {
    ...mapActions("settings", [
      "toggleHeaderCanvas",
      "toggleOpenDropdown",
      "closeDropdowns"
    ]),
    toggleCanvas() {
      this.toggleHeaderCanvas();
      if (this.dropdownOpen === "headerCanvas") {
        this.closeDropdowns();
      }
    }
  }
};
</script>
