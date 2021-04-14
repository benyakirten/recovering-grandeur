import store from "../store";

const beforeEach = {
  enableSetup(to) {
    const breakpoint = store.getters["breakpoint/breakpoint"];
    if (breakpoint) {
      // ...yada, yada, yada
      console.log("breakpoint stuff, TBI");
    } else {
      enableDefaultSettings(to);
    }
  }
};

// This creates default settings before breakpoint
// Sets the color scheme according to meta data in the router
// And refreshes the links after a second delay
// This make the links float back in jankily (on purpose)
const enableDefaultSettings = to => {
  if (to.meta.headerDefault) {
    store.dispatch("colorScheme/setDefaultColors");
  } else {
    store.dispatch("colorScheme/setHeaderQualities", {
      headerBackgroundColor: to.meta.headerBackgroundColorDefault || "#7ed56f",
      headerLinkColor: to.meta.headerLinkColorDefault || "#2c2c2c",
      headerOpacity: to.meta.headerOpacityDefault || 0.4
    });
  }
  setTimeout(() => store.dispatch("links/enlivenLinks"), 1000);
};

export default beforeEach;
