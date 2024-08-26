<template>
  <article>
    <div class="content">
      <ul>
        <slot/>
      </ul>
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
ul {
  display: flex;
  flex-direction: row;
}
</style>