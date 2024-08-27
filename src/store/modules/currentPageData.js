export default {
    namespaced:true,
    state: () => ({
        currentData: {},
    }),
    getters: {
        getCurrentData(state) {
            state.currentData = JSON.parse(localStorage.getItem('currentPage'));
            return state.currentData;
        },
    },
    mutations: {
        setCurrentData(state, data) {
            state.currentData = data;
        },
    },
    actions: {
        rewriteCurrentData(context, freshData) {
            localStorage.setItem('currentPage', JSON.stringify(freshData))
            context.commit('setCurrentData', freshData)
        },
    }
}