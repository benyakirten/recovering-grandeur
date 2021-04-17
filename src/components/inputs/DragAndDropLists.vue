<template>
  <div class="container">
    <h2 class="explanation">
      <slot></slot>
    </h2>
    <div class="list-container">
      <ul
        class="list-container__list"
        id="left-list"
        @dragover.prevent="addClass('left-list', 'hovered')"
        @dragleave="removeClass('left-list', 'hovered')"
        @drop="emitDrop($event, 'left-list')"
      >
        <h3 class="list-container__list__caption">
          <slot name="left-caption"></slot>
        </h3>
        <li
          class="list-container__list__item"
          v-for="item in firstList"
          :key="item"
          :id="item"
          draggable="true"
          @dragstart="dragStart($event, item)"
          @dragend="removeHovering"
        >
          {{ item }}
        </li>
      </ul>
      <ul
        class="list-container__list"
        id="right-list"
        @dragover.prevent="addClass('right-list', 'hovered')"
        @dragleave="removeClass('right-list', 'hovered')"
        @drop="emitDrop($event, 'right-list')"
      >
        <h3 class="list-container__list__caption">
          <slot name="right-caption"></slot>
        </h3>
        <li
          class="list-container__list__item"
          v-for="item in secondList"
          :key="item"
          :id="item"
          draggable="true"
          @dragstart="dragStart($event, item)"
          @dragend="removeHovering"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["to-left-list", "to-right-list"],
  props: {
    firstList: {
      type: Array,
      required: true
    },
    secondList: {
      type: Array,
      required: true
    }
  },
  methods: {
    dragStart(e, item) {
      e.dataTransfer.setData("transition", item);
      this.addClass(e.srcElement.id, "hovering");
    },
    addClass(id, cls) {
      document.getElementById(id).classList.add(cls);
    },
    removeClass(id, cls) {
      document.getElementById(id).classList.remove(cls);
    },
    emitDrop(e, id) {
      this.$emit(`to-${id}`, e.dataTransfer.getData("transition"));
      this.removeClass(id, "hovered");
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  font-family: $font-family-sans;
  font-size: $font-size-large;
}
.explanation {
  text-align: center;
  letter-spacing: 2px;
  margin: 2rem 0;
}
.list-container {
  display: flex;
  &__list {
    list-style: none;

    width: 33%;
    min-height: 36rem;

    margin: 0 auto;
    box-shadow: $shadow-small;
    &__caption {
      text-align: center;
      height: 6rem;
    }
    &__item {
      display: flex;
      align-items: center;
      justify-content: center;

      height: 6rem;

      text-transform: uppercase;

      border: 1px solid black;
      box-shadow: $shadow-small;
    }
  }
}
.hovered {
  background-color: rgba($color-gray-dark-1, 0.6);
}
.hovering {
  background-color: rgba($color-primary, 0.6);
  border-radius: 1rem;
  border: 3px solid gray;
}
</style>
