<template>  
  <div slot='select01'>
    <div v-for="(item,index) in listImg" :key='index'>
  <img width="100%" :src="item.img" alt="">
    </div>
  </div>  
</template>  
  
<script> 
import Vue from 'vue';
import { Image as VanImage } from 'vant';

Vue.use(VanImage); 
export default {  
  data(){  
    return{  
      listImg:[
        // { id:1, img:require('../imgs/select_img02/1.jpg')},
        // { id:2, img:require('../imgs/select_img02/2.jpg')},
        // { id:3, img:require('../imgs/select_img02/3.jpg')},
        // { id:4, img:require('../imgs/select_img02/4.jpg')},
      ]
    }  
  }  
}  
</script>  