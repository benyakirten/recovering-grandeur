<template>
  <div class="container" :style="shadow">
    <div class="input-container">
      <input
        :name="randomId"
        type="checkbox"
        class="input-container__checkbox"
        :aria-labelledby="randomId"
        :checked="property"
      />
      <label :for="randomId" class="input-container__label" @click="notify" />
    </div>
    <slot>{{ property }}</slot>
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
      default: () => ""
    }
  },
  computed: {
    randomId() {
      return new Date().toISOString() + Math.floor(Math.random() * 1000);
    },
    randomLabel() {
      return this.randomId + "-label";
    }
  },
  methods: {
    notify() {
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
</style>
