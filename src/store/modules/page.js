const state = {
    isLoading: false,
    showModal: false,
    showDeleteTermModal: false
};

const mutations = {
    SET_LOADING_VALUE(state){
        state.isLoading = !state.isLoading;
    },
    SET_MODAL_VALUE(state){
        state.showModal = !state.showModal;
    },
    SET_DELETE_TERM_MODAL_VALUE(state){
        state.showDeleteTermModal = !state.showDeleteTermModal;
    }
};

const actions = {
    setLoading: ({ commit }) => {
        commit("SET_LOADING_VALUE");
    },
    setModal: ({ commit }) => {
        commit("SET_MODAL_VALUE");
    },
    setDeleteTermModal: ({ commit }) => {
        commit("SET_DELETE_TERM_MODAL_VALUE");
    },
};

const getters = {
    isLoading: state => {
        return state.isLoading;
    },
    showModal: state => {
        return state.showModal;
    },
    showDeleteTermModal: state => {
        return state.showDeleteTermModal;
    }
}

export default{
    state,
    actions,
    mutations,
    getters
};