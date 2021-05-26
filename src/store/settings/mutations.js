export default {
  toggleBreakpointEnabled(state) {
    state.breakpointEnabled = !state.breakpointEnabled;
  },
  setBreakpointEnabled(state, payload) {
    state.breakpointEnabled = payload;
  },
  toggleClickAnimation(state) {
    state.clickAnimationEnabled = !state.clickAnimationEnabled;
  },
  setClickAnimation(state, payload) {
    state.clickAnimationEnabled = payload;
  },
  toggleHeaderCanvas(state) {
    state.headerCanvasEnabled = !state.headerCanvasEnabled;
  },
  setHeaderCanvas(state, payload) {
    state.headerCanvasEnabled = payload;
  },
  toggleHeaderCanvasRandomizeColor(state) {
    state.headerCanvasRandomizeColorsEnabled = !state.headerCanvasRandomizeColorsEnabled;
  },
  setHeaderCanvasRandomizeColor(state, payload) {
    state.headerCanvasRandomizeColorsEnabled = payload;
  },
  setDropdown(state, payload) {
    state.dropdownOpen = payload;
  },
  setScrollY(state, payload) {
    state.scrollY = payload;
  }
};
