<template>
  <base-background image="Scout">
    <hero-text>
      <template #primary>
        About & Settings
      </template>
      <template #secondary>
        Learn about what Recovering Grandeur is about and change settings
      </template>
    </hero-text>
  </base-background>
</template>

<script>
import BaseBackground from "@/components/ui/BaseBackground";
import HeroText from "@/components/general/HeroText";
export default {
  components: {
    BaseBackground,
    HeroText
  }
};
</script>
