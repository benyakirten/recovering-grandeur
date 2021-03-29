<template>
  <div class="container"></div>
</template>

<script>
export default {
  props: {
    numberOfDivs: {
      type: Number,
      required: false,
      default: () => 8
    }
  },
  computed: {
    divEls() {
      const _list = [];
      for (let i = 0; i < this.numberOfDivs; i++) {
        const div = document.createElement('div');
        div.style.height = '1px';
        div.style.width = '2rem';
        div.style.position = 'absolute';
        div.style.top = 0;
      }
      return _list;
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  margin: 1rem auto;
  height: 85%;
  width: 85%;
  border-radius: 25%;
  border: 1px solid $color-white;
}
</style>