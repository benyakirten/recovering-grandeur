<template>
  <table-display :items="plans" :id="anchorId"></table-display>
</template>

<script>
import { mapState } from "vuex";

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
    ...mapState("links", ["anchorId"])
  }
};
</script>
