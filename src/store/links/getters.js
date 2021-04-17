export default {
  liveLinks({ links }) {
    return links.filter(l => !!l.live);
  },
  deadLinks({ links }) {
    return links.filter(l => !l.live);
  },
  liveLinksLength(_, { liveLinks }) {
    return liveLinks.length;
  },
  deadLinksLength(_, { deadLinks }) {
    return deadLinks.length;
  },
  getAnchorId({ anchorId }) {
    return anchorId;
  },
  getButtonAction({ buttonAction }) {
    return buttonAction;
  },
  getAllTransitions({ transitions }) {
    return transitions;
  },
  getEnabledTransitions({ transitions }) {
    return transitions.filter(t => !!t.enabled).map(t => t.name);
  },
  getDisabledTransitions({ transitions }) {
    return transitions.filter(t => !t.enabled).map(t => t.name);
  },
  getEnabledLinks({ links }) {
    return links;
  },
  getDisabledLinks({ disabledLinks }) {
    return disabledLinks;
  },
  getLinksAllInfo({ links, otherLinks, transitions }) {
    return { links, otherLinks, transitions };
  }
};
