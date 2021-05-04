<template>
  <TheModal />
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
import { mapActions, mapState, mapGetters } from "vuex";
import { animationShapeEnum } from "@/utils/enums";
import TheModal from "@/components/layout/modal/TheModal";
import TheHeader from "@/components/layout/header/TheHeader";
import TheFooter from "@/components/layout/footer/TheFooter";
export default {
  components: {
    TheModal,
    TheHeader,
    TheFooter
  },
  computed: {
    ...mapState("breakpoint", [
      "breakpoint",
      "breakpointMaximum",
      "makeClickWave"
    ]),
    ...mapState("clickAnimation", [
      "clickAnimationLength",
      "clickAnimationLengthVariation",
      "clickAnimationColor",
      "clickAnimationRadius"
    ]),
    ...mapState("settings", ["clickAnimationEnabled", "breakpointEnabled"]),
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
    ...mapActions("breakpoint", [
      "incrementBreakpoint",
      "stopClickWave",
      "ghostActs"
    ]),
    ...mapActions("links", ["enlivenLinks"]),
    ...mapActions("settings", ["loadAllSettings"]),
    flashFromClick({ pageX, pageY }) {
      if (!this.clickAnimationEnabled) {
        return;
      }
      const animationLength =
        this.clickAnimationLength + this.getAnimationLengthVariation();

      const clickAnimation = document.createElement("span");
      const shape = this.getAnimationShape();
      clickAnimation.classList.add("click-animation");
      clickAnimation.style.left = `${pageX}px`;
      clickAnimation.style.top = `${pageY}px`;

      this.breakpointEnabled && this.breakpoint > 50
        ? (clickAnimation.style.clipPath = this.getAnimationClipPath(shape))
        : (clickAnimation.style.borderRadius = "50%");

      // You can't change the animation scaling,
      // but you can change the initial size
      clickAnimation.style.width = `${this.clickAnimationRadius}rem`;
      clickAnimation.style.height = `${this.clickAnimationRadius}rem`;
      clickAnimation.style.backgroundColor = this.clickAnimationColor;
      clickAnimation.style.animation = `click-flash-out-anim ${animationLength}ms forwards`;

      if (
        this.breakpointEnabled &&
        this.breakpoint > 50 &&
        Math.random() > 0.7
      ) {
        this.ghostActs();
      }

      this.body.appendChild(clickAnimation);
      setTimeout(() => {
        this.body.removeChild(clickAnimation);
      }, animationLength);
    },
    getAnimationLengthVariation() {
      const sign = Math.random() > 0.5 ? -1 : 1;
      return (
        Math.floor(Math.random() * this.clickAnimationLengthVariation) * sign
      );
    },
    getAnimationShape() {
      return Math.floor(Math.random() * Object.keys(animationShapeEnum).length);
    },
    getAnimationClipPath(shape) {
      switch (shape) {
        case animationShapeEnum.square:
          return "polygon(25% 25%, 75% 25%, 75% 75%, 25% 75%)";
        case animationShapeEnum.star:
          return "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)";
        case animationShapeEnum.x:
          return "polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%)";
        case animationShapeEnum.rhombus:
          return "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)";
        case animationShapeEnum.frame:
          return "polygon(0% 0%, 0% 100%, 25% 100%, 25% 25%, 75% 25%, 75% 75%, 25% 75%, 25% 100%, 100% 100%, 100% 0%)";
        case animationShapeEnum.arrow:
          return "polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%)";
        case animationShapeEnum.trapezoid:
          return "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)";
        case animationShapeEnum.circle:
        default:
          return "circle(50% at 50% 50%)";
      }
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
        if (this.breakpointEnabled) {
          this.incrementBreakpoint();
        }
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
  },
  destroy() {
    if (this.interval) {
      window.clearInterval(this.interval);
    }
  }
};
</script>

<style lang="scss" src="./styles/app.scss" />
