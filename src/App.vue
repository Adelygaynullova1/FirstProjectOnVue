<template>
  <div class="main_section">
    <LayoutHeader/>
    <router-view/>
    <layout-footer/>
  </div>
</template>

<script>


import LayoutHeader from "./layout/layout-header/LayoutHeader.vue";
import LayoutFooter from "./layout/layout-footer/layoutFooter.vue";

export default {
  name: 'App',
  components: {
    LayoutFooter,
    LayoutHeader,


  }
}
</script>

<style lang="scss" src="/src/assets/scss/main.scss"></style>