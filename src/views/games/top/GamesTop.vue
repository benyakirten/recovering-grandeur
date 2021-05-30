<template>
  <base-background image="Games">
    <hero-text>
      <template #primary> Welcome! Welcome! </template>
      <template #secondary>
        Please, just a second. There's so many fun things to do.
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
