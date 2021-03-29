<template>
  <TheHeader />
  <router-view v-slot="slotProps">
    <transition :name="setRandomTransition()" :mode="transitionMode">
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
    ...mapGetters("settings", ["clickAnimationLength"]),
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
      transitionNames: [
        "slide-right",
        "slide-left",
        "fade",
        "scale",
        "mix-slide-left-fade"
      ],
      chosenTransition: null
    };
  },
  methods: {
    ...mapActions("links", ["enlivenLinks"]),
    flashFromClick(e) {
      const x = e.pageX;
      const y = e.pageY;

      const circle = document.createElement("span");
      circle.classList.add("click-circle");
      circle.style.left = `${x}px`;
      circle.style.top = `${y}px`;
      circle.style.animation = `click-flash-out-anim ${this.clickAnimationLength}ms forwards`;

      this.body.appendChild(circle);
      setTimeout(() => {
        this.body.removeChild(circle);
      }, this.clickAnimationLength);
    },
    setRandomTransition() {
      const transitionIndex = Math.floor(
        Math.random() * this.transitionNames.length
      );
      this.chosenTransition = this.transitionNames[transitionIndex];
      return `scene-${this.chosenTransition}`;
    }
  },
  created() {
    this.body.addEventListener("click", this.flashFromClick);
    this.enlivenLinks();
  }
};
</script>

<style lang="scss">
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}
html {
  font-size: 62.5%;
}
body {
  box-sizing: border-box;
  overflow-x: hidden;
}

.click-circle {
  position: absolute;
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  z-index: 100;

  background-color: $color-primary;

  transform: translate(-50%, -50%) scale(0.2);
}

.small-text {
  font-size: 0.8rem;
}

.background-sliding-gradient {
  color: transparent;
  background-image: linear-gradient(
    to right,
    $color-hero-2,
    $color-hero-2-complementary-1
  );
  background-size: 200% 100%;
  background-clip: text;

  animation: sliding-background 4s infinite linear;
}

// TRANSITION BETWEEN SCENES

// SLIDE RIGHT
.scene-slide-right-enter-from {
  position: absolute;
  transform: translateX(150rem);
}

.scene-slide-right-leave-to {
  position: absolute;
  transform: translateX(-150rem);
}

.scene-slide-right-enter-active,
.scene-slide-right-leave-active {
  transition: all 1.5s ease;
}

.scene-slide-right-enter-to,
.scene-slide-right-leave-from {
  position: absolute;
  transform: translateX(0);
}

// SLIDE LEFT

.scene-slide-left-enter-from {
  position: absolute;
  transform: translateX(-150rem);
}

.scene-slide-left-leave-to {
  position: absolute;
  transform: translateX(150rem);
}

.scene-slide-left-enter-active,
.scene-slide-left-leave-active {
  transition: all 1.5s ease;
}

.scene-slide-left-enter-to,
.scene-slide-left-leave-from {
  position: absolute;
  transform: translateX(0);
}

// FADE
.scene-fade-enter-from,
.scene-fade-leave-to {
  opacity: 0;
}

.scene-fade-enter-active,
.scene-fade-leave-active {
  transition: all 1s ease;
}

.scene-fade-enter-to,
.scene-fade-leave-from {
  opacity: 1;
}

// SCALE
.scene-scale-enter-from,
.scene-scale-leave-to {
  transform: scale(0.2);
  opacity: 0;
}

.scene-scale-enter-active,
.scene-scale-leave-active {
  transition: all 1s ease;
}

.scene-scale-enter-to,
.scene-scale-leave-from {
  position: absolute;
  transform: scale(1) translateX(0);
  opacity: 1;
}

// HYBRID TRANSITIONS

// SLIDE-LEFT AND FADE
.scene-mix-slide-left-fade-enter-active,
.scene-mix-slide-left-fade-leave-active {
  position: absolute;
  transition: all 0.85s ease;
}
.scene-mix-slide-left-fade-enter-from {
  transform: translateX(-150rem);
}
.scene-mix-slide-left-fade-enter-to {
  transform: translateX(0);
}
.scene-mix-slide-left-fade-leave-from {
  transform: scale(1);
}
.scene-mix-slide-left-fade-leave-to {
  transform: scale(0.8);
}

// ANIMATIONS
@keyframes float-out {
  50% {
    transform: translateX(4rem) skewX(25deg);
  }
  100% {
    transform: translateX(4rem) scale(1.03) skewX(25deg);
  }
}

@keyframes load-in {
  100% {
    opacity: 1;
  }
}

@keyframes fold-to-kitty-corner {
  25% {
    transform: scaleY(0) rotate(180deg);
  }
  50% {
    transform: scaleY(1) rotate(180deg);
  }
  75% {
    transform: scaleY(0) rotate(0deg);
  }
}

@keyframes skew-up-and-down {
  50% {
    transform: skewY(2deg);
  }
  100% {
    transform: skewY(-2deg);
  }
}

@keyframes click-flash-out-anim {
  to {
    transform: translate(-50%, -50%) scale(2);
    opacity: 0;
  }
}

@keyframes sliding-background {
  to {
    background-position: -200% 0;
  }
}

@keyframes bloat-and-spin {
  50% {
    transform: rotate(180deg) scale(1.2) skew(15deg);
  }
  100% {
    transform: rotate(360deg) scale(1);
  }
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
