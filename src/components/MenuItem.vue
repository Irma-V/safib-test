<template>
  <li class="menu-item">
    <router-link class="menu-item__title" :to="{
      name: 'CurrentPage',
      params: {
        id: item.id,
        slug: item.slug,
      },
    }">
      <div class="title-content">{{ item.name }}</div>
    </router-link>
    <div class="menu-item__menu-list children" v-if="item.children.length > 0">
      <ul class="children-list">
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