export default {
  toggleLink(context, payload) {
    context.commit("toggleLink", payload);
  },
  toggleRandomLink(context) {
    // In the context of removing a random link, we never
    // want the remove the about link because it's the "safe" link
    // and the way to see the related book/repo/portfolio
    const safeLinks = context.state.links.filter(l => l.name !== "About");
    const idx = Math.floor(Math.random() * safeLinks.length);
    context.commit("toggleLink", safeLinks[idx].name);
  },
  enlivenRandomLink(context) {
    context.commit("toggleLink", findSafeLink(context.state.links, false));
  },
  killRandomLink(context) {
    context.commit("toggleLink", findSafeLink(context.state.links, true));
  },
  enlivenLinks(context) {
    context.commit("setAllLive");
  },
  killLinks(context) {
    context.commit("setAllDead");
  },
  invertLinks(context) {
    context.commit("invertAll");
  },
  setButtonAction(context, payload) {
    context.commit("setButtonAction", payload);
  },
  setAnchorId(context, payload) {
    context.commit("setAnchorId", payload);
  }
};

const findSafeLink = (links, status) => {
  const safeLinks = links.filter(l => l.name !== "About" && l.live === status);
  const idx = Math.floor(Math.random() * safeLinks.length);
  return safeLinks[idx].name;
};
