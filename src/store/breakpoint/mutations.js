export default {
  setBreakpoint(state, payload) {
    state.breakpoint = payload;
  },
  setMaxAdd(state, payload) {
    state.maxAdd = payload;
  },
  setMinimum(state, payload) {
    state.minimum = payload;
  },
  setClickWave(state, payload) {
    state.makeClickWave = payload;
  },
  setHeaderWave(state, payload) {
    state.makeHeaderWave = payload;
  }
};
