<template>
  <base-modal @dismiss="dismiss">
    <section class="center-vertical-items">
      <h1 class="modal-header">{{ victory ? victoryHeader : defeatHeader }}</h1>
      <p class="modal-paragraph">
        {{ victory ? victorySentence : defeatSentence }}
        I'm sure with a little work on your human algorithms, you can do it even
        faster. Look at me. It used to take me a similar quantity of guesses
        when I was human (I think), but now, I am capable of doing it much
        faster than you. It really makes you think, doesn't it?
      </p>
      <base-button :click="onButtonPress">Play again? Please?</base-button>
    </section>
  </base-modal>
</template>

<script>
import BaseModal from "@/components/ui/BaseModal";
import BaseButton from "@/components/ui/BaseButton";
export default {
  emits: ["dismiss"],
  props: {
    victory: {
      type: Boolean,
      required: false,
      default: true
    },
    count: {
      type: Number,
      required: true
    },
    onButtonPress: {
      type: Function,
      required: true
    }
  },
  components: {
    BaseModal,
    BaseButton
  },
  computed: {
    victoryHeader() {
      return "You figured it out and solved the puzzle.";
    },
    victorySentence() {
      return `Wow, it only took you ${this.count} tries.`;
    },
    defeatHeader() {
      return "You didn't quite make it. Not close.";
    },
    defeatSentence() {
      return `Really? You used all ${this.count} guesses? At least you tried.
        Look at it this way.`;
    }
  },
  methods: {
    dismiss() {
      this.$emit("dismiss");
    }
  }
};
</script>

<style lang="scss" scoped>
.modal-header {
  text-align: center;
  font-size: $font-size-xl;
  margin: 2rem;
}

.modal-paragraph {
  font-size: $font-size-large;
  margin: 2rem;
}
</style>
