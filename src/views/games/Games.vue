<template>
  <base-layout bottomHeight="0">
    <template #top>
      <GamesTop />
    </template>
    <template #center>
      <GamesCenter />
    </template>
  </base-layout>
</template>

<script>
import BaseLayout from "@/components/ui/BaseLayout";
import GamesTop from "./top/GamesTop";
import GamesCenter from "./center/GamesCenter";
export default {
  components: {
    BaseLayout,
    GamesTop,
    GamesCenter
  }
};
</script>
