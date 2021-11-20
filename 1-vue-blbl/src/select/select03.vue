<template>
  <div>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <Swipe/>
      <Banner/>
    </van-pull-refresh>
  </div>
</template>

<script>
import Banner from '../images/Banner.vue'
import Swipe from '../images/Swipe.vue'
import Vue from 'vue';
import { PullRefresh } from 'vant';
import { Toast } from 'vant';

Vue.use(PullRefresh);
export default {
  data(){
    return {
       isLoading: false,
    }
  },
  components: {
    Swipe,
    Banner
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

<style>

</style>