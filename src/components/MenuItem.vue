<template>
  <li class="menu-item">
    <router-link :to="{
      name: 'CurrentPage',
      params: {
        pageSlug: item.slug,
        pageName: item.name
      }
    }">
      <span>{{ item.name }}</span>
    </router-link>
    <ul class="menu-item__children">
      <menu-item
          v-for="(child, subIndex) in item.children"
          :key="child.id"
          :item="child"
          :index="subIndex"
          :parentItem="item"
      />
    </ul>
  </li>
</template>

<script>
import MenuEditorItem from "@/components/admin-panel/MenuEditorItem.vue";

export default {
  /* eslint-disable */
  name: "MenuItem",
  components: {MenuEditorItem},
  props: {
    item: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    parentItem: {
      required: false
    }
  },
  data() {
    return {}
  },
  methods: {
    goToPage() {
      console.log('slug:', this.item.slug)

    },
  },
  /* eslint-enable */
}
</script>

<style scoped lang="scss">
.menu-block__list, .menu-item__children {
  .menu-item {
    cursor: pointer;
    position: relative;

    &__children {
      position: absolute;
      left: 0;
    }

    &:hover {
      .menu-item__children {

      }
    }
  }
}

.menu-item {

}

.menu-item,
.menu-item__children .menu-item {
  cursor: pointer;
  position: relative;

  .menu-item__children {
    position: absolute;
    left: 0;
    display: none;
  }

  &:hover {
    .menu-item__children {
      display: block;
    }
  }
}

.menu-item__children .menu-item {
  .menu-item__children {
    background: aliceblue;
    position: absolute;
    left: 0;
    display: none;
    z-index: 1;

    .menu-item {
      &:hover {
        .menu-item__children {
          display: block;
        }
      }
    }
  }

}

</style>