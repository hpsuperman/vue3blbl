<template>
  <div >
    <bottom class="Bottom_div"></bottom>
    <div class="userdiv">
      <van-image
        round
        width="5rem"
        height="5rem"
        src="https://img2.baidu.com/it/u=2708353418,1735237876&fm=26&fmt=auto"
      />
      <div class="div_box">
        <span>我的名字</span>
        <div class="div_box2">
          <div></div>
          <span class="vip_span">大会员</span>
        </div>
        <div class="div_box3">
          <span class="span_rbb">B币:0</span>
          <span class="span_yb">硬币:0</span>
        </div>
      </div>
      <div class="rigth_div">
        <span class="span_rigth">空间</span>
        <router-link to="/kongjian">
          <van-icon class="icon_rigth" name="arrow" />
        </router-link>
      </div>
    </div>
    <div class="div_height"></div>
    <section class="sec_box1">
      <div class="div_box4">
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </div>
      <ul class="div_ul">
        <li>动态</li>
        <li>关注</li>
        <li>粉丝</li>
      </ul>
    </section>
    <div></div>
    <div class="div_height"></div>
    <section class="sec_box2">
      <div class="icon_div">
        <van-icon name="video-o" />
        <van-icon name="underway-o" />
        <van-icon name="star-o" />
      </div>
      <ul class="icon_ul">
        <li>离线缓存</li>
        <li>历史记录</li>
        <li>我的收藏</li>
      </ul>
    </section>
  </div>
</template>

<script>
import Vue from "vue";
import { Image as VanImage } from "vant";
import { Icon } from "vant";
import bottom from "../../components/bottom.vue";

Vue.use(Icon);
Vue.use(VanImage);
export default {
  data() {},
  components: {
    bottom,
  },
};
</script>

<style lang='scss' scoped>
@import "@/style/mixin.scss";
.userdiv {
  background-color: chocolate;
  display: flex;
  justify-content: space-evenly;
}
.div_box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.vip_span {
  border-radius: 0.5rem;
  font-size: 0.5rem;
  color: rgba(255, 255, 255, 0.637);
  background-color: rgb(246, 104, 154);
}
.span_rbb {
  font-size: 0.5rem;
}
.span_yb {
  font-size: 0.5rem;
}
.rigth_div {
  font-size: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
}
.div_box3 {
  display: flex;
  justify-content: space-between;
}
.Bottom_div {
  width: 100%;
  background-color: $blue;
  position: fixed;
  z-index: 100;
  bottom: 0rem;
  border-bottom: 0.5rem solid rgb(255, 255, 255);
}
.div_height {
  padding-top: 1rem;
  background-color: rgba(255, 255, 255, 0.637);
}
.div_box4 {
  display: flex;
  justify-content: space-around;
}
.div_ul {
  display: flex;
  justify-content: space-around;
}
.icon_div {
  display: flex;
  justify-content: space-around;
}
.icon_ul {
  display: flex;
  justify-content: space-around;
}
li {
  font-size: 0.5rem;
  color: rgb(142, 142, 142);
}
.sec_box2 {
  padding: 0.5rem;
  background-color: rgb(226, 226, 226);
}
.sec_box1 {
  padding: 0.5rem;
  background-color: rgb(226, 226, 226);
}
</style>