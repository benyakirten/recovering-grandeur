<template>
  <div class="container">
    <ul class="container__list">
      <li class="container__list__item" v-for="item in list" :key="item">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  &__list {
    list-style: none;
    margin: 2rem auto;
    &__item {
      padding: 0.5rem;
      &::before {
        content: "\2714";
        padding-right: 1rem;
      }
    }
  }
}
</style>
