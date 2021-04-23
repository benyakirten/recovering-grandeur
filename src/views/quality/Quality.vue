<template>
  <base-layout bottomHeight="85rem">
    <template #top>
      <QualityTop />
    </template>
    <template #center>
      <QualityCenter />
    </template>
    <template #bottom>
      <QualityBottom />
    </template>
  </base-layout>
</template>

<script>
import BaseLayout from "@/components/ui/BaseLayout";
import QualityTop from "./top/QualityTop";
import QualityCenter from "./center/QualityCenter";
import QualityBottom from "./bottom/QualityBottom";
export default {
  components: {
    BaseLayout,
    QualityTop,
    QualityCenter,
    QualityBottom
  }
};
</script>
