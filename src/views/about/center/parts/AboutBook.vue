<template>
  <base-modal @dismiss="hidePopup" v-if="popupShown">
    <div class="cover">
      <article class="cover__left">
        <figure class="cover__figure">
          <img class="cover__figure__img" :src="coverImage" />
          <figcaption class="cover__figure__caption">
            <div class="bold">Delusions of Form</div>
            <div>Mais Ahmad</div>
          </figcaption>
        </figure>
      </article>
      <article class="cover__right">
        <div class="cover__info" v-html="pubInfo.coverDesignerInfo" />
        <div class="cover__links">
          <span
            class="cover__links__link"
            v-for="link in pubInfo.coverDesignerLinks"
            :key="link.raw"
          >
            <a
              class="link link--dark"
              :href="link.raw"
              target="_blank"
              rel="noopener"
            >
              {{ link.title }}
            </a>
          </span>
        </div>
      </article>
    </div>
  </base-modal>
  <hover-image-and-text-column
    image="temp-cover"
    height="20rem"
    width="20rem"
    cursor="pointer"
    @click="showPopup"
    :alt="pubInfo.title"
  >
    <template #caption>
      <span class="link"> About the Cover </span>
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
            <a
              :href="link.link"
              target="_blank"
              rel="noopener"
              class="link link--dark"
              >{{ link.name }}&nbsp;
            </a>
          </span>
        </li>
        <li class="pub-info__item">
          <span>Related Short Story:&nbsp;</span>
          <a
            target="_blank"
            rel="noopener"
            :href="shortStory.link"
            class="link link--dark"
          >
            {{ shortStory.title }}
          </a>
        </li>
      </ul>
    </template>
    <template #heading-3> Miscellaneous Info </template>
    <template #para-3>
      {{ pubInfo.miscInfo }}
      <span v-if="normalScreen">
        {{ pubInfo.miscInfoExtra }}
      </span>
    </template>
  </hover-image-and-text-column>
</template>

<script>
import HoverImageAndTextColumn from "@/components/columns/HoverImageAndTextColumn";
import BaseModal from "@/components/ui/BaseModal";
import pubInfo from "@/data/about/pubInfo";
export default {
  components: {
    HoverImageAndTextColumn,
    BaseModal
  },
  data() {
    return {
      pubInfo,
      popupShown: false
    };
  },
  computed: {
    shortStory() {
      return this.pubInfo.shortStory;
    },
    normalScreen() {
      return !window.matchMedia("only screen and (max-width: 37.5em)").matches;
    },
    coverImage() {
      return require("@/assets/temp-cover.svg");
    }
  },
  methods: {
    showPopup() {
      this.popupShown = true;
    },
    hidePopup() {
      this.popupShown = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.link {
  cursor: pointer;

  color: $color-white;
  text-decoration: none;
  letter-spacing: 0;

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
.cover {
  display: flex;
  margin-top: 2rem;

  &__figure {
    &__img {
      height: 40rem;
      border-radius: $border-radius-small;
      box-shadow: $shadow-small;

      transition: $transition-normal;
      transform-origin: top left;

      @include respond(tab-port) {
        height: 25rem;
      }

      &:hover {
        transform: scale(1.5);
      }
    }
    &__caption {
      margin: 2rem 0;
      padding: 1rem;

      font-size: $font-size-medium;
      text-align: center;

      border: 2px solid $color-alt-secondary;
      box-shadow: $shadow-small;
      border-radius: $border-radius-standard;
    }
  }
  &__left {
    width: 100%;
    height: 100%;
  }
  &__right {
    margin-left: 2rem;
    padding: 3rem 1rem;

    font-size: $font-size-large;

    @include respond(tab-port) {
      font-size: $font-size-medium;
    }

    @include respond(phone) {
      margin-left: 1rem;
      font-size: $font-size-large;
    }

    letter-spacing: 1px;
    text-align: left;
  }

  &__info {
    margin-left: 1rem;
    margin-bottom: 2rem;
  }
  &__links {
    &__link {
      padding: 0 1rem;
      &:not(:last-child) {
        border-right: 1px solid rgba($color-black, 0.5);
      }
    }
  }
}
</style>
