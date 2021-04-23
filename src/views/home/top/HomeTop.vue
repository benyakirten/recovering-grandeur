<template>
  <base-background image="Monkey">
    <hero-text color="#fafafa">
      <template #primary>
        Recovering Grandeur<sup class="small-text">&copy;</sup>
      </template>
      <template #secondary>
        A highly performant gateway forwarding protocol and human hospital
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
