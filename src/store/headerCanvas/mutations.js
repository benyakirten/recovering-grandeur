export default {
  changeNumberOfCircles(state, payload) {
    state.numberOfCircles = payload;
  },
  changeStartColor(state, payload) {
    state.startColor = payload;
  },
  changeEndColor(state, payload) {
    state.endColor = payload;
  },
  changeStartRadius(state, payload) {
    state.startRadius = payload;
  },
  changeRadiusDelta(state, payload) {
    state.radiusDelta = payload;
  }
};
