<template>
  <base-layout>
    <template #top>
      <HomeTop />
    </template>
    <template #center>
      <HomeCenter />
    </template>
    <template #bottom>
      <HomeBottom />
    </template>
  </base-layout>
</template>

<script>
import BaseLayout from "@/components/ui/BaseLayout";
import HomeTop from "./top/HomeTop";
import HomeCenter from "./center/HomeCenter";
import HomeBottom from "./bottom/HomeBottom";
export default {
  components: {
    BaseLayout,
    HomeTop,
    HomeCenter,
    HomeBottom
  }
};
</script>
