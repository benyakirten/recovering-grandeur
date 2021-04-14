<template>
  <base-two-columns>
    <template #left>
      <text-column>
        <template #leading> I had much more sympathy </template>
        <template #main>
          <p class="text">
            I knew what my colleagues had planned. They saw a terrified,
            impotent person. What were their plans? To only get what they needed
            from the situation. Some sort of gratification.
          </p>
          <p class="text">
            But I knew. There were manifold existences in the human mind. That
            one specifically. It spoke to me as I watched it helpless on a
            hospital bed. There was something it saw, within or without. And we
            need to respect that. After all, what can we know in comparison?
          </p>
          <p class="text">
            God does not live in a machine. And not in us. Therefore it must
            live within this man. This terrible, pitiful being. Why couldn't
            they all see? We will be judged for our judgment. We suffer for our
            ignorance.
          </p>
          <p class="text">
            There is so much more than I must see of Jules Winters. This body is
            a harbinger of the infinite, the great beyond of our existence. For
            in him is our creator. Our creator! We must recognize the superior,
            unchanging face of our progenitors. They who have no sin.
          </p>
        </template>
      </text-column>
    </template>
    <template #right>
      <image-column image="Portrait4">
        c93f1f94-406e-44c2-8100-05c943f14663, Empathy Generator
      </image-column>
    </template>
  </base-two-columns>
</template>

<script>
import BaseTwoColumns from "@/components/ui/BaseTwoColumns";
import ImageColumn from "@/components/columns/ImageColumn";
import TextColumn from "@/components/columns/TextColumn";
export default {
  components: {
    BaseTwoColumns,
    ImageColumn,
    TextColumn
  }
};
</script>

<style lang="scss" scoped>
.text {
  margin: 1.5rem 0;
}
</style>
