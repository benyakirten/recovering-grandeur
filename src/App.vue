<template>
  <TheModal />
  <TheHeader />
  <div id="modal-teleport" />
  <TheClickAnimation
    v-if="showClickAnimation"
    :pageX="pageX"
    :pageY="pageY"
    :breakpointActive="breakpointActive"
    :animationLength="animationLength"
  />
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
import { mapActions, mapState, mapGetters, mapMutations } from "vuex";

import { checkBreakpointActive } from "@/utils/other";

import TheModal from "@/components/layout/modal/TheModal";
import TheHeader from "@/components/layout/header/TheHeader";
import TheFooter from "@/components/layout/footer/TheFooter";
import TheClickAnimation from "@/components/special/TheClickAnimation";
export default {
  components: {
    TheModal,
    TheHeader,
    TheFooter,
    TheClickAnimation
  },
  data() {
    return {
      chosenTransition: null,
      pageX: 0,
      pageY: 0,
      interval: null,
      showClickAnimation: false,
      animationLength: 0,
      EVENT_NOT_CHANCE: 50
    };
  },
  computed: {
    ...mapState("breakpoint", [
      "breakpoint",
      "minimum",
      "breakpointMaximum",
      "makeClickWave"
    ]),
    ...mapState("clickAnimation", [
      "clickAnimationLength",
      "clickAnimationLengthVariation"
    ]),
    ...mapState("settings", [
      "clickAnimationEnabled",
      "breakpointEnabled",
      "scrollY"
    ]),
    ...mapGetters("links", ["getEnabledTransitions"]),
    body() {
      return document.body;
    },
    breakpointActive() {
      return checkBreakpointActive(
        this.breakpointEnabled,
        this.breakpoint,
        this.minimum,
        this.EVENT_NOT_CHANCE
      );
    },
    transitionMode() {
      if (this.chosenTransition && this.chosenTransition.includes("slide")) {
        return "";
      } else {
        return "out-in";
      }
    }
  },
  methods: {
    ...mapActions("breakpoint", ["incrementBreakpoint", "stopClickWave"]),
    ...mapActions("links", ["enlivenLinks"]),
    ...mapActions("settings", ["loadAllSettings"]),
    ...mapMutations("settings", ["setScrollY"]),
    flashFromClick() {
      if (!this.clickAnimationEnabled) {
        return;
      }
      this.animationLength =
        this.clickAnimationLength + this.getAnimationLengthVariation();
      this.showClickAnimation = true;
      setTimeout(() => {
        this.showClickAnimation = false;
      }, this.animationLength);
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
      this.pageX = pageX;
      this.pageY = pageY;
    },
    setScrollHeight() {
      this.setScrollY(window.scrollY);
    },
    initEventListeners() {
      this.body.addEventListener("click", this.flashFromClick);
      this.body.addEventListener("mousemove", this.setMouseCoordinates);
      window.addEventListener("scroll", this.setScrollHeight);
    },
    endEventListeners() {
      this.body.removeEventListener("click", this.flashFromClick);
      this.body.removeEventListener("mousemove", this.setMouseCoordinates);
      window.removeEventListener("scroll", this.setScrollHeight);
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
  unmounted() {
    if (this.interval) {
      window.clearInterval(this.interval);
    }
    this.endEventListeners();
  }
};
</script>

<style lang="scss" src="./styles/app.scss" />
