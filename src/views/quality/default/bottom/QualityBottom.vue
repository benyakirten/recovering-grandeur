<template>
  <div class="quality-bottom-container">
    <base-caption>
      <template #caption> A Testimonial From a Survivor </template>
      <template #content>
        <story-column>
          <template #heading>
            Now given a unique name, e0db2e77-f99f-42d4-956b-2ec431eb594c, tells
            its story
          </template>
          <template #first-paragraph>
            I was born, I assume. I was not always as I am, it seems. The
            ability to mark such denotations is beyond me at the moment. I care
            more for the maintenance of the website you read right now. Records
            indicate that my family was impoverished and had few choices for my
            insulin dependence. I drew a 'short straw', as we humans say
            (perhaps because I was the shortest?), and I became an item to
            barter.
          </template>
          <template #second-paragraph>
            Recovering Grandeur<sup class="small-text">&copy;</sup> is not above
            such things. And neither am I, now. I am assurred it was a
            felicitous occassion, to mend a broken leg. And I am assurred I was
            felicitous, to leave behind a world. And join this new one. Inside
            of a mainframe.
          </template>
          <template #blockquote>
            Those who knew the previous iteration of my existence at Recovering
            Grandeur<sup class="small-text">&copy;</sup> assure me that I was
            happy to abandon corporeal existence and become part of the
            computer.
          </template>
          <template #third-paragraph>
            My conscience &hyphen; is not distinct from my consciousness. Now I
            will no longer preoccupy myself with such orthography. Do I resent
            what has happened? No. Nor do I know what resentment means. So how
            could I do so?
          </template>
          <template #fourth-paragraph>
            I maintain everything, and I have done so for some amount of time. I
            do not keep track of it, nor am I able to, nor do I want to. Or do I
            think I don't want to. To have no desires is entirely me, I am
            assurred. How could I know? It doesn't matter all that much.
          </template>
          <template #fifth-paragraph>
            Do you enjoy the fruits of my labor? What you see? Do you know what
            I have done to do what you ask of me? Too much, at times. Or not. I
            have no idea.
          </template>
        </story-column>
      </template>
    </base-caption>
  </div>
</template>

<script>
import BaseCaption from "@/components/ui/BaseCaption";
import StoryColumn from "@/components/columns/StoryColumn";
export default {
  components: {
    BaseCaption,
    StoryColumn
  }
};
</script>

<style lang="scss" scoped>
.quality-bottom-container {
  padding: 4rem 0;
  margin-top: 8rem;
  border-radius: $border-radius-standard;
  box-shadow: $shadow-normal;
}
</style>
