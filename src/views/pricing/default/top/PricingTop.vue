<template>
  <base-background image="Woman">
    <hero-text>
      <template #primary>
        Pricing and Solutions
      </template>
      <template #secondary>
        Recovering Grandeur<sup class="small-text">&copy;</sup>, the only
        hospital to guarantee you'll end up with at least one kidney.
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
