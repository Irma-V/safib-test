<template>
  <article>
    <div class="content">
      <div class="crumbs">
        <slot/>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "BreadCrumbs.vue",
  props: {
    items: {
      type: ArrayBuffer,
      required: true
    }
  },
  data() {
    return {}
  },
  methods: {},
}
</script>

<style scoped lang="scss">
.crumbs {
  list-style: none;
  display: flex;
  flex-direction: row;
  gap: 30px;
}
</style>