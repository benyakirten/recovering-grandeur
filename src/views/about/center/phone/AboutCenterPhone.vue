<template>
  <div class="about-container">
    <div class="about-container__para about-me">
      <AboutMe />
    </div>
    <div class="about-container__para about-book">
      <AboutBook />
    </div>
    <div class="about-container__para about-explanation">
      <AboutExplanation />
    </div>
  </div>
</template>

<script>
import AboutMe from "../parts/AboutMe";
import AboutBook from "../parts/AboutBook";
import AboutExplanation from "../parts/AboutExplanation";
export default {
  components: {
    AboutMe,
    AboutBook,
    AboutExplanation
  }
};
</script>

<style lang="scss" scoped>
.about-container {
  &__para {
    box-shadow: $shadow-small;
    padding: 2rem 0;
  }
}
</style>
