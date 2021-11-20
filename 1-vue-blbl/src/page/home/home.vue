<template>
  <div id="http">
    <headTop id="head_top"></headTop>
      <div class="Bottom_div">
        <bottom></bottom>
     </div >
  </div>
</template>

<script>
import headTop from '../../components/header'
import Bottom from '../../components/bottom.vue';


export default {
  data(){
    return {
      
    }
  },
components:{
  headTop,
  Bottom,
},
}
</script>

<style lang="scss" scoped>
  @import '@/style/mixin';
 #http{
  background-color: rgb(241,241,241);
 }
 .Bottom_div{
  width: 100%;
  background-color: $blue;
  position: fixed;
  z-index: 100;
  bottom: 0rem;
  border-bottom: .5rem solid rgb(255, 255, 255);
 }
 
</style>