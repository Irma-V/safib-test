export default {
    namespaced: true,
    state: () => ({
        menuList: [
            {
                id: 1254,
                name: 'first page',
                slug: 'first-page',
            },
            {
                id: 1255,
                name: 'second page',
                slug: 'second-page',
            }
        ],
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
        setMenuList(state, menuList) {
            state.menuList = menuList;
        },
    },

    actions: {

    }
};