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
  activateLink(context, payload) {
    const { links, disabledLinks } = context.state;
    const link = disabledLinks.find(l => l.name === payload);
    context.commit(
      "setDisabledLinks",
      disabledLinks.filter(l => l.name !== payload)
    );
    context.commit("setEnabledLinks", [...links, link]);
    context.dispatch("setLocalStorageLinks");
  },
  activateRandomLink(context) {
    const { links, disabledLinks } = context.state;
    const randomLink =
      disabledLinks[Math.floor(Math.random() * disabledLinks.length)];
    context.commit(
      "setDisabledLinks",
      disabledLinks.filter(l => l.name !== randomLink.name)
    );
    context.commit("setEnabledLinks", [...links, randomLink]);
    context.dispatch("setLocalStorageLinks");
  },
  deactivateLink(context, payload) {
    const { links, disabledLinks } = context.state;
    const link = links.find(l => l.name === payload);
    context.commit(
      "setEnabledLinks",
      links.filter(l => l.name !== payload)
    );
    context.commit("setDisabledLinks", [...disabledLinks, link]);
    context.dispatch("setLocalStorageLinks");
  },
  deactiveRandomLink(context) {
    const { links, disabledLinks } = context.state;
    const safeLinks = links.filter(l => !l.name.includes("About"));
    const randomLink = safeLinks[Math.floor(Math.random() * safeLinks.length)];
    context.commit(
      "setEnabledLinks",
      links.filter(l => l.name !== randomLink.name)
    );
    context.commit("setDisabledLinks", [...disabledLinks, randomLink]);
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
  loadAll(context, { links, disabledLinks, transitions }) {
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
      "setEnabledLinks",
      links || [
        { link: "/", name: "Home", live: true },
        { link: "/pricing", name: "Solutions and Pricing", live: true },
        { link: "/quality", name: "Quality of Care", live: true },
        { link: "/meet-us", name: "Meet Us", live: true },
        { link: "/about", name: "About & Settings", live: true }
      ]
    );
    context.commit(
      "setDisabledLinks",
      disabledLinks || [
        { link: "/contact", name: "Contact Us", live: false },
        { link: "/builder", name: "Page Builder", live: false }
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
    const disabledLinks = [
      { link: "/contact", name: "Contact Us", live: false },
      { link: "/builder", name: "Page Builder", live: false }
    ];
    const transitions = [
      { name: "slide-right", enabled: true },
      { name: "slide-left", enabled: true },
      { name: "fade", enabled: true },
      { name: "scale", enabled: true },
      { name: "mix-slide-left-fade", enabled: true }
    ];
    context.commit("setTransitions", transitions);
    context.commit("setEnabledLinks", links);
    context.commit("setDisabledLinks", disabledLinks);
    context.dispatch("setLocalStorageLinks");
  },
  setLocalStorageLinks(context) {
    const { links, disabledLinks, transitions } = context.state;
    localStorage.setItem(
      "RG_L",
      JSON.stringify({
        links,
        disabledLinks,
        transitions
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
