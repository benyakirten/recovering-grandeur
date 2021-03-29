<template>
  <base-background image="Grand-canyon">
    <hero-text>
      <template #primary>Quality of Care</template>
      <template #secondary>
        A stay at Recovering Grandeur<sup class="small-text">&copy;</sup> is
        unsurpassed<sup class="small-text">&ast;</sup>, and everyone<sup
          class="small-text"
          >&ast;&ast;</sup
        >
        knows it
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
