<template>
  <div class="header">
    <h1>Бренды</h1>
    <p class="text">
      Бренды нашей дистрибуции - лучшие представители косметической ниши, которые мы привозим со всего мира.
      В нашем салоне собраны высококачественные продукты премиум-класса для лица, тела и волос.</p>
  </div>

  <div class="main_section_1">
    <img class="photo" src="C:\Users\User1\WebstormProjects\42lab\MrFirstProjectOnVue\src\assets\img\ratedGreen.webp" alt="фото продуктов">
     <div class="data">
       <h2>RATED GREEN</h2>
       <p class="text1">
         Высокоэффективные средства для ухода за кожей головы и волосами от корейского бренда
         из натуральных компонентов, не содержат сульфатов и парабенов.</p>
     </div>
     <button class="btn" @click="forwardRated">к товарам бренда</button>
  </div>

  <div class="main_section_2">
    <div class="data2">
      <h2>RARE paris</h2>
      <p class="text2">
        Французские тканевые маски для лица и средства для очищения обеспечивают быстрый и эффективный уход за кожей лица.</p>
    </div>
    <button class="btn2" @click="forwardRare">к товарам бренда</button>
    <img class="photo2" src="C:\Users\User1\WebstormProjects\42lab\MrFirstProjectOnVue\src\assets\img\rareParis.webp" alt="фото продуктов">

  </div>

  <div class="main_section_1">
    <img class="photo" src="C:\Users\User1\WebstormProjects\42lab\MrFirstProjectOnVue\src\assets\img\img_12.png" alt="фото продуктов">
    <div class="data">
      <h2>Kevin Murphy</h2>
      <p class="text1">
        Kevin Murphy известен своими инновационными формулами,
        которые помогают улучшить состояние волос и придать им здоровый и естественный вид.</p>
    </div>
    <button class="btn" @click="forwardKevin">к товарам бренда</button>
  </div>



</template>

<script>
export default {
  name: "CatalogPage",
  methods:{
    forwardRated(){
      this.$router.push(`/merch/RATED_GREEN`)
    },
    forwardRare(){
      this.$router.push(`/merch/RARE_paris`)
    },
    forwardKevin(){
      this.$router.push(`/merch/Kevin_Murphy`)
    }
  }
}
</script>

<style scoped lang="scss" src="/src/assets/scss/catalogPage.scss"></style>