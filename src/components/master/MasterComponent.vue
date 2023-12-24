<template>
  <div class="cards">
    <img class="photo" :src="master.image" alt="фото мастера">
    <div class="data">
      <div class="name">{{master.name}}</div>
      <div class="characterisation">{{master.characterisation}}</div>
      <div class="workexperience">Стаж: {{ master.workexperience}}</div>
      <div class="valuation">Рейтинг: {{ master.valuation}}</div>
    </div>
  </div>
</template>

<script>

export default {
  name: "MasterComponent",
  props: {
    master: {
      type: Object,
      required: true
    },
  },
}
</script>

<style scoped lang="scss" src="/src/assets/scss/masterComponent.scss"></style>