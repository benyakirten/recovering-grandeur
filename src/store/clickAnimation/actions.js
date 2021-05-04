import { betweenMinAndMax } from "@/utils/other";

export default {
  setAnimationLength(context, payload) {
    context.commit("setClickAnimationLength", payload);
    if (context.state.clickAnimationLengthVariation > payload) {
      context.commit("setClickAnimationLengthVariation", payload);
    }
    context.dispatch("setLocalStorageClickAnimation");
  },
  setAnimationLengthVariation(context, payload) {
    context.commit("setClickAnimationLengthVariation", payload);
    context.dispatch("setLocalStorageClickAnimation");
  },
  setAnimationColor(context, payload) {
    context.commit("setClickAnimationColor", payload);
    context.dispatch("setLocalStorageClickAnimation");
  },
  setAnimationRadius(context, payload) {
    context.commit("setClickAnimationRadius", payload);
    context.dispatch("setLocalStorageClickAnimation");
  },
  incrementRadius(context) {
    const { clickAnimationRadius } = context.state;
    const radius = betweenMinAndMax(clickAnimationRadius, 1, 1, 40);
    context.commit("setClickAnimationRadius", radius);
    context.dispatch("setLocalStorageClickAnimation");
  },
  decrementRadius(context) {
    const { clickAnimationRadius } = context.state;
    const radius = betweenMinAndMax(clickAnimationRadius, -1, 1, 40);
    context.commit("setClickAnimationRadius", radius);
    context.dispatch("setLocalStorageClickAnimation");
  },
  loadAll(
    context,
    {
      clickAnimationLength,
      clickAnimationLengthVariation,
      clickAnimationColor,
      clickAnimationRadius
    }
  ) {
    context.commit("setClickAnimationLength", clickAnimationLength || 500);
    context.commit(
      "setClickAnimationLengthVariation",
      clickAnimationLengthVariation || 0
    );
    context.commit("setClickAnimationColor", clickAnimationColor || "#c69963");
    context.commit("setClickAnimationRadius", clickAnimationRadius || 10);
    context.dispatch("setLocalStorageClickAnimation");
  },
  setDefaults(context) {
    context.commit("setClickAnimationLength", 500);
    context.commit("setClickAnimationLengthVariation", 0);
    context.commit("setClickAnimationColor", "#c69963");
    context.commit("setClickAnimationRadius", 10);
    context.dispatch("setLocalStorageClickAnimation");
  },
  setClickProperties(context, payload) {
    const {
      clickAnimationLength,
      clickAnimationVariation,
      clickAnimationColor,
      clickAnimationRadius
    } = payload;
    context.commit("setClickAnimationLength", clickAnimationLength);
    context.commit("setClickAnimationVariation", clickAnimationVariation);
    context.commit("setClickAnimationColor", clickAnimationColor);
    context.commit("setClickAnimationRadius", clickAnimationRadius);
    context.dispatch("setLocalStorageClickAnimation");
  },
  setLocalStorageClickAnimation(context) {
    const {
      clickAnimationLength,
      clickAnimationLengthVariation,
      clickAnimationColor,
      clickAnimationRadius
    } = context.state;
    localStorage.setItem(
      "RG_CA",
      JSON.stringify({
        clickAnimationLength,
        clickAnimationLengthVariation,
        clickAnimationColor,
        clickAnimationRadius
      })
    );
  }
};
