export default {
  toggleLink(state, payload) {
    state.links = state.links.map(l =>
      l.name === payload ? { ...l, live: !l.live } : l
    );
  },
  setAllLive(state) {
    state.links = state.links.map(l => ({ ...l, live: true }));
  },
  setAllDead(state) {
    state.links = state.links.map(l => ({ ...l, live: false }));
  },
  invertAll(state) {
    state.links = state.links.map(l => ({ ...l, live: !l.live }));
  },
  setAnchorId(state, payload) {
    state.anchorId = payload;
  },
  setButtonAction(state, payload) {
    state.buttonAction = payload;
  },
  setTransitions(state, payload) {
    state.transitions = payload;
  },
  setVisibleLinks(state, payload) {
    state.links = payload;
  },
  setHiddenLinks(state, payload) {
    state.hiddenLinks = payload;
  }
};
