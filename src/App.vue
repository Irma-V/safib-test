<template>
  <component :is="layout">
      <router-view />
  </component>
</template>

<script>
import mainLayout from "@/layouts/MainLayout.vue";
import emptyLayout from "@/layouts/EmptyLayout.vue";
export default {
  name: "BreadCrumbs",
  components: {
    'main-layout':mainLayout,
    'empty-layout':emptyLayout,
  },
  data() {
    return {
    }
  },

  mounted() {
  },

  computed: {
    layout() {
      return (this.$route.meta.layout || 'empty') + '-layout'
    },
  },

  methods: {
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>