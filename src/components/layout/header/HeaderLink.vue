<template>
  <div :class="containerClass" @click="onClick">
    <p :class="linkClass" :style="{ color: headerLinkColor }">
      {{ linkName }}
    </p>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  props: {
    linkRoute: {
      type: String,
      required: true
    },
    linkName: {
      type: String,
      required: true
    },
    linkStyle: {
      type: String,
      required: false,
      default: ""
    }
  },
  computed: {
    ...mapState("colorScheme", ["headerLinkColor"]),
    containerClass() {
      return this.linkStyle
        ? `link-container-${this.linkStyle}`
        : "link-container";
    },
    linkClass() {
      return this.linkStyle
        ? `link-container-${this.linkStyle}__link`
        : "link-container__link";
    }
  },
  methods: {
    ...mapActions("links", ["toggleLink"]),
    onClick() {
      if (this.$route.fullPath !== this.linkRoute) {
        this.toggleLink(this.linkName);
        this.$router.push(this.linkRoute);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.link-container {
  cursor: pointer;
  transform: skewX(25deg);
  margin-top: 2rem;

  &__link {
    // The links are no longer router links
    // so that the whole div can be clicked, and
    // that made the router link redundant
    font-size: $font-size-xl;
    text-decoration: none;
    transition: $transition-normal;
  }
}

.link-container-alternate {
  &:not(:last-child) {
    margin-right: 1rem;
  }
  &__link {
    cursor: pointer;
    font-size: $font-size-large;
    @include respond(tab-port) {
      font-size: reduce($font-size-large, 0.2);
    }
    @include respond(phone) {
      font-size: increase($font-size-large, 0.2);
    }
    opacity: 0.9;
    transform: skewX(25deg);
    transition: $transition-slow;

    &:hover {
      opacity: 1;
      transform: scale(1.05) skewX(25deg);
      letter-spacing: 1px;
    }
  }
}
</style>
