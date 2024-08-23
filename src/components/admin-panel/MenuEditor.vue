<template>
  <form class="menu-editor">
    <div class="menu-editor__wrapper">
      <div class="menu-editor__item" v-for="menuItem in menuList" :key="menuItem.id">
        <div class="field">
          <label>name <input type="text" v-model="menuItem.name"/></label>
        </div>
        <div class="field">
          <label>slug <input type="text" v-model="menuItem.slug"/></label>
        </div>
        <div class="menu-editor__options">
          <button type="button" @click.prevent="addChild(menuItem.id)">Добавить подпункт</button>
          <button type="button" @click.prevent="deleteCurrent(menuItem.id)">Удалить</button>
        </div>
      </div>

      <!--      <div class="menu-editor__item" v-if="newElemIsCreated">-->
      <!--        <div class="field">-->
      <!--          <label>name <input type="text" v-model="newMenuItem.name"/></label>-->
      <!--        </div>-->
      <!--        <div class="field">-->
      <!--          <label>slug <input type="text" v-model="newMenuItem.slug"/></label>-->
      <!--        </div>-->
      <!--        <div class="menu-editor__options">-->
      <!--          <button type="button" @click.prevent="addChild(newMenuItem.id)">Добавить подпункт</button>-->
      <!--          <button type="button" @click.prevent="deleteCurrent(newMenuItem.id)">Удалить</button>-->
      <!--        </div>-->
      <!--      </div>-->

      <div class="menu-editor__options">
        <button type="button" @click.prevent="addNew">Добавить новый пункт</button>
        <button type="button" @click.prevent="saveMenulist">Сохранить</button>
      </div>
    </div>
  </form>
</template>

<script>
import {mapGetters} from "vuex";
import store from "@/store";

export default {
  name: "MenuEditor",
  props: {},
  data() {
    return {
      newElemIsCreated: false,
      newMenuItem: {
        id: 0,
        name: '',
        slug: '',
      }
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
    addChild(id) {
      console.log(`addChild for ${id}`)
    },
    deleteCurrent(id) {
      console.log(`deleteCurrent for ${id}`)
    },
    addNew() {
      this.menuList.push({
        id: Math.floor(Math.random() * 9999),
        parentId: null,
        name: '',
        slug: ''
      })
    },
    saveMenulist() {
      console.log('saveMenulist')
      store.dispatch('menuList/saveAll', this.menuList)
    },
  },
}
</script>

<style scoped lang="scss">
.menu-editor {
  opacity: 1;
  max-height: 100vh;

  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
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