<template>
  <table class="table" id="centerTable">
    <table-head :items="tableHead"></table-head>
    <table-body :rows="tableBody"></table-body>
  </table>
</template>

<script>
import TableHead from "./TableHead";
import TableBody from "./TableBody";
export default {
  components: {
    TableHead,
    TableBody
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  computed: {
    tableHead() {
      return this.items[0];
    },
    tableBody() {
      return this.items.slice(1);
    }
  }
};
</script>

<style lang="scss" scoped>
.table {
  width: 95%;
  margin: -4rem auto;

  font-size: $font-size-large;

  box-shadow: $shadow-normal;
}
</style>
