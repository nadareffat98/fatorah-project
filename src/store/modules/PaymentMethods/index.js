import actions from "./actions.js";
import getters from "./getters.js";
import mutations from "./mutations.js";

const paymentMethodsModule = {
  state: () => ({
    paymentMethods: null,
  }),
  mutations,
  actions,
  getters,
};

export default paymentMethodsModule;