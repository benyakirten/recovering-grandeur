<template>
  <table class="table" id="centerTable" :style="tableChangesAtBreakpoint">
    <table-head :items="tableHead"></table-head>
    <table-body :rows="tableBody"></table-body>
  </table>
</template>

<script>
import { mapGetters } from "vuex";
import { checkBreakpointActive } from "@/utils/other";
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
  data() {
    return {
      EVENT_NOT_CHANCE: 25
    };
  },
  computed: {
    ...mapGetters("breakpoint", ["breakpoint", "minimum"]),
    ...mapGetters("settings", ["breakpointEnabled"]),
    breakpointActive() {
      return checkBreakpointActive(
        this.breakpointEnabled,
        this.breakpoint,
        this.minimum,
        this.EVENT_NOT_CHANCE
      );
    },
    tableHead() {
      return this.items[0];
    },
    tableBody() {
      return this.items.slice(1);
    },
    tableChangesAtBreakpoint() {
      return this.breakpointActive
        ? { borderRadius: `${Math.floor(Math.random() * 25)}%` }
        : { borderRadius: "none" };
    }
  }
};
</script>

<style lang="scss" scoped>
.table {
  width: 95%;
  margin: -4rem auto 2rem;

  @include respond(phone) {
    margin: 0 auto;
  }

  font-size: $font-size-large;

  box-shadow: $shadow-normal;
}
</style>
