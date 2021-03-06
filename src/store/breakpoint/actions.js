import { breakpointEnum } from "@/utils/enums";
import {
  betweenMinAndMax,
  getRandomValueFromObject,
  shuffleSmallArray
} from "@/utils/other";
import { namedColorsAndHexes } from "@/utils/namedColors";

export default {
  changeBreakpoint(context, payload) {
    const newBP = betweenMinAndMax(
      context.state.breakpoint,
      payload,
      0,
      context.state.breakpointMaximum
    );
    context.commit("setBreakpoint", newBP);
    context.dispatch("setLocalStorageBreakpoint");
  },
  incrementBreakpoint(context) {
    const newBP = betweenMinAndMax(
      context.state.breakpoint,
      Math.floor(Math.random() * (context.state.maxAdd - 1)) + 1,
      0,
      context.state.breakpointMaximum
    );
    context.commit("setBreakpoint", newBP);
    context.dispatch("setLocalStorageBreakpoint");
  },
  setBreakpoint(context, payload) {
    const newBP = betweenMinAndMax(
      payload,
      0,
      0,
      context.state.breakpointMaximum
    );
    context.commit("setBreakpoint", newBP);
    context.dispatch("setLocalStorageBreakpoint");
  },
  setBreakpointMaximum(context, payload) {
    const newBPM = betweenMinAndMax(payload, 0, 100, 500);
    context.commit("setBreakpointMaximum", newBPM);
    if (newBPM < context.state.breakpoint) {
      context.commit("setBreakpoint", newBPM);
    }
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
  startHeaderWave(context, payload) {
    context.commit("setHeaderWave", payload || true);
  },
  stopHeaderWave(context) {
    context.commit("setHeaderWave", false);
  },
  loadAll(context, { breakpoint, breakpointMaximum, maxAdd, minimum }) {
    context.commit("setBreakpoint", breakpoint);
    context.commit("setBreakpointMaximum", breakpointMaximum);
    context.commit("setMaxAdd", maxAdd);
    context.commit("setMinimum", minimum);
    context.dispatch("setLocalStorageBreakpoint");
  },
  setDefaults(context) {
    context.commit("setBreakpoint", 0);
    context.commit("setBreakpointMaximum", 150);
    context.commit("setMaxAdd", 5);
    context.commit("setMinimum", 10);
    context.dispatch("setLocalStorageBreakpoint");
  },
  ghostActs(context) {
    if (!context.rootState.settings.breakpointEnabled) {
      return;
    }
    const { breakpoint, minimum } = context.state;
    let interval;
    let rep = 0;

    // For moving the links around
    let firstRandomIdx;
    let secondRandomIdx;
    let links;
    let hiddenLinks;
    let about;
    let otherLink;
    let hiddenLink;
    // Note: this dice throw can still fail if it's over the limit, but
    // the greater the breakpoint, the greater the probability of action
    if (Math.floor(Math.random() * breakpoint) > minimum) {
      const randomAction = getRandomValueFromObject(breakpointEnum);
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
            Math.floor(Math.random() * context.rootState.clickAnimation.clickAnimationLength * 3 / 4) +
              // eslint-disable-next-line
              Math.floor(context.rootState.clickAnimation.clickAnimationLength / 4),
            { root: true }
          );
          break;
        case breakpointEnum.changeClickAnimationColor:
          context.dispatch(
            "clickAnimation/setAnimationColor",
            getRandomValueFromObject(namedColorsAndHexes),
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
          setTimeout(() => {
            context.dispatch("settings/toggleHeaderCanvas", null, {
              root: true
            });
          }, Math.floor(Math.random() * breakpoint) * 2 + 500);
          break;
        case breakpointEnum.toggleHeaderCanvasColorRandomization:
          context.dispatch(
            "settings/toggleHeaderCanvasColorRandomization",
            null,
            { root: true }
          );
          setTimeout(() => {
            context.dispatch(
              "settings/toggleHeaderCanvasColorRandomization",
              null,
              { root: true }
            );
          }, Math.floor(Math.random() * breakpoint) * 2 + 500);
          break;
        case breakpointEnum.toggleClickAnimation:
          context.dispatch("settings/toggleClickAnimation", null, {
            root: true
          });
          setTimeout(() => {
            context.dispatch("settings/toggleClickAnimation", null, {
              root: true
            });
          }, Math.floor(Math.random() * breakpoint) * 2 + 500);
          break;
        case breakpointEnum.shuffleAvailableLinks:
          links = context.rootState.links.links;
          about = links.pop();
          // Remove the about link - it needs to always be there
          shuffleSmallArray(links);
          // Shuffle the rest
          context.commit("links/setVisibleLinks", [...links, about], {
            root: true
          });
          // Add the about link again
          break;
        case breakpointEnum.changeHiddenLink:
          links = context.rootState.links.links;
          hiddenLinks = context.rootState.links.hiddenLinks;
          // Remove the about link so it can't be a candidate
          about = links.pop();
          // Get a random index from the links and one from the hidden links
          firstRandomIdx = Math.floor(Math.random() * links.length);
          secondRandomIdx = Math.floor(Math.random() * hiddenLinks.length);
          // Grab a link and remove it from each list
          [otherLink] = links.splice(firstRandomIdx, 1);
          [hiddenLink] = hiddenLinks.splice(secondRandomIdx, 1);
          // Switch which list they're in at index 0
          links.unshift(hiddenLink);
          hiddenLinks.unshift(otherLink);
          context.dispatch("links/setVisibleLinks", [...links, about], {
            root: true
          });
          // Set the links
          context.dispatch("links/setHiddenLinks", hiddenLinks, { root: true });
          // Store the hidden link for later
          break;
        default:
          console.log("How did you get here?");
          break;
      }
    }
  },
  setLocalStorageBreakpoint(context) {
    const { breakpoint, breakpointMaximum, maxAdd, minimum } = context.state;
    localStorage.setItem(
      "RG_B",
      JSON.stringify({
        breakpoint,
        breakpointMaximum,
        maxAdd,
        minimum
      })
    );
  }
};
