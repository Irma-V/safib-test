export default {
    namespaced: true,
    state: () => ({
        menuList: [
            // {
            //     id: 1254,
            //     parentId: null,
            //     name: 'first page',
            //     slug: 'first-page',
            //     children: [
            //         {
            //             id: 12541,
            //             parentId: 1254,
            //             name: 'first item',
            //             slug: 'first-item',
            //         },
            //         {
            //             id: 12542,
            //             parentId: 1254,
            //             name: 'second item',
            //             slug: 'second-item',
            //         },
            //     ]
            // },
            // {
            //     id: 1255,
            //     parentId: null,
            //     name: 'second page',
            //     slug: 'second-page',
            // }
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
        setMenuList(state) {
            state.menuList = JSON.parse(localStorage.getItem('menulist'));
        },
    },

    actions: {
        addNewElem(context, data) {
            console.log(data)
            console.log(this.state.menuList)
            // context.commit('setOrder',data)
        },

        saveAll(context, newMenuList) {
            localStorage.setItem( 'menulist', JSON.stringify(newMenuList));
            console.log(JSON.parse(localStorage.getItem('menulist')))
            context.commit('setMenuList')
        },
    }
};