<template>
  <base-two-columns>
    <template #left>
      <BottomLeft />
    </template>
    <template #right>
      <BottomRight />
    </template>
  </base-two-columns>
</template>

<script>
import BaseTwoColumns from "@/components/ui/BaseTwoColumns";
import BottomLeft from "./BottomLeft";
import BottomRight from "./BottomRight";
export default {
  components: {
    BaseTwoColumns,
    BottomLeft,
    BottomRight
  }
};
</script>
