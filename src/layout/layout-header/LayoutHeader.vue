<template>
  <div class="container">
    <div class="container_header">
      <router-link to="/" class="container_header_link">Cut and Style</router-link>
    </div>
    <div class="container_header_links">
      <router-link to="/services" class="link">Услуги</router-link>
      <router-link to="/brands" class="link">Бренды</router-link>
      <router-link to="/aboutUs" class="link">О нас</router-link>
      <router-link to="/salon" class="link">Салоны</router-link>
    </div>

  </div>
</template>

<script>
export default {
  name: "LayoutHeader"
}
</script>

<style scoped lang="scss" src="/src/assets/scss/layoutHeader.scss"></style>