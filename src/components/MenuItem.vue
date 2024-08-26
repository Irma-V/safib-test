<template>
  <li class="menu-item">
    <router-link :to="{
      name: 'CurrentPage',
      params: {
        id: item.id,
      },
    }">
      <span>{{ item.name }}</span>
    </router-link>
    <div class="menu-item__children" v-if="item.children.length > 0">
      <ul>
        <menu-item
            v-for="(child, subIndex) in item.children"
            :key="child.id"
            :item="child"
            :index="subIndex"
            :parentItem="item"
        />
      </ul>
    </div>
  </li>
</template>

<script>

export default {
  /* eslint-disable */
  name: "MenuItem",
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

<style lang="scss">
ul {
 padding: 5%;
}
li {
  list-style-type: none;
}

  .menu-item {
    cursor: pointer;
    position: relative;
  }



//.menu-item__children .menu-item {
//  cursor: pointer;
//  position: relative;
//
//  .menu-item__children {
//    position: absolute;
//    left: 0;
//    display: none;
//  }
//
//  &:hover {
//    .menu-item__children {
//      display: block;
//    }
//  }
//}
//
//.menu-item__children .menu-item {
//  .menu-item__children {
//    background: aliceblue;
//    position: absolute;
//    left: 0;
//    display: none;
//    z-index: 1;
//
//    .menu-item {
//      &:hover {
//        .menu-item__children {
//          display: block;
//        }
//      }
//    }
//  }
//
//}

</style>