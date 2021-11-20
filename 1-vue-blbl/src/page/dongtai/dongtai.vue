<template>
  <div>
      dongtai
    <bottom class="Bottom_div"></bottom>
  </div>
</template>

<script>
import bottom from '../../components/bottom.vue';
export default {
    data(){

    },
 components:{
     bottom
  }
}
</script>

<style lang="scss" scoped>
@import  '@/style/mixin.scss';
.Bottom_div{
  width: 100%;
  background-color: $blue;
  position: fixed;
  z-index: 100;
  bottom: 0rem;
  border-bottom: .5rem solid rgb(255, 255, 255);
 }
</style>