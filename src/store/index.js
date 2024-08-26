import { createStore } from 'vuex'
import menuList from "@/store/modules/menuList";
import currentPageData from "@/store/modules/currentPageData"
export default createStore({
  modules: {
    menuList,
    currentPageData,
  }
})