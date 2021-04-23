<template>
  <table-display :items="plans" :id="getAnchorId"></table-display>
</template>

<script>
import { mapGetters } from "vuex";

import { plans } from "@/data/pricing/centerTable";
import TableDisplay from "@/components/table/TableDisplay";
export default {
  components: {
    TableDisplay
  },
  data() {
    return {
      plans
    };
  },
  computed: {
    ...mapGetters("links", ["getAnchorId"])
  }
};
</script>
