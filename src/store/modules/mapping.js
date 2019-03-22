const state = {
  mappingElements: []
};

const mutations = {
  SET_MAPPING_ITEMS(state, mappingElements) {
    state.mappingElements = mappingElements;
  }
};

const actions = {
  initMappingElements: ({ commit }) => {
    commit("SET_MAPPING_ITEMS", mappingElements);
  }
};

const getters = {
  mappingElements: state => {
    return state.mappingElements;
  }
};

export default {
    state, 
    mutations,
    actions,
    getters
}
