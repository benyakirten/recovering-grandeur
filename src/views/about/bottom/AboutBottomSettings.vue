<template>
  <div class="options-container">
    <HeaderCanvasOptions />
    <ClickAnimationOptions />
    <BreakpointOptions />
    <TransitionsOptions />
    <VisibleLinksOptions />
    <div class="button-container">
      <base-button>
        Reset All Settings
      </base-button>
    </div>
  </div>
</template>

<script>
import HeaderCanvasOptions from "./HeaverCanvasOptions/HeaderCanvasOptions";
import ClickAnimationOptions from "./ClickAnimationsOptions/ClickAnimationsOptions";
import BreakpointOptions from "./BreakpointOptions/BreakpointOptions";
import TransitionsOptions from "./DragLists/TransitionsOptions";
import VisibleLinksOptions from "./DragLists/VisibleLinksOptions";
import BaseButton from "@/components/ui/BaseButton";
export default {
  components: {
    HeaderCanvasOptions,
    ClickAnimationOptions,
    BreakpointOptions,
    TransitionsOptions,
    VisibleLinksOptions,
    BaseButton
  }
};
</script>

<style lang="scss" scoped>
.options-container {
  display: flex;
  flex-direction: column;

  padding: 4rem;
}

.button-container {
  display: flex;
  justify-content: center;
  margin-top: 4rem;
}
</style>
