<template>
  <div class="container_box" style="padding-top: 100px">
    <MasterComponent v-for="(master,index) in data_base"  :key="index" :master="master"/>

  </div>
</template>

<script>
import {MASTERS} from "../../assets/js/masters";
import MasterComponent from "../../components/master/MasterComponent.vue";



export default {
  name: "MastersPage",
  components: {MasterComponent},
  created() {
    this.getData(this.$route.params)
  },
  data(){
    return {
      data_base: '',
    }
  },
  methods:{
    getData(){
      this.data_base = MASTERS;
    },
  }
}
</script>

<style scoped lang="scss" src="/src/assets/scss/masterPage.scss"></style>