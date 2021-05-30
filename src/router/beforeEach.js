import store from "../store";

const beforeEach = {
  activateDefaultSettings(to) {
    // This sets the color scheme according to meta data in the router
    // And refreshes the links after a second delay
    // This make the links float back in jankily (on purpose)
    if (to.meta.headerDefault) {
      store.dispatch("colorScheme/setDefaultColors");
    } else {
      store.dispatch("colorScheme/setHeaderQualities", {
        headerBackgroundColor:
          to.meta.headerBackgroundColorDefault || "#7ed56f",
        headerLinkColor: to.meta.headerLinkColorDefault || "#2c2c2c",
        headerOpacity: to.meta.headerOpacityDefault || 0.4
      });
    }
  },
  allowOnlyVisibleRoutes(to, _, next) {
    if (
      !store.getters["links/getActiveLinks"].find(l => l.link === to.path) &&
      to.path !== "/not-found"
    ) {
      next("/not-found");
      return;
    }
    next();
  }
};

export default beforeEach;
