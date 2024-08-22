import { createStore } from 'vuex'
import menuList from "@/store/modules/menuList";
export default createStore({
  modules: {
    menuList,
  }
})