<template>
  <li class="menu-editor__item">
    <div class="fields">
      <div class="field">
        <label>name<input type="text" v-model="name" @input="writeValue"/></label>
      </div>
      <div class="field">
        <label>slug<input type="text" v-model="slug" @input="writeValue"/></label>
      </div>
    </div>
    <ul class="children-list" v-if="item.children && item.children.length > 0">
      <menu-editor-item
          v-for="(child, subIndex) in item.children"
          :key="child.id"
          :item="child"
          :index="subIndex"
          :parentItem="item"
          @deleteSubItem="deleteSubItem"
      />
    </ul>
    <div class="menu-editor__options">
      <button v-if="parentItem" @click.prevent="deleteSubItem">
        Удалить подпункт
      </button>
      <button v-if="!parentItem" @click.prevent="deleteItem">
        Удалить пункт
      </button>
      <button type="button" @click.prevent="addSubItem">
        Добавить подпункт
      </button>
    </div>
  </li>

</template>

<script>
export default {
  /* eslint-disable */
  name: "MenuEditorItem",
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
    return {
      name: '',
      slug: '',
    }
  },
  mounted() {
    this.name = this.item.name ? this.item.name : ''
    this.slug = this.item.name ? this.item.slug : ''
  },
  computed: {},
  methods: {
    deleteSubItem() {
      // eslint-disable-next-line vue/no-mutating-props
      this.parentItem.children.splice(this.index, 1)
    },
    deleteItem() {
      this.$emit('deleteItem', this.index)
    },
    addSubItem: function () {
      const id = Math.floor(Math.random() * 100),
          newItem = {
            id,
            children: []
          }
      this.item.children.push(newItem)

    },
    writeValue() {
      this.item.name = this.name
      this.item.slug = this.slug
    },
  },
  /* eslint-enable */
}
</script>

<style lang="scss">

</style>