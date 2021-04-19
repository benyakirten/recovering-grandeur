<template>
  <base-two-pages>
    <template #front>
      <base-two-columns shadow="none">
        <template #left>
          <AboutMe />
        </template>
        <template #right>
          <AboutBook />
        </template>
      </base-two-columns>
    </template>
    <template #back>
      <AboutExplanation />
    </template>
  </base-two-pages>
</template>

<script>
import BaseTwoPages from "@/components/ui/BaseTwoPages";
import BaseTwoColumns from "@/components/ui/BaseTwoColumns";
import AboutBook from "../parts/AboutBook";
import AboutMe from "../parts/AboutMe";
import AboutExplanation from "../parts/AboutExplanation";
export default {
  components: {
    BaseTwoPages,
    BaseTwoColumns,
    AboutBook,
    AboutMe,
    AboutExplanation
  }
};
</script>
