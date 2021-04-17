export default {
  disableBreakpoint(context) {
    context.commit("setBreakpointEnabled", false);
    context.dispatch("setLocalStorageSettings");
  },
  enableBreakpoint(context) {
    context.commit("setBreakpointEnabled", true);
    context.dispatch("setLocalStorageSettings");
  },
  toggleBreakpointEnabled(context) {
    context.commit("toggleBreakpointEnabled");
    context.dispatch("setLocalStorageSettings");
  },
  disableClickAnimation(context) {
    context.commit("setClickAnimation", false);
    context.dispatch("setLocalStorageSettings");
  },
  enableClickAnimation(context) {
    context.commit("setClickAnimation", true);
    context.dispatch("setLocalStorageSettings");
  },
  toggleClickAnimation(context) {
    context.commit("toggleClickAnimation");
    context.dispatch("setLocalStorageSettings");
  },
  disableHeaderCanvas(context) {
    context.commit("setHeaderCanvas", false);
    context.dispatch("setLocalStorageSettings");
  },
  enableHeaderCanvas(context) {
    context.commit("setHeaderCanvas", true);
    context.dispatch("setLocalStorageSettings");
  },
  toggleHeaderCanvas(context) {
    context.commit("toggleHeaderCanvas");
    context.dispatch("setLocalStorageSettings");
  },
  disableHeaderCanvasColorRandomization(context) {
    context.commit("setHeaderCanvasRandomizeColor", false);
    context.dispatch("setLocalStorageSettings");
  },
  enableHeaderCanvasColorRandomization(context) {
    context.commit("setHeaderCanvasRandomizeColor", true);
    context.dispatch("setLocalStorageSettings");
  },
  toggleHeaderCanvasColorRandomization(context) {
    context.commit("toggleHeaderCanvasRandomizeColor");
    context.dispatch("setLocalStorageSettings");
  },
  closeDropdowns(context) {
    context.commit("setDropdown", null);
  },
  setOpendropdown(context, payload) {
    context.commit("setDropdown", payload);
  },
  toggleOpenDropdown(context, payload) {
    context.state.dropdownOpen === payload
      ? context.commit("setDropdown", null)
      : context.commit("setDropdown", payload);
  },
  loadAll(
    context,
    {
      breakpointEnabled,
      clickAnimationEnabled,
      headerCanvasEnabled,
      headerCanvasRandomizeColorsEnabled
    }
  ) {
    context.commit("setBreakpointEnabled", breakpointEnabled);
    context.commit("setClickAnimation", clickAnimationEnabled);
    context.commit("setHeaderCanvas", headerCanvasEnabled);
    context.commit(
      "setHeaderCanvasRandomizeColor",
      headerCanvasRandomizeColorsEnabled
    );
    context.dispatch("setLocalStorageSettings");
  },
  loadAllSettings(
    context,
    {
      breakpointData,
      clickAnimationData,
      headerCanvasData,
      linksData,
      settingsData
    }
  ) {
    console.log(
      breakpointData,
      clickAnimationData,
      headerCanvasData,
      linksData,
      settingsData
    );
    if (breakpointData) {
      context.dispatch("breakpoint/loadAll", breakpointData, { root: true });
    }
    if (clickAnimationData) {
      context.dispatch("clickAnimation/loadAll", clickAnimationData, {
        root: true
      });
    }
    if (headerCanvasData) {
      context.dispatch("headerCanvas/loadAll", headerCanvasData, {
        root: true
      });
    }
    if (linksData) {
      context.dispatch("links/loadAll", linksData, { root: true });
    }
    if (settingsData) {
      context.dispatch("settings/loadAll", settingsData, { root: true });
    }
  },
  setDefaults(context) {
    context.commit("setBreakpointEnabled", true);
    context.commit("setClickAnimation", true);
    context.commit("setHeaderCanvas", true);
    context.commit("setHeaderCanvasRandomizeColor", true);
    context.dispatch("setLocalStorageSettings");
  },
  setAllDefaults({ dispatch }) {
    dispatch("breakpoint/setDefaults", null, { root: true });
    dispatch("clickAnimation/setDefaults", null, { root: true });
    dispatch("headerCanvas/setDefaults", null, { root: true });
    dispatch("links/setDefaults", null, { root: true });
    dispatch("settings/setDefaults", null, { root: true });
  },
  setLocalStorageSettings(context) {
    const {
      breakpointEnabled,
      clickAnimationEnabled,
      headerCanvasEnabled,
      headerCanvasRandomizeColorsEnabled
    } = context.state;
    localStorage.setItem(
      "RG_S",
      JSON.stringify({
        breakpointEnabled,
        clickAnimationEnabled,
        headerCanvasEnabled,
        headerCanvasRandomizeColorsEnabled
      })
    );
  }
};
