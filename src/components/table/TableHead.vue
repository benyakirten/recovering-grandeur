<template>
  <thead class="head">
    <tr class="head__row">
      <th class="head__row__lead" aria-rowindex="1" aria-colcount="1">
        {{ firstItem }}
      </th>
      <th
        class="head__row__item"
        v-for="(item, idx) in remainingItems"
        :key="item"
        :aria-rowindex="idx + 1"
        aria-colcount="1"
      >
        {{ item }}
      </th>
    </tr>
  </thead>
</template>

<script>
import { mapState } from "vuex";
import { shuffleSmallArray, checkBreakpointActive } from "@/utils/other";
export default {
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
      return this.items[0];
    },
    remainingItems() {
      const otherItems = this.items.slice(1);
      if (this.breakpointActive) {
        shuffleSmallArray(otherItems);
      }
      return otherItems;
    }
  }
};
</script>

<style lang="scss" scoped>
.head {
  font-family: $font-family-serif;
  &__row {
    &__lead {
      padding: 2rem;
      text-align: left;

      @include respond(tab-port) {
        padding: 0.5rem;
      }
      background-color: $color-white;
    }
    &__item {
      padding: 2rem;
      @include respond(tab-port) {
        padding: 0.5rem;
      }
      border-left: 1px solid $color-black;
    }
  }
}
</style>
