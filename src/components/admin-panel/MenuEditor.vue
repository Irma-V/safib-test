<template>
  <form class="menu-editor">
    <ul class="menu-editor__wrapper">
      <menu-item
          :item="item"
          :index="index"
          v-for="(item, index) in items"
          :key="item.id"
          @deleteItem="deleteItem"
      >
      </menu-item>
    </ul>
    <div class="menu-editor__options">
      <button type="button" @click.prevent="addNew">add new</button>
      <button type="button" @click.prevent="saveMenulist">Сохранить</button>
    </div>
  </form>
</template>

<script>
import {mapGetters} from "vuex";
import store from "@/store";
import MenuItem from "@/components/admin-panel/MenuItem.vue";

export default {
  name: "MenuEditor",
  components: {
    MenuItem
  },
  props: {},
  data() {
    return {
      items: []
    }
  },
  created() {
    store.commit('menuList/setMenuList')
    this.items = this.menuList
  },
  computed: {
    ...mapGetters({
      menuList: 'menuList/getMenuList',
    }),
  },
  methods: {


    addNew() {
      const id = Math.floor(Math.random() * 9999),
          newItem = {
            id,
            children: []
          }
      this.items.push(newItem)
    },
    deleteItem(index) {
      this.items.splice(index, 1)
    },
    saveMenulist() {
      store.dispatch('menuList/saveAll', this.items)
    },
  },
}
</script>

<style lang="scss">
.menu-editor {
  opacity: 1;
  max-height: 100vh;

  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;

    li {
      padding: 16px 0;

      ul.children-list {
        display: flex;
        flex-direction: column;
        gap: 10px;

        li {
          padding: 0;
        }
      }
    }
  }

  &__item, &__options {
    display: flex;
    gap: 6px;
  }

  &__item {
    flex-direction: column;
  }

  &__options {
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>