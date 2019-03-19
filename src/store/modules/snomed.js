const state = {
  snomedElements: [],
  searchData: {
    text: "",
    type: ""
  }
};

const mutations = {
  SET_SNOMED_ITEMS(state, snomedElements) {
    state.snomedElements = snomedElements;
  },
  SET_SEARCH_DATA(state, searchData){
    state.searchData.text = searchData.text;
    state.searchData.type = searchData.type;
  }
};

const actions = {
  initSnomedItems: ({ commit }) => {
    commit("SET_SNOMED_ITEMS", snomedElements);
  },
  initSearchData: ({ commit }) => {
    commit("SET_SEARCH_DATA", searchData);
  }
};

const getters = {
  snomedElements: state => {
    return state.snomedElements;
  },
  searchData: state => {
    return state.searchData;
  }
};

export default {
  state,
  mutations,
  getters,
  actions
};
