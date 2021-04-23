<template>
  <base-background>
    <hero-text>
      <template #primary>
        Meet Our Team
      </template>
      <template #secondary>
        We at Recovering Grandeur<sup class="small-text">&copy;</sup> are
        individuals. We deserve your sympathy.
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
