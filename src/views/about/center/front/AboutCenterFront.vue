<template>
  <base-two-columns shadow="none">
    <template #left>
      <AboutMe />
    </template>
    <template #right>
      <AboutBook />
    </template>
  </base-two-columns>
</template>

<script>
import BaseTwoColumns from "@/components/ui/BaseTwoColumns";
import AboutBook from "./AboutBook";
import AboutMe from "./AboutMe";
export default {
  components: {
    BaseTwoColumns,
    AboutBook,
    AboutMe
  }
};
</script>
