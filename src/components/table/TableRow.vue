<template>
  <tr class="table-row">
    <td class="table-row__lead-item" aria-rowindex="0" :aria-colindex="col">
      {{ firstItem }}
    </td>
    <td
      class="table-row__item"
      v-for="(item, idx) in allOtherItems"
      :key="item"
      :aria-rowindex="idx + 1"
      :aria-colindex="col"
    >
      {{ item ? item : "N/A" }}
    </td>
  </tr>
</template>

<script>
import { mapState } from "vuex";
import { shuffleSmallArray, checkBreakpointActive } from "@/utils/other";
export default {
  props: {
    row: {
      type: Array,
      required: true
    },
    col: {
      type: Number,
      required: false,
      default: 1
    }
  },
  data() {
    return {
      EVENT_NOT_CHANCE: 10
    };
  },
  computed: {
    ...mapState("breakpoint", ["breakpoint", "minimum"]),
    ...mapState("settings", ["breakpointEnabled"]),
    breakpointActive() {
      return checkBreakpointActive(
        this.breakpointEnabled,
        this.breakpoint,
        this.minimum,
        this.EVENT_NOT_CHANCE
      );
    },
    firstItem() {
      return this.row[0];
    },
    allOtherItems() {
      const otherItems = this.row.slice(1);
      if (this.breakpointActive) {
        shuffleSmallArray(otherItems);
      }
      return otherItems;
    }
  }
};
</script>

<style lang="scss" scoped>
.table-row {
  &__lead-item {
    width: 15%;

    letter-spacing: 2px;
    padding: 2rem;

    @include respond(tab-port) {
      width: 8%;
      padding: 0.5rem;
    }

    font-family: $font-family-serif;
    font-weight: bold;

    border-top: 1px solid $color-black;

    background-color: $color-white;
  }
  &__item {
    background-color: $color-gray-light-1;
    border-left: 1px solid $color-black;
    border-top: 1px solid $color-black;

    padding: 0 1rem;
    font-family: $font-family-sans;
    text-align: center;
  }
}
</style>
