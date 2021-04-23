<template>
  <base-layout>
    <template #top>
      <MeetUsTop />
    </template>
    <template #center>
      <MeetUsCenter />
    </template>
    <template #bottom>
      <MeetUsBottom />
    </template>
  </base-layout>
</template>

<script>
import BaseLayout from "@/components/ui/BaseLayout";
import MeetUsTop from "./top/MeetUsTop";
import MeetUsCenter from "./center/MeetUsCenter";
import MeetUsBottom from "./bottom/MeetUsBottom";
export default {
  components: {
    BaseLayout,
    MeetUsTop,
    MeetUsCenter,
    MeetUsBottom
  }
};
</script>
