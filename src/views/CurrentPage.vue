<template>
  <section class="current-page__breadcrumbs">
    <bread-crumbs>
      <bread-crumb :to="{name: 'home'}">home</bread-crumb>
      <bread-crumb v-for="parent in parents" :key="parent.parentId" :to="{
              name: 'CurrentPage',
              params: {
                id: parent.parentId
              }
            }"> {{ parent.name }}
      </bread-crumb>
    </bread-crumbs>
  </section>

  <section class="current-page__page-content">
    <h1 class="page-content__title">{{ currentElement.name }}</h1>
    <article class="page-content__text-content">
      <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam commodi cumque eos eum nam odio totam.
        Asperiores autem cupiditate esse facilis minima necessitatibus, soluta tempora. Asperiores atque magnam repellat
        saepe!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur enim iste iure pariatur quibusdam tempore
        voluptate? Ex facere nihil nisi placeat temporibus. Architecto at cum dolorem, enim eveniet ex, impedit libero,
        magni nemo neque quod repudiandae suscipit? Accusantium aliquid atque blanditiis consectetur deleniti, dolore
        dolorum ex excepturi harum incidunt inventore ipsum nisi non nostrum odit possimus quia quibusdam quo rem,
        repellat. A accusamus aliquam amet delectus eaque enim eum expedita fugit hic ipsa laborum maiores nam, nemo
        optio
        perferendis porro reiciendis repudiandae, velit. In neque quam quo tenetur. Autem, delectus distinctio doloribus
        ea eaque eveniet fugiat illo illum in iure laborum libero nemo nisi obcaecati odit omnis pariatur quam quas
        quisquam quo recusandae reiciendis reprehenderit saepe tempora ullam! Ab cum mollitia necessitatibus numquam
        rerum
        sint, sit. Aliquam consequuntur eos iure modi nesciunt perspiciatis saepe sequi voluptate! Ea, facilis, minima!
        Dolore doloribus explicabo harum laudantium libero rem, reprehenderit voluptas voluptate? Deleniti dicta eaque
        eos
        excepturi id ipsa itaque neque obcaecati recusandae, voluptatum! Architecto consectetur corporis cum debitis
        eligendi eveniet expedita facilis inventore iure labore, molestiae molestias perspiciatis quae quis repellendus
        temporibus voluptate? Animi at commodi ducimus eligendi nihil quae quaerat similique vero! Cumque est ex nisi
        obcaecati!
      </p>
    </article>
  </section>

  <section class="current-page__nav-menu">
    <div class="nav-menu__wrapper" v-if="currentElement.children.length > 0">
      <nav class="nav-menu__nav-panel menu">
        <ul class="menu-list">
          <menu-item
              v-for="(item, index) in currentElement.children"
              :key="item.id"
              :item="item"
              :index="index"
          />
        </ul>
      </nav>
    </div>
  </section>

</template>

<script> /* eslint-disable */
import BreadCrumbs from "@/components/breadcrumbs/BreadCrumbs.vue";
import BreadCrumb from "@/components/breadcrumbs/BreadCrumb.vue";
import {mapGetters} from "vuex";
import MenuItem from "@/components/MenuItem.vue";
import store from "@/store";

export default {
  name: "CurrentPage",
  components: {
    MenuItem,
    BreadCrumbs,
    BreadCrumb
  },
  props: {},
  data() {
    return {
      parents: [],
    }
  },
  created() {
    store.commit('menuList/setMenuList')
    store.dispatch('currentPageData/rewriteCurrentData', this.currentElement)
  },
  computed: {
    ...mapGetters({
      menuList: 'menuList/getMenuList',
      currentData: 'currentPageData/getCurrentData',
    }),

    currentElement() {
      return this.getCurrentElement(Number(this.$route.params.id))
    },
  },
  methods: {
    findElement(data, id) {
      for (let item of data) {
        if (item.id === id) {
          this.getParents(item)
          return item;
        }
        if (Array.isArray(item.children)) {
          const found = this.findElement(item.children, id);
          if (found) {
            this.getParents(item)
            return found;
          }
        }
      }
    },

    getCurrentElement(id) {
      const currentElement = this.findElement(this.menuList, id)
      store.dispatch('currentPageData/rewriteCurrentData', currentElement);
      return currentElement
    },

    getParents(elem) {
      if (!this.parents.find(item => item.parentId === elem.id)) {
        this.parents.push({
          parentId: elem.id,
          name: elem.name,
          slug: elem.slug
        })
      } else return
    }
  },
}
</script>