export default {
  changeBreakpoint(context, payload) {
    const newBP = betweenMaxAndMin(context, payload);
    context.commit("setBreakpoint", newBP);
  },
  incrementBreakpoint(context) {
    const newBP = betweenMaxAndMin(context, context.state.DEFAULT_ADD);
    context.commit("setBreakpoint", newBP);
  },
  decrementBreakpoint(context) {
    const newBP = betweenMaxAndMin(context, context.state.DEFAULT_SUB);
    context.commit("setBreakpoint", newBP);
  },
  setBreakpoint(context, payload) {
    context.commit("setBreakpoint", payload);
  }
};

const betweenMaxAndMin = (currentBP, newAmount) => {
  return currentBP + newAmount > 1000
    ? 1000
    : currentBP + newAmount < 0
    ? 0
    : currentBP + newAmount;
};
