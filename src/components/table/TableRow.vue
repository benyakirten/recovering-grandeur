<template>
  <tr class="table-row">
    <td class="table-row__lead-item">
      {{ firstItem }}
    </td>
    <td class="table-row__item" v-for="item in allOtherItems" :key="item">
      {{ item ? item : "N/A" }}
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    row: {
      type: Array,
      required: true
    }
  },
  computed: {
    firstItem() {
      return this.row[0];
    },
    allOtherItems() {
      return this.row.slice(1);
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
    font-family: $font-family-sans;
    text-align: center;
  }
}
</style>
