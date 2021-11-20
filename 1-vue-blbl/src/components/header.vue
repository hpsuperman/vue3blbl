<template>
    <header id="head_top">
      <div id="head_top_div" >
        <span class="blbl" @click="reload">blbl</span>
        <router-link to="/user/">
            <van-icon id="user" name="manager-o" color="#000"/>
        </router-link>
        <van-search id="sousuo" shape="round" v-model="value"  />
        <router-link to="/xiaoxi/">
        <van-icon id="xiaoxi" name="smile-comment-o" color="#000"/>
        </router-link>
      </div>
      <div> 
      <ul class="ulul" type="primary">
        <li 
          v-for="(item,index) in menu"
          :key="index"
          :class="{active : ( isActive == item.value ? true : false )}"
          @click="isActive = item.value;currentComp = item.comp">
          {{item.name}}
        </li>
      </ul>
    </div>
    <div>
      <test1 :is="currentComp"></test1>
    </div>
    </header>
</template>

<script>
import select01 from '../select/select01';
import select02 from '../select/select02';
import select03 from '../select/select03';
import select04 from '../select/select04';
import select05 from '../select/select05';

import Vue from 'vue';
import { Search } from 'vant';
import { Tab, Tabs } from 'vant';

Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Search);
export default {
  data(){
    return {
      currentComp: 'select01',
      isActive: '1',
      menu: [
        {
          name: '直播',
          value: '1',
          comp: 'select01'
        },
        {
          name: '推荐',
          value: '2',
          comp: 'select02'
        },
        {
          name: '热门',
          value: '3',
          comp: 'select03'
        },
         {
          name: '追番',
          value: '4',
          comp: 'select04'
        },
        {
          name: '影视',
          value: '5',
          comp: 'select05'
        },
      ]
    }
     
    },
  methods:{
    reload(){
      window.location.reload();
    }
  },
  components: {
    select01,
    select02,
    select03,
    select04,
    select05,
  },

  props:['signinup']
    
}

</script>

<style lang="scss" scoped>
@import '@/style/mixin';
#http{
  background-color: rgb(241, 241, 241);
}
.blbl{
  font-size: 1rem;
  color: rgba(170, 139, 135, 0.699);
}
  #head_top{
  background-color: #fff;
  }
  #head_top_div{
    display: flex;
    justify-content: space-around;
    align-items:center;
  }
  
  #sousuo{
    border-radius: .5rem;//圆角
  }
  
.ulul {
  overflow: hidden;
  display: flex;
    justify-content:space-between;
  li {
    font-size: .5rem;
  }
  li.active {
    background-color: RGB(250, 110, 157);
  }
}

</style>
