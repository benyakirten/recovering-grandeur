import { getHexFromNamedColor, namedColorsAndHexes } from "@/utils/namedColors";
import { getRandomValueFromObject } from "@/utils/other";

export default {
  setNumberOfCircles(context, payload) {
    context.commit("changeNumberOfCircles", payload);
    context.dispatch("setLocalStorageHeaderCanvas");
  },
  setStartColor(context, payload) {
    context.commit("changeStartColor", getHexFromNamedColor(payload));
    context.dispatch("setLocalStorageHeaderCanvas");
  },
  setEndColor(context, payload) {
    context.commit("changeEndColor", getHexFromNamedColor(payload));
    context.dispatch("setLocalStorageHeaderCanvas");
  },
  setRandomStartAndEndColors(context) {
    const randomStartColor = getRandomValueFromObject(namedColorsAndHexes);
    let randomEndColor = getRandomValueFromObject(namedColorsAndHexes);
    // Keep choosing until these are two different colors
    while (randomEndColor === randomStartColor) {
      randomEndColor = getRandomValueFromObject(namedColorsAndHexes);
    }
    context.commit("changeStartColor", randomStartColor);
    context.commit("changeEndColor", randomEndColor);
    context.dispatch("setLocalStorageHeaderCanvas");
  },
  setStartRadius(context, payload) {
    context.commit("changeStartRadius", payload);
    context.dispatch("setLocalStorageHeaderCanvas");
  },
  setRadiusDelta(context, payload) {
    context.commit("changeRadiusDelta", payload);
    context.dispatch("setLocalStorageHeaderCanvas");
  },
  loadAll(
    context,
    { numberOfCircles, startColor, endColor, startRadius, radiusDelta }
  ) {
    context.commit("changeNumberOfCircles", numberOfCircles || 50);
    context.commit("changeStartColor", startColor || "#00ff00");
    context.commit("changeEndColor", endColor || "#ff00ff");
    context.commit("changeStartRadius", startRadius || 1);
    context.commit("changeRadiusDelta", radiusDelta || 1.15);
    context.dispatch("setLocalStorageHeaderCanvas");
  },
  setDefaults(context) {
    context.commit("changeNumberOfCircles", 50);
    context.commit("changeStartColor", "#00ff00");
    context.commit("changeEndColor", "#ff00ff");
    context.commit("changeStartRadius", 1);
    context.commit("changeRadiusDelta", 1.15);
    context.dispatch("setLocalStorageHeaderCanvas");
  },
  setLocalStorageHeaderCanvas(context) {
    const {
      numberOfCircles,
      startColor,
      endColor,
      startRadius,
      radiusDelta
    } = context.state;
    localStorage.setItem(
      "RG_HC",
      JSON.stringify({
        numberOfCircles,
        startColor,
        endColor,
        startRadius,
        radiusDelta
      })
    );
  }
};
