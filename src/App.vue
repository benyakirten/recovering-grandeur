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
      "clickAnimationLengthVariation",
      "clickAnimationColor",
      "clickAnimationRadius"
    ]),
    ...mapGetters("settings", ["clickAnimationEnabled"]),
    ...mapGetters("links", ["getEnabledTransitions"]),
    body() {
      return document.querySelector("body");
    },
    transitionMode() {
      if (this.chosenTransition && this.chosenTransition.includes("slide")) {
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
    ...mapActions("settings", ["loadAllSettings"]),
    flashFromClick(e) {
      if (!this.clickAnimationEnabled) {
        return;
      }
      const animationLength =
        this.clickAnimationLength + this.getAnimationLengthVariation();
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
      circle.style.animation = `click-flash-out-anim ${animationLength}ms forwards`;

      this.body.appendChild(circle);
      setTimeout(() => {
        this.body.removeChild(circle);
      }, animationLength);
    },
    getAnimationLengthVariation() {
      const sign = Math.random() > 5 ? -1 : 1;
      return (
        Math.floor(Math.random() * this.clickAnimationLengthVariation) * sign
      );
    },
    getRandomTransition() {
      const transitionIndex = Math.floor(
        Math.random() * this.getEnabledTransitions.length
      );
      this.chosenTransition = this.getEnabledTransitions[transitionIndex];
      return `scene-${this.chosenTransition}`;
    }
  },
  loadAllSettings() {
    console.log("load all settings");
  },
  created() {
    this.body.addEventListener("click", this.flashFromClick);
    const breakpointData = JSON.parse(localStorage.getItem("RG_B"));
    const clickAnimationData = JSON.parse(localStorage.getItem("RG_CA"));
    const headerCanvasData = JSON.parse(localStorage.getItem("RG_HC"));
    const linksData = JSON.parse(localStorage.getItem("RG_L"));
    const settingsData = JSON.parse(localStorage.getItem("RG_S"));
    this.loadAllSettings({
      breakpointData,
      clickAnimationData,
      headerCanvasData,
      linksData,
      settingsData
    });
  }
};
</script>

<style lang="scss" src="./data/app/main.scss"></style>
