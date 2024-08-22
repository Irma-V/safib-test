<template>
  <nav class="menu-block">
    <ul class="menu-block__list">
      <li class="list-item" v-for="menuItem in menuList" :key="menuItem.id">
        {{menuItem.name}}
      </li>
    </ul>
  </nav>

  <button @click.prevent="createMenuItem">
    <template v-if="menuList.length === 0">Создать меню</template>
    <template v-else>Пополнить меню</template>
  </button>

  <form class="menu-editor">
    <div class="menu-editor__wrapper">
      <div class="field">
        <label>name <input type="text" v-model="newMenuItem.name"/></label>
      </div>
      <div class="field">
        <label>slug <input type="text" v-model="newMenuItem.slug"/></label>
      </div>
    </div>
  </form>
</template>

<script>
import {mapGetters} from "vuex";
export default {
  name: "MenuCatalog",
  props: {},
  data() {
    return {
      newMenuItem: {
        id: '',
        name:'',
        slug:'',
      }
    }
  },
  computed: {
    ...mapGetters({
      menuList: 'menuList/getMenuList',
    }),
  },
  methods: {
    createMenuItem() {
      console.log('create')
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
    gap: 1rem;

    .list {
      &-item {
        cursor: pointer;
      }
    }
  }
}

.menu-editor {
  opacity: 0;
  max-height: 0;
  &.open {
    opacity: 1;
    max-height: 100vh;
  }
}
</style>