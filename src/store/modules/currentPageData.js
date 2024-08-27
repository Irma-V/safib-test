export default {
    namespaced:true,
    state: () => ({
        currentData: {},
    }),
    getters: {
        getCurrentData(state) {
            // if (!JSON.parse(localStorage.getItem('currentPage'))) {
            //     state.currentData = {};
            // } else {
            //     state.currentData = JSON.parse(localStorage.getItem('currentPage'));
            // }
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