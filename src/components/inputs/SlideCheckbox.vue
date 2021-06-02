<template>
  <div class="container" :style="shadow">
    <div class="input-container">
      <input
        type="checkbox"
        class="input-container__checkbox"
        :aria-labelledby="name"
        :checked="property"
      />
      <label :for="name" class="input-container__label" @click="onClick" />
    </div>
    <span :name="name" :id="name" class="name">
      <slot>{{ property }}</slot>
    </span>
  </div>
</template>

<script>
export default {
  emits: ["toggle-checked"],
  props: {
    property: {
      type: Boolean,
      required: true
    },
    shadow: {
      type: String,
      required: false,
      default: ""
    },
    name: {
      type: String,
      required: true
    }
  },
  methods: {
    onClick() {
      this.$emit("toggle-checked", this.randomId);
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;

  padding: 0.5rem 2rem;
}

.input-container {
  position: relative;
  width: 8rem;
  height: 3.5rem;
  margin-right: 1rem;

  flex-shrink: 0;

  &__checkbox:checked + &__label {
    background-color: $color-gray-dark-2;
  }

  &__checkbox:checked + &__label::before {
    background-image: radial-gradient(
      circle,
      lighten($color-primary, 8%) 0%,
      $color-primary 50%,
      $color-gray-light-2 100%
    );
    transform: translateX(4.6rem);
  }

  &__checkbox {
    display: none;
  }
  &__label {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    cursor: pointer;

    background-color: $color-gray-light-2;
    transition: all 0.4s;
    border-radius: 3.4rem;

    &::before {
      position: absolute;
      content: "";
      height: 2.5rem;
      width: 2.5rem;
      left: 0.5rem;
      bottom: 0.5rem;
      background-image: radial-gradient(
        circle,
        $color-primary-dark 0%,
        $color-black 100%
      );
      transition: $transition-slow;
      border-radius: 50%;
    }
  }
}
.name {
  display: flex;
  align-items: center;
}
</style>
