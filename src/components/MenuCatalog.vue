<template>
  <div class="menu-block">
    <nav>
      <ul class="menu-block__list">
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

<style scoped lang="scss">
.menu-block {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 16px;

  nav {
    padding: 16px;
  }

  &__list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-direction: row;
    gap: 16px;

    .list {
      &-item {
        cursor: pointer;
      }
    }
  }
}

.option-btn {
  padding: 8px 16px;
  background: #42b983;
  border-radius: 3px;
  max-width: fit-content;
}
</style>