export default {
  disableClickAnimation(context) {
    context.commit("setClickAnimation", false);
  },
  enableClickAnimation(context) {
    context.commit("setClickAnimation", true);
  },
  toggleClickAnimation(context) {
    context.commit("mutateClickAnimation");
  },
  disableHeaderCanvas(context) {
    context.commit("setHeaderCanvas", false);
  },
  enableHeaderCanvas(context) {
    context.commit("setHeaderCanvas", true);
  },
  toggleHeaderCanvas(context) {
    context.commit("mutateHeaderCanvas");
  }
};
