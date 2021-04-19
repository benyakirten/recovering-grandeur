<template>
  <div class="checkbox">
    <div class="checkbox__slider">
      <slide-checkbox
        :property="breakpointEnabled"
        @toggle-checked="toggleBreakpoint"
      >
        <span class="slider-desc">
          Breakpoint
          {{ breakpointEnabled ? "Enabled" : "Disabled" }}
        </span>
        <hover-modal>
          {{ breakpointToolbar }}
        </hover-modal>
      </slide-checkbox>
    </div>
    <base-foldout
      :enableContent="breakpointEnabled"
      name="breakpoint"
      :showContent="whichDropdownIsOpen === 'breakpoint'"
      @broadcast-click="toggleOpenDropdown"
    >
      <template #top> Breakpoint Options </template>
      <BreakdownDropdown />
    </base-foldout>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import breakpointToolbars from "@/data/about/breakpointToolbars";
import SlideCheckbox from "@/components/inputs/SlideCheckbox";
import HoverModal from "@/components/general/HoverModal";
import BaseFoldout from "@/components/ui/BaseFoldout";
import BreakdownDropdown from "./BreakpointDropdown";
export default {
  components: {
    SlideCheckbox,
    HoverModal,
    BaseFoldout,
    BreakdownDropdown
  },
  data() {
    const { breakpointToolbar } = breakpointToolbars;
    return {
      breakpointToolbar
    };
  },
  computed: {
    ...mapGetters("settings", ["breakpointEnabled", "whichDropdownIsOpen"])
  },
  methods: {
    ...mapActions("settings", [
      "toggleBreakpointEnabled",
      "toggleOpenDropdown",
      "closeDropdowns"
    ]),
    toggleBreakpoint() {
      this.toggleBreakpointEnabled();
      if (this.whichDropdownIsOpen === "breakpoint") {
        this.closeDropdowns();
      }
    }
  }
};
</script>
