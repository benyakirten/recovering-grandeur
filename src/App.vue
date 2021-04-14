<template>
  <TheHeader />
  <router-view v-slot="slotProps">
    <transition :name="getRandomTransition()" :mode="transitionMode">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import TheHeader from "@/components/layout/header/TheHeader";
export default {
  components: {
    TheHeader
  },
  computed: {
    ...mapGetters("clickAnimation", [
      "clickAnimationLength",
      "clickAnimationVariationLength",
      "clickAnimationColor",
      "clickAnimationColorVariation",
      "clickAnimationRadius"
    ]),
    ...mapGetters("settings", ["enabledTransitions", "clickAnimationEnabled"]),
    body() {
      return document.querySelector("body");
    },
    transitionMode() {
      if (this.chosenTransition.includes("slide")) {
        return "";
      } else {
        return "out-in";
      }
    }
  },
  data() {
    return {
      chosenTransition: null
    };
  },
  methods: {
    ...mapActions("links", ["enlivenLinks"]),
    flashFromClick(e) {
      if (!this.clickAnimationEnabled) {
        return;
      }
      const { pageX, pageY } = e;

      const circle = document.createElement("span");
      circle.classList.add("click-circle");
      circle.style.left = `${pageX}px`;
      circle.style.top = `${pageY}px`;
      // You can't change the animation scaling,
      // but you can change the initial size
      circle.style.width = `${this.clickAnimationRadius}rem`;
      circle.style.height = `${this.clickAnimationRadius}rem`;
      circle.style.backgroundColor = this.clickAnimationColor;
      circle.style.animation = `click-flash-out-anim ${this.clickAnimationLength}ms forwards`;

      this.body.appendChild(circle);
      setTimeout(() => {
        this.body.removeChild(circle);
      }, this.clickAnimationLength);
    },
    getRandomTransition() {
      const transitionIndex = Math.floor(
        Math.random() * this.enabledTransitions.length
      );
      this.chosenTransition = this.enabledTransitions[transitionIndex];
      return `scene-${this.chosenTransition}`;
    }
  },
  created() {
    this.body.addEventListener("click", this.flashFromClick);
  }
};
</script>

<style lang="scss" src="./data/app/main.scss"></style>
