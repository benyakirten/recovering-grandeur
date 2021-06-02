<template>
  <drag-and-drop-lists
    :firstList="getEnabledTransitions"
    :secondList="getDisabledTransitions"
    @to-right-list="disableTransition"
    @to-left-list="enableTransition"
    name="transition"
  >
    Scene transitions
    <hover-modal>
      Whenever navigating between different pages (such as with the header), one
      of the enabled transitions is activated at random. Transitions can be
      transferred from one list to the other by either clicking on it or
      dragging it over.
    </hover-modal>
    <template #left-caption>
      Enabled Transitions
    </template>
    <template #right-caption>
      Disabled Transitions
    </template>
  </drag-and-drop-lists>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import DragAndDropLists from "@/components/inputs/DragAndDropLists";
import HoverModal from "@/components/general/HoverModal";
export default {
  components: {
    DragAndDropLists,
    HoverModal
  },
  computed: {
    ...mapGetters("links", ["getEnabledTransitions", "getDisabledTransitions"])
  },
  methods: {
    ...mapActions("links", ["enableTransition", "disableTransition"])
  }
};
</script>

<style lang="scss" scoped></style>
