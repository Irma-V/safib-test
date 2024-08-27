<template>
  <form class="menu-editor">
    <ul class="menu-editor__wrapper">
      <menu-editor-item
          v-for="(item, index) in items"
          :key="item.id"
          :item="item"
          :index="index"
          @deleteItem="deleteItem"
      />
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