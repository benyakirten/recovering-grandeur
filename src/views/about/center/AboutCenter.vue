<template>
  <AboutCenterNormal v-if="normalScreen" />
  <AboutCenterPhone v-else />
</template>

<script>
import AboutCenterNormal from "./normal/AboutCenterNormal";
import AboutCenterPhone from "./phone/AboutCenterPhone";
export default {
  components: {
    AboutCenterNormal,
    AboutCenterPhone
  },
  computed: {
    normalScreen() {
      return !window.matchMedia("only screen and (max-width: 37.5em)").matches;
    }
  }
};
</script>
