<template>
  <base-layout topHeight="75rem" centerHeight="0" bottomHeight="0">
    <template #top>
      <base-background clipPath="none" image="Scout">
        <hero-text>
          <template #primary>
            Unfortunately, your page wasn't found!
          </template>
          <template #secondary>
            We suggest you find a better link from the right side. It's best not
            to linger 'round thes'a parts.
          </template>
        </hero-text>
      </base-background>
    </template>
  </base-layout>
</template>

<script>
import { mapActions } from "vuex";

import BaseLayout from "@/components/ui/BaseLayout";
import BaseBackground from "@/components/ui/BaseBackground";
import HeroText from "@/components/general/HeroText";
export default {
  components: {
    BaseLayout,
    BaseBackground,
    HeroText
  },
  methods: {
    ...mapActions("links", ["enlivenLinks"]),
    ...mapActions("colorScheme", ["setDefaultColors"])
  },
  mounted() {
    this.setDefaultColors();
    setTimeout(() => this.enlivenLinks(), 1000);
  }
};
</script>

<style lang="scss" scoped></style>
