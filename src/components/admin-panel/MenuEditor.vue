<template>
  <h1 class="menu-editor-page__title">Menu editor</h1>
  <section class="menu-editor__block">
    <form class="menu-editor">
      <div class="menu-editor__options">
        <button type="button" @click.prevent="addNew">Добавить новый пункт</button>
        <button type="button" @click.prevent="saveMenulist">Сохранить</button>
        <button type="button" @click.prevent> <router-link :to="{name: 'home'}">home</router-link> </button>
      </div>

      <ul class="menu-editor__wrapper">
        <menu-editor-item
            v-for="(item, index) in items"
            :key="item.id"
            :item="item"
            :index="index"
            @deleteItem="deleteItem"
        />
      </ul>
    </form>
  </section>
</template>

<script>
import {mapGetters} from "vuex";
import store from "@/store";
import MenuEditorItem from "@/components/admin-panel/MenuEditorItem.vue";

export default {
  name: "MenuEditor",
  components: {
    MenuEditorItem
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
    console.log(this.items)
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

</style>