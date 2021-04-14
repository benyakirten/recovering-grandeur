<template>
  <div class="container">
    <div class="title">
      <base-title>
        <template #title>
          {{ title }}
        </template>
        <template #subtitle>
          {{ subtitle }}
        </template>
      </base-title>
    </div>
    <div class="cost-display">
      <cost-display>
        <slot></slot>
      </cost-display>
    </div>
    <div class="list">
      <vertical-list :list="list"></vertical-list>
    </div>
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
  height: 100%;
  padding: 1rem 0;
}
.title {
  height: 20rem;
}
.cost-display {
  height: 10rem;
}
</style>
