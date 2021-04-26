<template>
  <TheHeader />
  <main class="main">
    <router-view v-slot="slotProps">
      <transition :name="getRandomTransition()" :mode="transitionMode">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
  </main>
  <TheFooter />
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import TheHeader from "@/components/layout/header/TheHeader";
import TheFooter from "@/components/layout/footer/TheFooter";
export default {
  components: {
    TheHeader,
    TheFooter
  },
  computed: {
    ...mapGetters("breakpoint", ["breakpoint", "makeClickWave"]),
    ...mapGetters("clickAnimation", [
      "clickAnimationLength",
      "clickAnimationLengthVariation",
      "clickAnimationColor",
      "clickAnimationRadius"
    ]),
    ...mapGetters("settings", ["clickAnimationEnabled"]),
    ...mapGetters("links", ["getEnabledTransitions"]),
    body() {
      return document.body;
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
      chosenTransition: null,
      x: 0,
      y: 0,
      interval: null
    };
  },
  methods: {
    ...mapActions("breakpoint", ["incrementBreakpoint", "stopClickWave"]),
    ...mapActions("links", ["enlivenLinks"]),
    ...mapActions("settings", ["loadAllSettings"]),
    flashFromClick({ pageX, pageY }) {
      if (!this.clickAnimationEnabled) {
        return;
      }
      const animationLength =
        this.clickAnimationLength + this.getAnimationLengthVariation();

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
      const sign = Math.random() > 0.5 ? -1 : 1;
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
    },
    setMouseCoordinates({ pageX, pageY }) {
      this.x = pageX;
      this.y = pageY;
    },
    initEventListeners() {
      this.body.addEventListener("click", this.flashFromClick);
      this.body.addEventListener("mousemove", this.setMouseCoordinates);
    },
    initInterval() {
      this.interval = setInterval(() => {
        if (this.breakpoint >= 100) {
          window.clearInterval(this.interval);
        }
        this.incrementBreakpoint();
        Math.random() > 0.5 ? console.log("TICK!") : console.log("TOCK!");
      }, 15000);
    },
    initLoadSettings() {
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
  },
  watch: {
    makeClickWave(val) {
      if (val) {
        this.flashFromClick({ pageX: this.x, pageY: this.y });
        this.stopClickWave();
      }
    }
  },
  created() {
    this.initEventListeners();
    this.initInterval();
    this.initLoadSettings();
  }
};
</script>

<style lang="scss" src="./styles/app.scss"></style>
