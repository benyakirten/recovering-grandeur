export default {
  liveLinks({ links }) {
    return links.filter(l => !!l.live);
  },
  deadLinks({ links }) {
    return links.filter(l => !l.live);
  },
  getEnabledTransitions({ transitions }) {
    return transitions.filter(t => !!t.enabled).map(t => t.name);
  },
  getDisabledTransitions({ transitions }) {
    return transitions.filter(t => !t.enabled).map(t => t.name);
  }
};
