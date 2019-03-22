import Vue from "vue";
import Vuex from "vuex";

import snomed from "./modules/snomed";
import page from "./modules/page";
import mapping from "./modules/mapping"
import * as actions from "./actions";

Vue.use(Vuex);

export default new Vuex.Store({
  actions,
  modules: {
    snomed,
    page,
    mapping
  }
});
