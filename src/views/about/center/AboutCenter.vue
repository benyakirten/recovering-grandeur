<template>
  <base-two-pages>
    <template #front>
      <AboutCenterFront />
    </template>
    <template #back>
      <AboutCenterBack />
    </template>
  </base-two-pages>
</template>

<script>
import BaseTwoPages from "@/components/ui/BaseTwoPages";
import AboutCenterFront from "./front/AboutCenterFront";
import AboutCenterBack from "./back/AboutCenterBack";
export default {
  components: {
    BaseTwoPages,
    AboutCenterFront,
    AboutCenterBack
  }
};
</script>
