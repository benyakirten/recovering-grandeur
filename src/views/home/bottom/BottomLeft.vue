<template>
  <image-column image="Landscape" imgAlt="The Boulder Landscape">
    <p class="no-margin" v-html="caption" />
  </image-column>
</template>

<script>
import { caption } from "@/data/home/homeBottom";
import ImageColumn from "@/components/columns/ImageColumn";
export default {
  components: {
    ImageColumn
  },
  data() {
    return {
      caption
    };
  }
};
</script>
