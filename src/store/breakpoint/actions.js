export default {
  changeBreakpoint(context, payload) {
    const newBP = betweenMaxAndMin(context.state.breakpoint, payload);
    context.commit("setBreakpoint", newBP);
    context.dispatch("setLocalStorageBreakpoint");
  },
  incrementBreakpoint(context) {
    const newBP = betweenMaxAndMin(context, context.state.maxAdd);
    context.commit("setBreakpoint", newBP);
    context.dispatch("setLocalStorageBreakpoint");
  },
  decrementBreakpoint(context) {
    const newBP = betweenMaxAndMin(context, context.state.maxSub);
    context.commit("setBreakpoint", newBP);
    context.dispatch("setLocalStorageBreakpoint");
  },
  setBreakpoint(context, payload) {
    const newBP = betweenMaxAndMin(payload, 0);
    context.commit("setBreakpoint", newBP);
    context.dispatch("setLocalStorageBreakpoint");
  },
  setMaxAdd(context, payload) {
    context.commit("setMaxAdd", payload);
    context.dispatch("setLocalStorageBreakpoint");
  },
  setMaxSub(context, payload) {
    context.commit("setMaxSub", payload);
    context.dispatch("setLocalStorageBreakpoint");
  },
  loadAll(context, { breakpoint, maxAdd, maxSub }) {
    context.commit("setBreakpoint", breakpoint || 0);
    context.commit("setMaxAdd", maxAdd || 5);
    context.commit("setMaxSub", maxSub || -5);
    context.dispatch("setLocalStorageBreakpoint");
  },
  setDefaults(context) {
    context.commit("setMaxAdd", 5);
    context.commit("setMaxSub", -5);
    context.commit("setBreakpoint", 0);
    context.dispatch("setLocalStorageBreakpoint");
  },
  setLocalStorageBreakpoint(context) {
    const { breakpoint, maxAdd, maxSub } = context.state;
    localStorage.setItem(
      "RG_B",
      JSON.stringify({
        breakpoint,
        maxAdd,
        maxSub
      })
    );
  }
};

const betweenMaxAndMin = (currentBP, newAmount) => {
  const sum = currentBP + newAmount;
  if (sum > 100) {
    return 100;
  } else if (sum < 0) {
    return 0;
  } else {
    return sum;
  }
};
