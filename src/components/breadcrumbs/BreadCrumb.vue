<template>
  <div class="crumb">
    <router-link v-bind="$attrs">
      <slot/>
    </router-link>
    <span>/</span>
  </div>
</template>

<script>
export default {
  name: "BreadCrumbs",
  props: {},
  data() {
    return {}
  },
  methods: {},
}
</script>

<style scoped lang="scss">
.crumb {
  text-decoration: none;
  a {
    text-transform: capitalize;
    color: #42b983;
  }
  span {
    padding: 0 0 0 20px;
  }

  &:last-child {
    a {
      cursor: auto;
      color: #2c3e50;
    }

    span {
      display: none;
    }
  }
}
</style>