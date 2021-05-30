<template>
  <base-caption>
    <template #caption> It's only memory. Sorry. </template>
    <template #content>
      <TheGame />
    </template>
  </base-caption>
</template>

<script>
import BaseCaption from "@/components/ui/BaseCaption";
import TheGame from "./TheGame";
export default {
  components: {
    BaseCaption,
    TheGame
  }
};
</script>

<style></style>
