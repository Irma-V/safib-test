<template>
  <article>
    <div class="content">
      <!-- <div>BreadCrumbs</div> -->
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

</style>