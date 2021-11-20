<template>
  <div>
    <div id="headtop">
      <router-link  to="/">
       <van-icon color="#fff" name="arrow-left" />
       </router-link>
      <span class="span">登录界面</span>
    </div>
     <van-form @submit="onSubmit">
  <van-field
    v-model="username"
    name="用户名"
    label="用户名"
    placeholder="用户名"
   
  />
  <van-field
    v-model="password"
    type="password"
    name="密码"
    label="密码"
    placeholder="密码"
  />
  <div style="margin: 16px;">
    <van-button round block type="info" native-type="submit">登录</van-button>
  </div>
</van-form>
  </div>
</template>

<script>
import Vue from 'vue';
import { Form } from 'vant';
import { Field } from 'vant';


Vue.use(Form);
Vue.use(Field);
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values);
    },
  },
};
</script>

<style lang='scss' scopod>
@import '@/style/mixin.scss';
#headtop{
  background-color: rgba(0, 122, 204, 0.89);
  width: 100%;
}
.span{
  position:fixed;
  color: #fff;
  @include cl;
};

</style>