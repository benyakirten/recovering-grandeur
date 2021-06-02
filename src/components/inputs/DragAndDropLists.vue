<template>
  <div class="container">
    <h2 class="explanation">
      <slot></slot>
    </h2>
    <div class="list-container">
      <ul
        class="list-container__list"
        :id="`left-list-${name}`"
        @dragover.prevent="addClass(`left-list-${name}`, 'hovered')"
        @dragleave="removeClass(`left-list-${name}`, 'hovered')"
        @drop="emitDrop(`left-list`)"
      >
        <h3 class="list-container__list__caption">
          <slot name="left-caption"></slot>
        </h3>
        <li
          class="list-container__list__item"
          v-for="item in firstList"
          :key="item"
          :id="`${item}-${name}`"
          draggable="true"
          @click="onClick(item, 'to-right-list')"
          @dragstart="onDragstart($event, item)"
          @dragend="onDragend"
        >
          {{ item }}
        </li>
      </ul>
      <ul
        class="list-container__list"
        :id="`right-list-${name}`"
        @dragover.prevent="addClass(`right-list-${name}`, 'hovered')"
        @dragleave="removeClass(`right-list-${name}`, 'hovered')"
        @drop="emitDrop(`right-list`)"
      >
        <h3 class="list-container__list__caption">
          <slot name="right-caption"></slot>
        </h3>
        <li
          class="list-container__list__item"
          v-for="item in secondList"
          :key="item"
          :id="`item-${name}`"
          draggable="true"
          @click="onClick(item, 'to-left-list')"
          @dragstart="onDragstart($event, item)"
          @dragend="onDragend"
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
    },
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      draggedItem: null
    };
  },
  methods: {
    onDragstart(e, item) {
      // Data Transfer was not always setting the data, hence using data in Vue
      this.draggedItem = item;
      this.addClass(e.target.id, "hovering");
    },
    addClass(id, cls) {
      if (
        this.firstList.includes(this.draggedItem) ||
        this.secondList.includes(this.draggedItem)
      ) {
        document.getElementById(id).classList.add(cls);
      }
    },
    removeClass(id, cls) {
      const el = document.getElementById(id);
      if (el.classList.contains(cls)) {
        el.classList.remove(cls);
      }
    },
    onClick(item, target) {
      this.$emit(target, item);
    },
    emitDrop(destination) {
      if (
        this.firstList.includes(this.draggedItem) ||
        this.secondList.includes(this.draggedItem)
      ) {
        this.$emit(`to-${destination}`, this.draggedItem);
        this.removeClass(`${destination}-${this.name}`, "hovered");
      }
    },
    onDragend(e) {
      this.draggedItem = null;
      e.target.classList.remove("hovering");
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

      cursor: pointer;

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
