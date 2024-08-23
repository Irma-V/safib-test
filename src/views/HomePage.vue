<template>
<h1>Home page</h1>
  <menu-catalog></menu-catalog>
</template>

<script>
import MenuCatalog from "@/components/MenuCatalog.vue";
export default {
  name: "HomePage",
    components: {
    'menu-catalog': MenuCatalog,
  },
  props: {},
  data() {
    return {}
  },
  methods: {},
}
</script>

<style scoped lang="scss">

</style>