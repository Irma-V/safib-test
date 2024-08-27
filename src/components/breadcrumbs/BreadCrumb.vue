<template>
  <li>
    <router-link v-bind="$attrs">
      <slot />
    </router-link>
  </li>
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
li {
  text-decoration: underline;
  padding: 0 3%;
  
  &:first-child{
    padding: 0 3% 0 0;
  }
  :last-child {
    color: rgb(89, 163, 139);;
    text-decoration: none;
    padding: 0 0 0 3%;
    a{
      cursor: auto;
    }
  }
}
</style>