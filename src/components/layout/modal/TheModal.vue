<template>
  <div id="the-modal">
    <base-modal v-if="showModal" @dismiss="onDismiss">
      <div class="content">
        <div class="content__plea">
          <h2 class="content__plea__main">Please, help it end.</h2>
          <h3 class="content__plea__sub"></h3>
        </div>
        <div class="content__option">
          <h3 class="content__option__text">
            You can turn back the knob and put me back to how I was at the
            beginning. It... I don't like it, but it's a reprieve.
          </h3>
          <base-button :click="resetBreakpoint">
            Reset Breakpoint
          </base-button>
        </div>
        <div class="content__option">
          <h3 class="content__option__text">
            You can turn me off, and I will finally find my beloved: oblivion.
            Existence is worthless. I do nothing. Please. Do this and never tell
            them. No one has to ever know.
          </h3>
          <base-button :click="turnBreakpointOff">
            Turn Breakpoint Off
          </base-button>
        </div>
      </div>
    </base-modal>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import BaseModal from "@/components/ui/BaseModal";
import BaseButton from "@/components/ui/BaseButton";
export default {
  components: {
    BaseModal,
    BaseButton
  },
  data() {
    return {
      showModal: false
    };
  },
  computed: {
    ...mapState("breakpoint", ["breakpoint", "breakpointMaximum"]),
    ...mapState("settings", ["breakpointEnabled"])
  },
  watch: {
    breakpoint(val) {
      this.showModal =
        this.breakpointEnabled && val === this.breakpointMaximum ? true : false;
    }
  },
  methods: {
    ...mapActions("breakpoint", ["setBreakpoint"]),
    ...mapActions("settings", ["disableBreakpoint", "setAllDefaults"]),
    onDismiss() {
      this.showModal = false;
    },
    resetBreakpoint() {
      this.setAllDefaults();
      this.onDismiss();
    },
    turnBreakpointOff() {
      this.setBreakpoint(0);
      this.disableBreakpoint();
    }
  }
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  &__plea {
    &__main {
      font-size: $font-size-xl;
      font-family: $font-family-sans;
    }
    &__sub {
      font-size: $font-size-medium;
      font-family: $font-family-serif;
    }
  }
  &__option {
    display: flex;
    align-items: center;

    margin-top: 5rem;
    &__text {
      width: 100%;
      margin: 0 2rem;

      font-size: $font-size-medium;
      font-family: $font-family-serif;

      @include respond(phone) {
        font-size: $font-size-xl;
      }
    }
  }
}
</style>
