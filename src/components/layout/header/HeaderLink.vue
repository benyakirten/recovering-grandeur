<template>
  <div class="link-container" @click="linkClicked">
    <p class="link-container__link" :style="headerLinkColor">
      {{ linkName }}
    </p>
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
    ...mapActions("links", ["toggleLink"]),
    linkClicked() {
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
  height: 100%;
  transform: skewX(25deg);
  cursor: pointer;

  &:not(:first-child) {
    margin-top: 2rem;
  }

  &__link {
    // The links are no longer router links
    // so that the whole div can be clicked, and
    // that made the router link redundant
    font-size: $font-size-xl;
    text-decoration: none;

    transition: $transition-normal;
  }
}
</style>
