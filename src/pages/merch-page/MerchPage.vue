<template>
  <div class="container_box" >
    <MerchComponent v-for="(merch,index) in data_base"  :key="index" :merch="merch"/>
  </div>
</template>

<script>


import {RATED_GREEN} from "../../assets/js/brands";
import {RARE_paris} from "../../assets/js/brands";
import {Kevin_Murphy} from "../../assets/js/brands";
import MerchComponent from "../../components/merch/MerchComponent.vue";

export default {
  name: "MerchPage",
  components: {MerchComponent},
  created() {
    this.getData(this.$route.params.brand)
  },
  data(){
    return {
      data_base: '',
    }
  },
  methods:{
    getData(brand){
      switch (brand){
        case "RATED_GREEN": this.data_base = RATED_GREEN; break
        case "RARE_paris": this.data_base = RARE_paris; break
        case "Kevin_Murphy": this.data_base = Kevin_Murphy; break
      }
    },
  }


};
</script>

<style scoped lang="scss" src="/src/assets/scss/merchPage.scss"></style>