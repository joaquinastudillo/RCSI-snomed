const state = {
    isLoading: false,
    showModal: false
};

const mutations = {
    SET_LOADING_VALUE(state){
        state.isLoading = !state.isLoading;
    },
    SET_MODAL_VALUE(state){
        state.showModal = !state.showModal;
    }
};

const actions = {
    setLoading: ({ commit }) => {
        commit("SET_LOADING_VALUE");
    },
    setModal: ({ commit }) => {
        commit("SET_MODAL_VALUE");
    },
};

const getters = {
    isLoading: state => {
        return state.isLoading;
    },
    showModal: state => {
        return state.showModal;
    }
}

export default{
    state,
    actions,
    mutations,
    getters
};