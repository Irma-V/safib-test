<template>
  <div class="nav-menu__wrapper">
    <nav class="nav-menu__nav-panel menu">
      <ul class="menu-list">
        <menu-item
            v-for="(item, index) in menuList"
            :key="item.id"
            :item="item"
            :index="index"
        />
      </ul>
    </nav>

    <button class="option-btn" @click.prevent="createMenuItem">
      <template v-if="menuList.length === 0">Создать меню</template>
      <template v-else>Пополнить меню</template>
    </button>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import store from "@/store";
import MenuItem from "@/components/MenuItem.vue";
export default {
  name: "MenuCatalog",
  components: {
    MenuItem,
  },
  props: {},
  data() {
    return {
      list: [],
    }
  },
  created() {
    store.commit('menuList/setMenuList');
    // this.list = this.menuList
  },
  computed: {
    ...mapGetters({
      menuList: 'menuList/getMenuList',
    }),
  },
  methods: {
    createMenuItem() {
      this.$router.push({ name: 'menuEditor' })
    },
  },
}
</script>