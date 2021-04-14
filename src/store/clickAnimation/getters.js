import { separateRGB, getColorAndVariation } from "@/utils/hexAndDecimals";

export default {
  clickAnimationLength(state) {
    return state.clickAnimationLength;
  },
  clickAnimationLengthVariation(state) {
    return state.clickAnimationLengthVariation;
  },
  clickAnimationColor(state) {
    return state.clickAnimationColor;
  },
  clickAnimationColorVariation(state) {
    return state.clickAnimationColorVariation;
  },
  clickAnimationColorPlusVariation(state) {
    const [color, colorVar] = getClickColorsAndSeparate(state);
    return getColorAndVariation(color, colorVar);
  },
  clickAnimationColorMinusVariation(state) {
    const [color, colorVar] = getClickColorsAndSeparate(state);
    return getColorAndVariation(color, colorVar, -1);
  },
  clickAnimationRadius(state) {
    return state.clickAnimationRadius;
  }
};

const getClickColorsAndSeparate = state => {
  const { clickAnimationColor, clickAnimationColorVariation } = state;
  const animColorSeparated = separateRGB(clickAnimationColor);
  const animColorVarSeparated = separateRGB(clickAnimationColorVariation);
  return [animColorSeparated, animColorVarSeparated];
};
