export default {
  toggleLink({ commit }, payload) {
    commit("toggleLink", payload);
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
  },
  setVisibleLinks(context, payload) {
    context.commit("setVisibleLinks", payload);
    context.dispatch("setLocalStorageLinks");
  },
  setHiddenLinks(context, payload) {
    context.commit("setHiddenLinks", payload);
    context.dispatch("setLocalStorageLinks");
  },
  addVisibleLink(context, payload) {
    const { links, hiddenLinks } = context.state;
    if (links.find(l => l.name === payload)) {
      return;
    }
    const link = hiddenLinks.find(l => l.name === payload);
    const linkIdx = hiddenLinks.indexOf(link);
    hiddenLinks.splice(linkIdx, 1);
    context.commit("setVisibleLinks", [link, ...links]);
    context.commit("setHiddenLinks", hiddenLinks);
    context.dispatch("setLocalStorageLinks");
  },
  addHiddenLink(context, payload) {
    const { links, hiddenLinks } = context.state;
    if (hiddenLinks.find(l => l.name === payload)) {
      return;
    }
    const link = links.find(l => l.name === payload);
    const linkIdx = links.indexOf(link);
    links.splice(linkIdx, 1);
    context.commit("setHiddenLinks", [link, ...hiddenLinks]);
    context.commit("setVisibleLinks", links);
    context.dispatch("setLocalStorageLinks");
  },
  disableTransition(context, payload) {
    const { transitions } = context.state;
    context.commit(
      "setTransitions",
      transitions.map(t => (t.name === payload ? { ...t, enabled: false } : t))
    );
    context.dispatch("setLocalStorageLinks");
  },
  enableTransition(context, payload) {
    const { transitions } = context.state;
    context.commit(
      "setTransitions",
      transitions.map(t => (t.name === payload ? { ...t, enabled: true } : t))
    );
    context.dispatch("setLocalStorageLinks");
  },
  toggleTransition(context, payload) {
    const { transitions } = context.state;
    context.commit(
      "setTransitions",
      transitions.map(t =>
        t.name === payload ? { ...t, enabled: !t.enabled } : t
      )
    );
    context.dispatch("setLocalStorageLinks");
  },
  loadAll(context, { links, transitions, hiddenLinks }) {
    context.commit(
      "setTransitions",
      transitions || [
        { name: "slide-right", enabled: true },
        { name: "slide-left", enabled: true },
        { name: "fade", enabled: true },
        { name: "scale", enabled: true },
        { name: "mix-slide-left-fade", enabled: true }
      ]
    );
    context.commit(
      "setHiddenLinks",
      hiddenLinks || [{ link: "/games", name: "Games", live: true }]
    );
    context.commit(
      "setVisibleLinks",
      links || [
        { link: "/", name: "Home", live: true },
        { link: "/pricing", name: "Solutions and Pricing", live: true },
        { link: "/quality", name: "Quality of Care", live: true },
        { link: "/meet-us", name: "Meet Us", live: true },
        { link: "/about", name: "About & Settings", live: true }
      ]
    );
    context.dispatch("setLocalStorageLinks");
  },
  setDefaults(context) {
    const links = [
      { link: "/", name: "Home", live: true },
      { link: "/pricing", name: "Solutions and Pricing", live: true },
      { link: "/quality", name: "Quality of Care", live: true },
      { link: "/meet-us", name: "Meet Us", live: true },
      { link: "/about", name: "About & Settings", live: true }
    ];
    const hiddenLinks = [{ link: "/games", name: "Games", live: true }];
    const transitions = [
      { name: "slide-right", enabled: true },
      { name: "slide-left", enabled: true },
      { name: "fade", enabled: true },
      { name: "scale", enabled: true },
      { name: "mix-slide-left-fade", enabled: true }
    ];
    context.commit("setTransitions", transitions);
    context.commit("setVisibleLinks", links);
    context.commit("setHiddenLinks", hiddenLinks);
    context.dispatch("setLocalStorageLinks");
  },
  setLocalStorageLinks(context) {
    const { links, transitions, hiddenLinks } = context.state;
    localStorage.setItem(
      "RG_L",
      JSON.stringify({
        links,
        transitions,
        hiddenLinks
      })
    );
  }
};

const findSafeLink = (links, status) => {
  const safeLinks = links.filter(
    l => !l.name.contains("About") && l.live === status
  );
  const idx = Math.floor(Math.random() * safeLinks.length);
  return safeLinks[idx].name;
};
