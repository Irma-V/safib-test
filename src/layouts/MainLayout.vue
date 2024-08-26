<template>
<!--  <div class="layout-content">-->
<!--    <router-view/>-->
<!--  </div>-->
  <div class="container" @click="closeMenu">
    <header></header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
    name: "MainLayout",
    props: {},
    data() {
        return {
        }
    },
    methods: {},
}
</script>

<style scoped lang="scss">

</style>