<template>
  <div class="container">
    <div
      :style="headingProperties"
      class="container__heading container__heading--primary"
    >
      <h1>
        <slot name="primary"></slot>
      </h1>
    </div>
    <div
      :style="headingProperties"
      class="container__heading container__heading--secondary"
    >
      <h2>
        <slot name="secondary"></slot>
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      required: false,
      default: "#ffffff",
      validator: value =>
        /(^rgba\([\d]{1,3},\s?[\d]{1,3},\s?[\d]{1,3},\s?(0?\.)?[\d]{1,2}\)$)|(^#(?:[0-9A-F]{3}|[0-9A-F]{6})$)/i.test(
          value
        )
    },
    headingBackgroundColor: {
      type: String,
      required: false,
      default: `rgba(109, 93, 75, 0.3);`,
      validator: value =>
        /^(rgba\([\d]{1,3},\s?[\d]{1,3},\s?[\d]{1,3},\s?(0?\.)?[\d]{1,2}\);?$)|(^#([0-9A-F]{3}|[0-9A-F]{6})$)/i.test(
          value
        )
    }
  },
  computed: {
    headingProperties() {
      return {
        color: this.color,
        backgroundColor: this.headingBackgroundColor
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  @include absolute-position(50%, 75%);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 20rem;
  min-width: 70rem;

  padding: 0 1rem;
  border-radius: 5%;

  text-align: center;

  &__heading {
    background-color: rgba($color-gray-dark-2, 0.3);
    font-family: $font-family-serif;

    @include respond(tab-port) {
      width: 80%;
    }

    @include respond(phone) {
      width: 60%;
      padding: 0 1rem;
    }

    &--primary {
      padding: 1rem;

      font-size: $font-size-xl;
      letter-spacing: 4px;

      @include respond(tab-land) {
        font-size: reduce($font-size-xl, 0.2);
      }

      @include respond(tab-port) {
        font-size: reduce($font-size-xl, 0.4);
      }

      @include respond(phone) {
        font-size: $font-size-xl;
      }

      opacity: 0;
      animation: load-in 2s forwards 2s;
    }

    &--secondary {
      margin-top: -1rem;
      max-width: 65rem;

      font-size: $font-size-large;
      letter-spacing: 2px;

      @include respond(tab-port) {
        font-size: reduce($font-size-large, 0.2);
      }

      opacity: 0;
      animation: load-in 2s forwards 2s;
    }
  }
}
</style>
