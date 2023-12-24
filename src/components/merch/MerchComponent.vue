<template>
  <div class="cards">
    <img class="photo" :src="merch.image" alt="маска">
    <div class="name">{{merch.name}}</div>
    <div class="price">{{merch.price}}</div>
  </div>
</template>

<script>
export default {
  name: "MerchComponent",
  props: {
    merch: {
      type: Object,
      required: true
    },
  },
}
</script>


<style scoped lang="scss" src="/src/assets/scss/merchComponent.scss"></style>