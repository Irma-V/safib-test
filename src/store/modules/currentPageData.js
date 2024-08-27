export default {
    namespaced:true,
    state: () => ({
        currentData: {},
    }),
    getters: {
        getCurrentData(state) {
            return state.currentData;
        },
    },
    mutations: {
        setCurrentData(state) {
            state.currentData = JSON.parse(localStorage.getItem('currentData'))
        },
    },
    actions: {
        rewriteCurrentData(context, freshData) {
            localStorage.setItem('currentPage', JSON.stringify(freshData))
            context.commit('setCurrentData')
        },
    }
}