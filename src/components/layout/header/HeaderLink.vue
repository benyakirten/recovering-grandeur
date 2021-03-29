<template>
  <div class="link-container" @click="toggleLink(linkName)">
    <router-link
      class="link-container__link"
      :style="headerLinkColor"
      :to="linkRoute"
    >
      {{ linkName }}
    </router-link>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  props: {
    linkRoute: {
      type: String,
      required: true
    },
    linkName: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapGetters("colorScheme", ["getHeaderLinkColor"]),
    headerLinkColor() {
      return {
        color: this.getHeaderLinkColor
      };
    }
  },
  methods: {
    ...mapActions("links", ["toggleLink"])
  }
};
</script>

<style lang="scss" scoped>
.link-container {
  height: 100%;
  transform: skewX(25deg);

  &:not(:first-child) {
    margin-top: 2rem;
  }

  &__link:link,
  &__link:visited {
    font-size: $font-size-xl;
    text-decoration: none;

    transition: $transition-normal;
  }
}
</style>
