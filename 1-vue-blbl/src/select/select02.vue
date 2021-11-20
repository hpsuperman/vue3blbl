<template>
  <div class="div_Max">
   <div class="div_height"></div>
    <nav>
      <div class="div_box1">
        <van-image class="image_1"
          radius=15px
          src="https://img01.yzcdn.cn/vant/cat.jpeg"
        />
        <span>这是一张图片这是一张图片这是一张图片这是一张图片</span>
          <div class="div_name">
            <div class="div_Up">Up</div>
            <div class="div_user">匿名</div>
          </div>
        </div>
    </nav>
    <nav>
      <div class="div_box1">
        <van-image class="image_1"
          radius=15px
          src="https://img01.yzcdn.cn/vant/cat.jpeg"
        />
        <span>这是一张图片这是一张图片这是一张图片这是一张图片</span>
          <div class="div_name">
            <div class="div_Up">Up</div>
            <div class="div_user">匿名</div>
          </div>
        </div>
    </nav>
    <nav>
      <div class="div_box1">
        <van-image class="image_1"
          radius=15px
          src="https://img01.yzcdn.cn/vant/cat.jpeg"
        />
        <span>这是一张图片这是一张图片这是一张图片这是一张图片</span>
          <div class="div_name">
            <div class="div_Up">Up</div>
            <div class="div_user">匿名</div>
          </div>
        </div>
    </nav>
    <nav>
      <div class="div_box1">
        <van-image class="image_1"
          radius=15px
          src="https://img01.yzcdn.cn/vant/cat.jpeg"
        />
        <span>这是一张图片这是一张图片这是一张图片这是一张图片</span>
          <div class="div_name">
            <div class="div_Up">Up</div>
            <div class="div_user">匿名</div>
          </div>
        </div>
    </nav>
    
<keep-alive>
    <Banner/>
</keep-alive>

  </div>
</template>  
  
<script>
import Vue from "vue";
import { Rate } from "vant";
import { Image as VanImage } from "vant";
import Banner from '../images/Banner'

Vue.use(VanImage);
Vue.use(Rate);
export default {
  data() {
    return {
      value: 3,
      imglist:[]
    };
  },
  components:{
    Banner
  }
  
};
</script>  

<style lang="scss" scoped>
@import '@/style/mixin';


.div_Max{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
};
nav{
  
  height: 100%;
  background-color: rgb(241, 241, 241);
}
.div_box1{
  padding-top: 1rem;
  border-radius: .5rem;//圆角
  @include wh(7.2rem,7.1rem);
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: .1rem;
  
}
.div_Up{
  display: flex;
  border-radius: .1rem;//圆角
  width: .8rem;
  font-size: .5rem;
  background-color: rgb(250, 110, 157);
}
span{
  font-size: .5rem;
};
.div_name{
  display: flex;
  align-items: center
}
.div_user{
    font-size: .5rem;
    color: rgb(161, 161, 161);
    padding-left: .5rem;
  }
  .div_height {
  padding-top: .5rem;
  background-color: rgb(241, 241, 241);
}
</style>
  