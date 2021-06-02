<template>
  <base-foldout
    :enableContent="allowDropdown"
    name="gameOptions"
    :showContent="showDropdown"
    background="#f9f7f6"
    :width="foldoutWidth"
    :margin="foldoutMargin"
    foldoutTextColor="#000000"
    @broadcast-click="dropdownClick"
    :tabindex="10"
  >
    <template #top>
      Game Options
      <hover-modal tinyArea>
        {{ dropdownToolbar }}
      </hover-modal>
    </template>
    <range-slider
      allowVertical
      :variable="numCards"
      :min="2"
      :max="282"
      :step="2"
      @emit-number="emitNoCards"
      name="number-of-cards"
    >
      Number of Cards
      <hover-modal tinyArea>
        {{ numCardsToolbar }}
      </hover-modal>
    </range-slider>
    <range-slider
      allowVertical
      :variable="numGuesses"
      :min="0"
      :max="1000"
      :step="1"
      @emit-number="emitNoGuesses"
      name="number-of-guesses"
    >
      Number of Guesses
      <hover-modal tinyArea>
        {{ numGuessesToolbar }}
      </hover-modal>
    </range-slider>
  </base-foldout>
</template>

<script>
import gameOptionsToolbars from "@/data/games/gameOptionsToolbars";

import HoverModal from "@/components/general/HoverModal";
import BaseFoldout from "@/components/ui/BaseFoldout";
import RangeSlider from "@/components/inputs/RangeSlider";
export default {
  emits: ["dropdown-click", "max-guesses-change", "num-box-change"],
  props: {
    allowDropdown: {
      type: Boolean,
      required: true
    },
    showDropdown: {
      type: Boolean,
      required: true
    },
    numCards: {
      type: Number,
      required: true
    },
    numGuesses: {
      type: Number,
      required: true
    }
  },
  components: {
    HoverModal,
    BaseFoldout,
    RangeSlider
  },
  data() {
    const {
      dropdownToolbar,
      numGuessesToolbar,
      numCardsToolbar
    } = gameOptionsToolbars;
    return {
      dropdownToolbar,
      numGuessesToolbar,
      numCardsToolbar
    };
  },
  computed: {
    foldoutWidth() {
      if (window.matchMedia("only screen and (max-width: 37.5em)").matches) {
        return "14rem";
      }
      if (window.matchMedia("only screen and (max-width: 56.25em)").matches) {
        return "20rem";
      }
      if (window.matchMedia("only screen and (max-width: 75em)").matches) {
        return "35rem";
      }
      return "40rem";
    },
    foldoutMargin() {
      if (window.matchMedia("only screen and (max-width: 56.25em)").matches) {
        return "0.5rem";
      }
      return "2rem";
    },
    hoverModalDirection() {
      if (window.matchMedia("only screen and (max-width: 37.5em)").matches) {
        return "right";
      }
      return "left";
    }
  },
  methods: {
    dropdownClick() {
      this.$emit("dropdown-click");
    },
    emitNoCards(n) {
      this.$emit("num-box-change", n);
    },
    emitNoGuesses(n) {
      this.$emit("max-guesses-change", n);
    }
  }
};
</script>

<style></style>
