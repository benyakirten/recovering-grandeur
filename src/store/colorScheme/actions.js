export default {
  setHeaderBackgroundColor(context, payload) {
    context.commit("setHeaderBackgroundColor", payload);
  },
  setHeaderLinkColor(context, payload) {
    context.commit("setHeaderLinkColor", payload);
  },
  modifyHeaderOpacity(context, payload) {
    const opacity = context.state.headerOpacity + payload;
    if (opacity > 1) {
      context.commit("setHeaderOpacity", 1);
    } else if (opacity < 0) {
      context.commit("setHeaderOpacity", 0);
    } else {
      context.commit("setHeaderOpacity", opacity);
    }
  },
  setHeaderOpacity(context, payload) {
    context.commit("setHeaderOpacity", payload);
  },
  setDefaultColors(context) {
    context.commit("setHeaderBackgroundColor", "#000000");
    context.commit("setHeaderLinkColor", "#ffffff");
    context.commit("setHeaderOpacity", 0.4);
  }
};
