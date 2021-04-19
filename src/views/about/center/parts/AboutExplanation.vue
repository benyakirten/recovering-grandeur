<template>
  <story-column :disclaimer="false" :blockquote="false" :extraPara="true">
    <template #heading>
      {{ explanation.heading }}
    </template>
    <template #first-paragraph>
      <p class="smaller-tab-text">
        {{ explanation.firstParagraph }}
      </p>
    </template>
    <template #second-paragraph>
      <p class="smaller-tab-text">
        {{ explanation.secondParagraph }}
      </p>
    </template>
    <template #third-paragraph>
      <p class="smaller-tab-text">
        {{ explanation.thirdParagraph }}
      </p>
    </template>
    <template #fourth-paragraph>
      <p class="smaller-tab-text">
        {{ explanation.fourthParagraph }}
      </p>
    </template>
    <template #fifth-paragraph>
      <p class="smaller-tab-text">
        {{ explanation.fifthParagraph }}
      </p>
    </template>
    <template #sixth-paragraph>
      <p class="smaller-tab-text">
        {{ explanation.sixthParagraph }}
      </p>
    </template>
  </story-column>
</template>

<script>
import explanation from "@/data/about/centerBack";
import StoryColumn from "@/components/columns/StoryColumn";
export default {
  components: {
    StoryColumn
  },
  data() {
    return {
      explanation
    };
  }
};
</script>

<style lang="scss" scoped>
.smaller-tab-text {
  @include respond(tab-land) {
    font-size: reduce($font-size-medium, 0.2);
  }
}
</style>
