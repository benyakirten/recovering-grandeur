<template>
  <hover-image-and-text-column
    image="Portrait.jpg"
    shape="circle"
    height="20rem"
    width="20rem"
    alt="Benyakir Horowitz"
    float="right"
  >
    <template #caption> Benyakir Horowitz </template>
    <template #heading-1> About Me </template>
    <template #para-1>
      My name is Benyakir Horowitz, writer and web designer. I graduated from
      Middlebury College with my Master's Degree in Italian in 2015. After
      moving back to Colorado from Italy in 2016, I have worked as a writer and
      editor. During the pandemic of 2020, I learned some programming (mostly
      web development). This is the first in hopefully a series of websites to
      accompany my books.
    </template>
    <template #heading-2> About The Assets </template>
    <template #para-2>
      All assets are created by me except for the following images (which I have
      modified):
      <ul class="list">
        <li class="list__item" v-for="photo in photos" :key="photo.photoLink">
          <a :href="photo.photoLink" class="list__item__link">
            {{ photo.photoTitle }}
          </a>
          <span>&nbsp;by&nbsp;</span>
          <a :href="photo.authorLink" class="list__item__link">
            {{ photo.authorName }}
          </a>
        </li>
      </ul>
    </template>
    <template #heading-3> Links </template>
    <template #para-3>
      <div class="container">
        <a href="https://github.com/benyakirten" target="blank">
          <hover-image image="Github" shape="circle" height="12rem">
            <span class="dark-text">Github</span>
          </hover-image>
        </a>
        <a href="https://twitter.com/benyakirten" target="blank">
          <hover-image image="Twitter" shape="circle" height="12rem">
            Twitter
          </hover-image>
        </a>
        <a href="https://benyakiredits.com" target="blank">
          <hover-image
            image="Homepage.jpg"
            shape="simple-circle"
            height="12rem"
            width="12rem"
          >
            Blog
          </hover-image>
        </a>
      </div>
    </template>
  </hover-image-and-text-column>
</template>

<script>
import HoverImageAndTextColumn from "@/components/columns/HoverImageAndTextColumn";
import photos from "@/data/about/photos";
import HoverImage from "@/components/general/HoverImage";
export default {
  components: {
    HoverImageAndTextColumn,
    HoverImage
  },
  data() {
    return {
      photos
    };
  }
};
</script>

<style lang="scss" scoped>
.container {
  padding: 2rem 4rem;
}
.content {
  &__heading {
    font-size: $font-size-large;
    font-family: $font-family-sans;
    text-align: left;
    padding-bottom: 0.5rem;
    letter-spacing: 3px;
    font-weight: lighter;
  }
  &__para {
    text-align: left;
    font-size: $font-size-medium;
    letter-spacing: 1px;

    &:not(:last-child) {
      margin-bottom: 2rem;
    }
  }
}
.list {
  list-style: none;
  &__item {
    &::before {
      content: "\27A4";
      font-size: $font-size-small;
      margin-right: 1rem;
    }

    &__link:link,
    &__link:visited {
      color: $color-alt-primary-dark;
    }
  }
}
.container {
  display: inline-block;
  padding-bottom: 0;
}
.dark-text {
  color: $color-black;
}
</style>
