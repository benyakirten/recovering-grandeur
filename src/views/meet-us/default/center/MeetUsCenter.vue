<template>
  <base-caption>
    <template #caption> Hear From Some of Our Staff </template>
    <template #content>
      <base-two-columns phoneHeight="75rem">
        <template #left>
          <image-column image="Portrait3" :imgRotate="180">
            3c4e635f-ecd2-4d37-92d5-4eda61198a66, Compliance Monitor
          </image-column>
        </template>
        <template #right>
          <text-column>
            <template #leading> Yeah, so this dude showed up. </template>
            <template #main>
              <p class="text big-tab-text">
                What was his name? Oh, am I allowed to talk about it here? Look,
                I don't know. I'm not legal. But anyway, this guy showed up. Not
                looking hot at all. There was something wrong with, well...
                Everything? I don't know.
              </p>
              <p class="text big-tab-text">
                Not my deal. Well, they went into a coma or something? Must be
                hard to deal with some of the stuff. Bet stuff for something so
                fragile must be hard. To differentiate what they know and what
                they don't. Gone in a flash!
              </p>
              <p class="text big-tab-text">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <p class="text big-tab-text">
                And then I was like, well, I'm doing fine. Why should I think
                too much about this situation?
              </p>
            </template>
          </text-column>
        </template>
      </base-two-columns>
    </template>
  </base-caption>
</template>

<script>
import BaseCaption from "@/components/ui/BaseCaption";
import BaseTwoColumns from "@/components/ui/BaseTwoColumns";
import ImageColumn from "@/components/columns/ImageColumn";
import TextColumn from "@/components/columns/TextColumn";
export default {
  components: {
    BaseCaption,
    BaseTwoColumns,
    ImageColumn,
    TextColumn
  }
};
</script>
