<template>
  <story-column :disclaimer="false" :blockquote="false" :extraPara="true">
    <template #heading>
      {{ explanation.heading }}
    </template>
    <template #first-paragraph>
      {{ explanation.firstParagraph }}
    </template>
    <template #second-paragraph>
      {{ explanation.secondParagraph }}
    </template>
    <template #third-paragraph>
      {{ explanation.thirdParagraph }}
    </template>
    <template #fourth-paragraph>
      {{ explanation.fourthParagraph }}
    </template>
    <template #fifth-paragraph>
      {{ explanation.fifthParagraph }}
    </template>
    <template #sixth-paragraph>
      {{ explanation.sixthParagraph }}
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

<style lang="scss" scoped></style>
