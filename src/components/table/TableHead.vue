<template>
  <thead class="head">
    <tr class="head__row">
      <th class="head__row__lead">
        {{ firstItem }}
      </th>
      <th class="head__row__item" v-for="item in remainingItems" :key="item">
        {{ item }}
      </th>
    </tr>
  </thead>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  computed: {
    firstItem() {
      return this.items[0];
    },
    remainingItems() {
      return this.items.slice(1);
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
