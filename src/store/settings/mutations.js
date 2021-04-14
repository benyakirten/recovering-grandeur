export default {
  mutateClickAnimation(state) {
    state.clickAnimationEnabled = !state.clickAnimationEnabled;
  },
  setClickAnimation(state, payload) {
    state.clickAnimationEnabled = payload;
  },
  mutateHeaderCanvas(state) {
    state.headerCanvasEnabled = !state.headerCanvasEnabled;
  },
  setHeaderCanvas(state, payload) {
    state.headerCanvasEnabled = payload;
  }
};
