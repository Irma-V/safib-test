export default {
    namespaced: true,
    state: () => ({
        menuList: [],
    }),

    getters: {
        getMenuList(state) {
            return state.menuList;
        },
        menuListIsEmpty(state) {
            return Object.keys(state.menuList).length <= 0;
        },
    },

    mutations: {
        setMenuList(state) {
            state.menuList = JSON.parse(localStorage.getItem('menulist'));
        },
    },

    actions: {
        addNewElem(context, data) {
            console.log(data)
        },

        saveAll(context, newMenuList) {
            localStorage.setItem('menulist', JSON.stringify(newMenuList));
            console.log(JSON.parse(localStorage.getItem('menulist')))
            context.commit('setMenuList')
        },
    }
};