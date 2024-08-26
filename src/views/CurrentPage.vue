<template>
<div class="page-title"> I'm page <span>{{ currentElement.name }}</span></div>
  <div class="breadcrumbs-block">
    <bread-crumbs>
      <bread-crumb :to="{name: 'home'}">home</bread-crumb>
      /
      <bread-crumb></bread-crumb>
    </bread-crumbs>
  </div>

  <div class="menuCatalog" v-if="currentElement.children.length > 0">
    <nav>
      <ul class="menu-block__list">
        <menu-item
            v-for="(item, index) in currentElement.children"
            :key="item.id"
            :item="item"
            :index="index"
        />
      </ul>
    </nav>
  </div>
</template>

<script>
import BreadCrumbs from "@/components/breadcrumbs/BreadCrumbs.vue";
import BreadCrumb from "@/components/breadcrumbs/BreadCrumb.vue";
import {mapGetters} from "vuex";
import MenuItem from "@/components/MenuItem.vue";
import store from "@/store";
export default {
  name: "CurrentPage",
  components: {
    MenuItem,
    BreadCrumbs,
    BreadCrumb
  },
  props: {
  },
  data() {
    return {}
  },
  created() {
  },
  computed: {
    ...mapGetters({
      menuList: 'menuList/getMenuList',
      currentData: 'currentPageData/getCurrentData',
    }),
    currentElement () {
      if (!this.currentData || Number(this.$route.params.id) !== this.currentData.id) {
        return this.findElement(this.menuList, Number(this.$route.params.id))
      } else {
        return this.currentData
      }
    },
  },
  methods: {
    findElement(data, id) {
      for (let item of data) {
        if (item.id === Number(id)) {
          localStorage.setItem('currentPage', JSON.stringify(item))
          return item;
        }
        if (Array.isArray(item.children)) {
          const found = this.findElement(item.children, id);
          if (found) {
            // localStorage.setItem('currentPage', JSON.stringify(found))
            store.dispatch('currentPageData/rewriteCurrentData',found)
            return found;
          }
        }
      }
    }
  },
}
</script>

<style scoped lang="scss">
$mainFont: "Fira Sans", sans-serif;

span {
  text-transform: capitalize;
  font: 700 16px/16px $mainFont
}
</style>