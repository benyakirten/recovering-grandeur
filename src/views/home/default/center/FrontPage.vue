<template>
  <base-two-columns additionalClass="book">
    <template #left>
      <text-column>
        <template #leading>
          Leg broken? Failing kidneys? Get the best bang for your buck!
        </template>
        <template #main>
          <p class="text">
            Over 70% of those who have survived their treatment at Recovering
            Grandeur<sup class="small-text">&copy;</sup> have given us at least
            a 6 out of 11.7 satisfaction score on their post-op compulsory
            evaluation.
          </p>
          <p class="text">
            We know you have a lot of choice out there. But not all of them
            offer free bodily replacement<sup>1</sup>
            if something goes wrong. It's a gaurantee you can count
            on<sup>2</sup>, so our customers can have some peace (or a literal
            piece) of mind.
          </p>
          <p class="text">
            UNHANDLED EXCEPTION: [Object object] between lines 355-49870:
            default_overwrite(undefined);
          </p>
          <p class="text">
            We want to let you know that we take your health
            seriously<sup>3</sup>. So seriously that our chief content
            aggregator algorithm wants to share a story with you. Click on the
            top-right arrow to see it.
          </p>
          <p class="small-text">
            <sup>1</sup>&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
          </p>
          <p class="small-text">
            <sup>2</sup>&nbsp;Depending on quarterly reports, it may not be
            something to count on.
          </p>
          <div class="small-text">
            <sup>3</sup>&nbsp;Customers are solely responsible for their health.
          </div>
        </template>
      </text-column>
    </template>
    <template #right>
      <image-column
        imgAnim="fold-to-kitty-corner 4s infinite 1s"
        imgClipPath="polygon(0% 100%, 100% 0%, 100% 100%)"
      >
        88e87a27-4562-4f99-a8b4-0fa8f442e79b, CCAA and cout&lt;&lt;"Cool dude";
      </image-column>
    </template>
  </base-two-columns>
</template>

<script>
import BaseTwoColumns from "@/components/ui/BaseTwoColumns";
import TextColumn from "@/components/columns/TextColumn";
import ImageColumn from "@/components/columns/ImageColumn";
export default {
  components: {
    BaseTwoColumns,
    TextColumn,
    ImageColumn
  }
};
</script>

<style lang="scss" scoped>
.text {
  margin: 1.5rem 0;
}
</style>
