import store from "../store";

const DEFAULT_TITLE = "Recovering Granduer";

// Set title of each document based on meta property
const afterEach = {
  setTitle(to) {
    document.title = `${to.meta.title || DEFAULT_TITLE}
      - Recovering Grandeur`;
  },
  bringLinksBack() {
    setTimeout(() => store.dispatch("links/enlivenLinks"), 1000);
  },
  adjustBreakpoint(_, from) {
    if (
      !store.getters["settings/breakpointEnabled"] ||
      from.matched.length === 0
    ) {
      return;
    }
    store.dispatch(
      "breakpoint/changeBreakpoint",
      Math.floor(Math.random() * store.getters["breakpoint/maxAdd"])
    );
  },
  ghostActs(_, from) {
    if (from.matched.length !== 0) {
      store.dispatch("breakpoint/ghostActs");
    }
  }
};

export default afterEach;
