<template>
  <base-caption>
    <template #caption> Configurable Settings </template>
    <template #content>
      <base-column>
        <AboutBottomSettings />
        <AboutBottomDisclaimer />
      </base-column>
    </template>
  </base-caption>
</template>

<script>
import BaseCaption from "@/components/ui/BaseCaption";
import BaseColumn from "@/components/ui/BaseColumn";
import AboutBottomSettings from "./AboutBottomSettings";
import AboutBottomDisclaimer from "./AboutBottomDisclaimer";
export default {
  components: {
    BaseCaption,
    BaseColumn,
    AboutBottomSettings,
    AboutBottomDisclaimer
  }
};
</script>
