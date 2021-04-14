import { separateRGB, getColorAndVariation } from "@/utils/hexAndDecimals";

export default {
  setAnimationLength(context, payload) {
    context.commit("setClickAnimationLength", payload);
  },
  setAnimationVariation(context, payload) {
    context.commit("setClickAnimationLengthVariation", payload);
  },
  setAnimationColor(context, payload) {
    context.commit("setClickAnimationColor", payload);
  },
  setDefaults(context) {
    context.commit("clickAnimationLength", 500);
    context.commit("clickAnimationLengthVariation", 0);
    context.commit("clickAnimationColor", "#c69963");
  },
  setClickProperties(context, payload) {
    const {
      clickAnimationLength,
      clickAnimationVariation,
      clickAnimationColor
    } = payload;
    context.commit("setClickAnimationLength", clickAnimationLength);
    context.commit("setClickAnimationVariation", clickAnimationVariation);
    context.commit("setClickAnimationColor", clickAnimationColor);
  },
  changeColorFromVariation(context, payload = 1) {
    const finalColor = getFinalColor(context, payload);
    context.commit("setClickAnimationColor", finalColor);
  },
  changeColorRandomByVariation(context, payload = 1) {
    const { clickAnimationColorVariation } = context.state;
    const mult = Math.floor(
      Math.random() * (payload * clickAnimationColorVariation)
    );
    const finalColor = getFinalColor(context, mult);
    context.commit("setClickAnimationColor", finalColor);
  },
  setRadius(context, payload) {
    context.commit("setClickAnimationRadius", payload);
  },
  incrementRadius(context) {
    const { clickAnimationRadius } = context.state;
    context.commit("setClickAnimationRadius", clickAnimationRadius + 1);
  },
  decrementRadius(context) {
    const { clickAnimationRadius } = context.state;
    context.commit("setClickAnimationRadius", clickAnimationRadius - 1);
  }
};

const separateColorsAndVariationFromContext = context => {
  const { clickAnimationColor, clickAnimationColorVariation } = context.state;
  const separateColors = separateRGB(clickAnimationColor);
  return [separateColors, clickAnimationColorVariation];
};

const getFinalColor = (context, mult) => {
  const [separateColors, animColorVar] = separateColorsAndVariationFromContext(
    context
  );
  return getColorAndVariation(separateColors, animColorVar, mult);
};
