import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";
import state from "./state";

const clickAnimationModule = {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
};

export default clickAnimationModule;
