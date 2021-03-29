<template>
  <div class="container">
    <base-title class="one-quarter">
      <template #title>
        {{ title }}
      </template>
      <template #subtitle>
        {{ subtitle }}
      </template>
    </base-title>
    <cost-display class="one-quarter">
      <slot></slot>
    </cost-display>
    <vertical-list :list="list" class="two-quarters"></vertical-list>
    <base-button>
      {{ buttonCaption }}
    </base-button>
  </div>
</template>

<script>
import BaseTitle from "@/components/ui/BaseTitle";
import CostDisplay from "@/components/general/CostDisplay";
import VerticalList from "@/components/general/VerticalList";
import BaseButton from "@/components/ui/BaseButton";
export default {
  components: {
    BaseTitle,
    CostDisplay,
    VerticalList,
    BaseButton
  },
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: false,
      default: () => ""
    },
    list: {
      type: Array,
      required: true
    },
    buttonCaption: {
      type: String,
      required: false,
      default: () => "Learn More"
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  min-height: 100%;
}
</style>
