<template>
  <table-display :items="tableItems" :id="getAnchorId"></table-display>
</template>

<script>
import { mapGetters } from "vuex";

import { pricingTable } from "@/data/pricing/CenterTable";
import TableDisplay from "@/components/table/TableDisplay";
export default {
  components: {
    TableDisplay
  },
  computed: {
    ...mapGetters("links", ["getAnchorId"]),
    tableItems() {
      return pricingTable;
    }
  }
};
</script>
