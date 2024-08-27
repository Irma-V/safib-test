<template>
<h1>Home page</h1>
  <menu-catalog></menu-catalog>
  <button class="option-btn" @click.prevent="createMenuItem">
    <template v-if="menuList.length === 0">Создать меню</template>
    <template v-else>Пополнить меню</template>
  </button>
</template>

<script>
import MenuCatalog from "@/components/MenuCatalog.vue";
import {mapGetters} from "vuex";
export default {
  name: "HomePage",
    components: {
    'menu-catalog': MenuCatalog,
  },
  props: {},
  data() {
    return {}
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

</style>