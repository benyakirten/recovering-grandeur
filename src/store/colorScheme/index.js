import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";
import state from "./state";

const colorSchemeModule = {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
};

export default colorSchemeModule;
