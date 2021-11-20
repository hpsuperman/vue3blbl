<template>
    <van-swipe  class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,index) in imglist" :key="index">
        <img class="swipe_img" :src="item.img"  >
      </van-swipe-item>
    </van-swipe>
</template>
<script>
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe);
Vue.use(SwipeItem);
export default {
  data () {
    return {
      imglist: [],
    }
  },
  
  created () {//{ id: 9,img:require('../img/nine.jpg'),title:''}, 
    this.imglist = [
      { id: 1,img:require('../imgs/select03_swipe/1.jpg'),title:''}, 
      { id: 2,img:require('../imgs/select03_swipe/2.jpg'),title:''}, 
      { id: 3,img:require('../imgs/select03_swipe/3.jpg'),title:''}, 
      { id: 4,img:require('../imgs/select03_swipe/4.jpg'),title:''}, 
      { id: 5,img:require('../imgs/select03_swipe/5.jpg'),title:''}, 
    ]
  },
}
</script>

<style lang='scss' scoped>
@import '@/style/mixin';
.my-swipe{
    padding-top:1rem;
    padding-bottom:1rem; 
};
.swipe_img{
  display: flex;
  @include wh(100%,8rem);
  align-items:center;
  border-radius: .2rem;
}
</style>

