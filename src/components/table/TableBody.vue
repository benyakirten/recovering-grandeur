<template>
  <tbody class="body">
    <table-row v-for="row in rows" :key="row[0]" :row="row"></table-row>
  </tbody>
</template>

<script>
import TableRow from "./TableRow";
export default {
  components: {
    TableRow
  },
  props: {
    rows: {
      type: Array,
      required: true
    }
  }
};
</script>
