import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";
import state from "./state";

const headerCanvasModule = {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
};

export default headerCanvasModule;
