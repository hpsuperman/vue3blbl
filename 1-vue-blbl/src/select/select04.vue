<template>  
<van-pull-refresh v-model="isLoading" @refresh="onRefresh">
<div>
  <div class="div_box1">
    <section class="div_for" v-for="(item, i) in imglist" :key="i">
      <img :src="item.img" />
   
      <div class="div_text">{{item.text}}</div>
    </section>
  </div>  
</div>
</van-pull-refresh> 
</template>  
  
<script>  
import Vue from 'vue';
import { PullRefresh } from 'vant';
import { Toast } from 'vant';

Vue.use(PullRefresh);
export default {  
  data(){  
    return{  
      isLoading: false,
      imglist:[],
    }  
  },
  created(){
   this.imglist =[
      { id: 1,img:require('../imgs/select4/1.jpg'),text:'世界顶尖的暗杀者,转生为异世界贵族',},
      { id: 2,img:require('../imgs/select4/2.jpg'),text:'《极主夫道》反差萌！昔日老大成家庭主夫'},
      { id: 3,img:require('../imgs/select4/3.jpg'),text:'《鬼灭之刃》 —— 化身为刃，斩断绝望！'},
      { id: 4,img:require('../imgs/select4/4.jpg'),text:'《平家物语》少女亲眼见证豪门兴衰沉浮'},
    ]
  }, 
  methods: {
    onRefresh() {
      setTimeout(() => {
        Toast('刷新成功');
        this.isLoading = false;
      }, 1000);
    },
  },
}  
</script>  
<style lang="scss" scoped>
@import '@/style/mixin';

img{
  border-radius:.2rem;
  @include wh(7.2rem,5rem)
}   
.div_box1{
  padding-top: 1rem ;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
} 
.div_text{
  width: 7.2rem;
  font-size: .5rem;
}
</style>