import { breakpointEnum } from "@/utils/enums";
import { betweenMinAndMax, getRandomItemFromObject } from "@/utils/other";
import { namedColorsAndHexes } from "@/utils/namedColors";

export default {
  changeBreakpoint(context, payload) {
    const newBP = betweenMinAndMax(context.state.breakpoint, payload);
    context.commit("setBreakpoint", newBP);
    context.dispatch("setLocalStorageBreakpoint");
  },
  incrementBreakpoint(context) {
    const newBP = betweenMinAndMax(
      context.state.breakpoint,
      Math.floor(Math.random() * (context.state.maxAdd - 1)) + 1
    );
    context.commit("setBreakpoint", newBP);
    context.dispatch("setLocalStorageBreakpoint");
  },
  setBreakpoint(context, payload) {
    const newBP = betweenMinAndMax(payload, 0);
    context.commit("setBreakpoint", newBP);
    context.dispatch("setLocalStorageBreakpoint");
  },
  setMaxAdd(context, payload) {
    const newMax = betweenMinAndMax(payload, 0, 0, 10);
    context.commit("setMaxAdd", newMax);
    context.dispatch("setLocalStorageBreakpoint");
  },
  setMinimum(context, payload) {
    const newMinimum = betweenMinAndMax(payload, 0);
    context.commit("setMinimum", newMinimum);
    context.dispatch("setLocalStorageBreakpoint");
  },
  startClickWave(context) {
    context.commit("setClickWave", true);
  },
  stopClickWave(context) {
    context.commit("setClickWave", false);
  },
  startHeaderWave(context) {
    context.commit("setHeaderWave", true);
  },
  stopHeaderWave(context) {
    context.commit("setHeaderWave", false);
  },
  loadAll(context, { breakpoint, maxAdd, minimum }) {
    context.commit("setBreakpoint", breakpoint);
    context.commit("setMaxAdd", maxAdd);
    context.commit("setMinimum", minimum);
    context.dispatch("setLocalStorageBreakpoint");
  },
  setDefaults(context) {
    context.commit("setMaxAdd", 5);
    context.commit("setBreakpoint", 0);
    context.commit("setMinimum", 10);
    context.dispatch("setLocalStorageBreakpoint");
  },
  ghostActs(context) {
    if (!context.rootGetters["settings/breakpointEnabled"]) {
      return;
    }
    const { breakpoint, minimum } = context.state;
    let interval;
    let rep = 0;
    // Note: this dice throw can still fail if it's over the limit, but
    // the greater the breakpoint, the greater the probability of action
    if (Math.floor(Math.random() * breakpoint) > minimum) {
      const randomAction = getRandomItemFromObject(breakpointEnum);
      switch (randomAction) {
        case breakpointEnum.changeHeaderColor:
          context.dispatch(
            "settings/disableHeaderCanvasColorRandomization",
            null,
            { root: true }
          );
          context.dispatch("headerCanvas/setRandomStartAndEndColors", null, {
            root: true
          });
          break;
        case breakpointEnum.changeHeaderRadiusDelta:
          // The delta must be greater than 1, and it serves nothing for it to be over 1.2
          context.dispatch(
            "headerCanvas/setRadiusDelta",
            1 + Math.random() * 0.2,
            { root: true }
          );
          break;
        case breakpointEnum.changeHeaderNoCircles:
          Math.random() > 0.5
            ? context.dispatch(
                "headerCanvas/setNumberOfCircles",
                Math.floor(Math.random() * 150) + 150,
                { root: true }
              )
            : context.dispatch(
                "headerCanvas/setNumberOfCircles",
                Math.floor(Math.random() * 100) + 1,
                { root: true }
              );
          break;
        case breakpointEnum.changeClickAnimationLength:
          Math.random() > 0.5
            ? context.dispatch(
                "clickAnimation/setAnimationLength",
                Math.floor(Math.random() * 900) + 1000,
                { root: true }
              )
            : context.dispatch(
                "clickAnimation/setAnimationLength",
                Math.floor(Math.random() * 350) + 200,
                { root: true }
              );
          break;
        case breakpointEnum.changeClickAnimatonVariation:
          context.dispatch(
            "clickAnimation/setAnimationLengthVariation",
            // eslint-disable-next-line
            Math.floor(Math.random() * context.rootGetters["clickAnimation/clickAnimationLength"] * 3 / 4) +
              // eslint-disable-next-line
              Math.floor(context.rootGetters["clickAnimation/clickAnimationLength"] / 4),
            { root: true }
          );
          break;
        case breakpointEnum.changeClickAnimationColor:
          context.dispatch(
            "clickAnimation/setAnimationColor",
            getRandomItemFromObject(namedColorsAndHexes),
            { root: true }
          );
          break;
        case breakpointEnum.changeClickAnimationInitialRadius:
          context.dispatch(
            "clickAnimation/setAnimationRadius",
            Math.floor(Math.random() * 40) + 1,
            { root: true }
          );
          break;
        case breakpointEnum.makeClickAnimationWave:
          context.dispatch("settings/enableClickAnimation", null, {
            root: true
          });
          interval = setInterval(() => {
            if (rep > 10) {
              window.clearInterval(interval);
            }
            rep++;
            context.dispatch("startClickWave");
          }, Math.floor(Math.random() * breakpoint * 2) + 100);
          break;
        case breakpointEnum.makeHeaderWave:
          context.dispatch("settings/enableHeaderCanvas", null, {
            root: true
          });
          interval = setInterval(() => {
            if (rep > 5) {
              window.clearInterval(interval);
            }
            rep++;
            context.dispatch("startHeaderWave");
          }, Math.floor(Math.random() * breakpoint * 2) + 500);
          break;
        case breakpointEnum.toggleHeaderCanvas:
          context.dispatch("settings/toggleHeaderCanvas", null, { root: true });
          if (Math.floor(Math.random() * breakpoint) < 25) {
            setTimeout(
              () =>
                context.dispatch("settings/toggleHeaderCanvas", null, {
                  root: true
                }),
              Math.floor(Math.random() * breakpoint) * 500
            );
          }
          break;
        case breakpointEnum.toggleHeaderCanvasColorRandomization:
          context.dispatch(
            "settings/toggleHeaderCanvasColorRandomization",
            null,
            { root: true }
          );
          if (Math.floor(Math.random() * breakpoint) < 25) {
            setTimeout(
              () =>
                context.dispatch(
                  "settings/toggleHeaderCanvasColorRandomization",
                  null,
                  { root: true }
                ),
              Math.floor(
                Math.random() * context.rootGetters["breakpoint/breakpoint"]
              ) * 500
            );
          }
          break;
        case breakpointEnum.toggleClickAnimation:
          context.dispatch("settings/toggleClickAnimation", null, {
            root: true
          });
          if (Math.floor(Math.random() * breakpoint) < 25) {
            setTimeout(
              () =>
                context.dispatch("settings/toggleClickAnimation", null, {
                  root: true
                }),
              Math.floor(
                Math.random() * context.rootGetters["breakpoint/breakpoint"]
              ) * 500
            );
          }
          break;
        default:
          console.log("How did you get here?");
          break;
      }
    }
  },
  setLocalStorageBreakpoint(context) {
    const { breakpoint, maxAdd, minimum } = context.state;
    localStorage.setItem(
      "RG_B",
      JSON.stringify({
        breakpoint,
        maxAdd,
        minimum
      })
    );
  }
};
