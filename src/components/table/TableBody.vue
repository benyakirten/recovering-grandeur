<template>
  <tbody class="body">
    <table-row
      v-for="(row, idx) in rows"
      :col="idx + 1"
      :key="row[0]"
      :row="row"
    ></table-row>
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
