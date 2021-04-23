<template>
  <base-caption>
    <template #caption>
      The Best Treatment Your Money Can Pay For
    </template>
    <template #content>
      <base-two-pages transitionStyle="right">
        <template #front>
          <FrontPage />
        </template>
        <template #back>
          <BackPage />
        </template>
      </base-two-pages>
    </template>
  </base-caption>
</template>

<script>
import BaseCaption from "@/components/ui/BaseCaption";
import BaseTwoPages from "@/components/ui/BaseTwoPages";
import FrontPage from "./FrontPage";
import BackPage from "./BackPage";
export default {
  components: {
    BaseCaption,
    BaseTwoPages,
    FrontPage,
    BackPage
  }
};
</script>
