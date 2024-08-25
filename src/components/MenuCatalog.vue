<template>
  <nav class="menu-block">
    <ul class="menu-block__list">
      <li class="list-item" v-for="menuItem in menuList" :key="menuItem.id">
        {{menuItem.name}}
      </li>
    </ul>
  </nav>

  <button class="option-btn" @click.prevent="createMenuItem">
    <template v-if="menuList.length === 0">Создать меню</template>
    <template v-else>Пополнить меню</template>
  </button>
</template>

<script>
import {mapGetters} from "vuex";
import store from "@/store";
export default {
  name: "MenuCatalog",
  props: {},
  data() {
    return {
    }
  },
  created() {
    store.commit('menuList/setMenuList')
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
  &__list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
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
}
</style>