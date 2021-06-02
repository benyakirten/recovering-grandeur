<template>
  <drag-and-drop-lists
    :firstList="getVisibleLinks"
    :secondList="getHiddenLinks"
    @to-right-list="addHiddenLink"
    @to-left-list="addVisibleLink"
  >
    Visible and Hidden Links
    <hover-modal>
      Not all pages are visible right from the beginning. Some will activate and
      others will deactivate. Any links that aren't visible in the top bar
      cannot be reached, even if the url is manually input. This page (about and
      settings) cannot be removed.
    </hover-modal>
    <template #left-caption> Visible Links </template>
    <template #right-caption> Hidden Links </template>
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
    ...mapGetters("links", ["getVisibleLinks", "getHiddenLinks"])
  },
  methods: {
    ...mapActions("links", ["addVisibleLink", "addHiddenLink"])
  }
};
</script>

<style lang="scss" scoped></style>
