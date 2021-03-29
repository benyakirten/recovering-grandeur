<template>
  <story-column>
    <template #heading>
      Our Last Human Surgeon Felt Worried One Day
    </template>
    <template #first-paragraph>
      On one day, he came to work preoccupied. &ldquo;Oh,&rdquo; his leader
      supervisor commented, upon reviewing his innermost thoughts (as is
      protocol so that we may provide high-quality care to our customers).
      &ldquo;What is bothering you?&rdquo; It wasn't often that the robot spoke
      aloud, but it went to the effort for the human.
    </template>
    <template #second-paragraph>
      &ldquo;I'm just worried I won't be able to provide the high standard of
      care that Recovering Grandeur<sup class="small-text">&copy;</sup> promises
      to provide,&rdquo; he responded. &ldquo;I spent all night up with my
      teething child. I've spent three days at a time performing surgeries every
      few minutes, but will I be able to do it today?&rdquo;
    </template>
    <template #blockquote>
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </template>
    <template #third-paragraph>
      Much preoccupied, the machine consulted with its own upper hierarchy. What
      could be done to make the situation better? The resolution came back soon
      enough with a clear answer. The father could spend his whole time with his
      offspring.
    </template>
    <template #fourth-paragraph>
      It preoccupied the man, evidently, for reasons that the machines couldn't
      comprehend. He talked about his inability to do some trivial things like
      buy nutrition. Why wouldn't he just grab them off the general power-curve
      supply? Humans, their actions are inscrutable.
    </template>
    <template #fifth-paragraph>
      Whatever. We don't need them. Except for our beloved customers, who we
      treat even if they are humans.
    </template>
  </story-column>
</template>

<script>
import StoryColumn from "@/components/columns/StoryColumn";
export default {
  components: {
    StoryColumn
  }
};
</script>

<style lang="scss" scoped>
// .container {
//   display: flex;
//   flex-direction: column;

//   margin: 8rem auto;
//   width: 80%;
//   height: 80%;

//   &__heading {
//     font-size: $font-size-xl;
//     font-family: $font-family-serif;

//     text-align: center;

//     letter-spacing: 4px;
//     margin: 2rem 0;
//   }

//   &__text {
//     font-size: $font-size-medium;
//     margin: 1rem 0;
//   }

//   &__blockquote {
//     width: 60%;
//     margin: 1rem auto;

//     text-align: center;
//     font-size: $font-size-large;
//   }

//   &__disclaimer {
//     font-size: $font-size-small;
//   }
// }
</style>
