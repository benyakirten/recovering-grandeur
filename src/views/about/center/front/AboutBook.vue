<template>
  <hover-image-and-text-column
    image="temp-cover"
    height="20rem"
    width="20rem"
    alt="A Mendicant Repose"
  >
    <template #caption>
      <a class="link" target="blank" :href="pubInfo.links[0].link"
        >Find it on {{ pubInfo.links[0].name }}</a
      >
    </template>
    <template #heading-1> About {{ pubInfo.title }} </template>
    <template #para-1>
      {{ pubInfo.description }}
    </template>
    <template #heading-2> Info About the Book </template>
    <template #para-2>
      <ul class="pub-info">
        <li class="pub-info__item">Title: {{ pubInfo.title }}</li>
        <li class="pub-info__item">
          <span>Available:&nbsp;</span>
          <span v-for="link in pubInfo.links" :key="link.name">
            <a :href="link.link" target="blank" class="link link--dark"
              >{{ link.name }}&nbsp;
            </a>
          </span>
        </li>
        <li class="pub-info__item">
          <span>Related Short Story:&nbsp;</span>
          <a target="blank" :href="shortStory.link" class="link link--dark">
            {{ shortStory.title }}
          </a>
        </li>
      </ul>
    </template>
    <template #heading-3> Miscellaneous Info </template>
    <template #para-3>
      {{ pubInfo.miscInfo }}
    </template>
  </hover-image-and-text-column>
</template>

<script>
import HoverImageAndTextColumn from "@/components/columns/HoverImageAndTextColumn";
import pubInfo from "@/data/about/pubInfo";
export default {
  components: {
    HoverImageAndTextColumn
  },
  data() {
    return { pubInfo };
  },
  computed: {
    shortStory() {
      return this.pubInfo.shortStory;
    }
  }
};
</script>

<style lang="scss" scoped>
.link {
  color: $color-white;
  text-decoration: none;

  &--dark {
    color: $color-alt-primary-dark;
  }
}
.pub-info {
  list-style: none;
  &__item {
    &::before {
      content: "\27A4";
      margin-right: 1rem;
    }
  }
}
</style>
