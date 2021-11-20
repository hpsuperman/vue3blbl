<template>
  <div class="div_Plus">
    <div-item class="van-div-item1" v-for="(item, i) in BannerList" :key="i">
      <van-image  :src="item.img" />
      <div class="div_box1">
      <div class="div_text">{{ item.title }}</div>
      <div class="div_box2">
        <span>更新至</span>
        <div class="div_hua">{{ item.hua }}</div>
     </div>
     </div>
    </div-item>
  </div>
</template>

<script>
import Vue from "vue";
import { Image as VanImage } from "vant";

Vue.use(VanImage);
export default {
  data() {
    return {
      BannerList: [],
    };
  },
  created() {
    this.BannerList = [
      {
        id: 1,
        img: require("../imgs/select03_zp/1.jpg"),
        title: "世界顶尖的暗杀者,转生为异世界贵族",
        hua: "7话",
      },
      {
        id: 2,
        img: require("../imgs/select03_zp/2.jpg"),
        title: "平家物语",
        hua: "3话",
      },
      {
        id: 3,
        img: require("../imgs/select03_zp/3.jpg"),
        title: "我被逐出队伍后过上慢生活",
        hua: "8话",
      },
      {
        id: 4,
        img: require("../imgs/select03_zp/4.jpg"),
        title: "鬼灭之刃 无限列车篇",
        hua: "10话",
      },
      {
        id: 5,
        img: require("../imgs/select03_zp/5.jpg"),
        title: "键等学园/键等",
        hua: "2话",
      },
      {
        id: 6,
        img: require("../imgs/select03_zp/6.jpg"),
        title: "宿命回响：命运节拍",
        hua: "5话",
      },
      {
        id: 7,
        img: require("../imgs/select03_zp/7.jpg"),
        title: "进化之实 踏上胜利的人生",
        hua: "11话",
      },
      {
        id: 8,
        img: require("../imgs/select03_zp/8.jpg"),
        title: "卡片战斗先导者overDress",
        hua: "6话",
      },
      {
        id: 9,
        img: require("../imgs/select03_zp/9.jpg"),
        title: "RE-MAIN：少年与水球",
        hua: "9话",
      },
      {
        id: 10,
        img: require("../imgs/select03_zp/10.jpg"),
        title: "博人传 火影忍者新时代",
        hua: "3话",
      },{
        id: 11,
        img: require("../imgs/select03_zp/11.jpg"),
        title: "关于前辈很烦人的事",
        hua: "26话",
      },{
        id: 12,
        img: require("../imgs/select03_zp/12.jpg"),
        title: "无敌侠：舞动的英雄",
        hua: "6话",
      },{
        id: 13,
        img: require("../imgs/select03_zp/13.jpg"),
        title: "创之界限",
        hua: "3话",
      },{
        id: 14,
        img: require("../imgs/select03_zp/14.jpg"),
        title: "世界尽头的圣骑士",
        hua: "13话",
      },{
        id: 15,
        img: require("../imgs/select03_zp/15.jpg"),
        title: "舞伎家的料理人",
        hua: "33话",
      },{
        id: 16,
        img: require("../imgs/select03_zp/16.jpg"),
        title: "男孩遇见女孩",
        hua: "35话",
      },{
        id: 17,
        img: require("../imgs/select03_zp/17.jpg"),
        title: "极主夫道",
        hua: "6话",
      },{
        id: 18,
        img: require("../imgs/select03_zp/18.jpg"),
        title: "瓦尼塔斯的手记",
        hua: "7话",
      },{
        id: 19,
        img: require("../imgs/select03_zp/19.jpg"),
        title: "紫罗兰永恒花园 中配版",
        hua: "8话",
      },{
        id: 20,
        img: require("../imgs/select03_zp/20.jpg"),
        title: "伊甸星原 EDENS ZERO",
        hua: "2话",
      },{
        id: 21,
        img: require("../imgs/select03_zp/21.jpg"),
        title: "烧窑的话也要马克杯 第二季",
        hua: "3话",
      },{
        id: 22,
        img: require("../imgs/select03_zp/22.jpg"),
        title: "结城友奈是勇者 第三季 / 大满开之章",
        hua: "5话",
      },
    ];
  },
};
</script>

<style lang='scss' scoped>
@import "@/style/mixin";
.div_Plus {
  justify-content: space-between;
  margin-bottom: 3rem;
  display: flex;
  flex-wrap: wrap;
}
.van-div-item1 {
  display: flex;
  @include wh(7.5rem,4rem);
  padding-bottom: .5rem;
}
.div_text {
  font-size: 0.5rem;
  height: 3rem;
  width: 3rem;
}
span {
  font-size: 0.5rem;
  width: 1.6rem;
  background-color: rosybrown;
  border-radius: .1rem;
}
.div_box2 {
  display: flex;
  justify-content: flex-start;
}
.div_hua {
  font-size: 0.5rem;
  background-color: rgb(255, 142, 179);
  width: 1.15rem;
  border-radius: .2rem;
}
.div_box1{
  padding-left: .3rem; 
}
</style>