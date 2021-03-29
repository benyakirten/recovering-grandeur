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
  }
};