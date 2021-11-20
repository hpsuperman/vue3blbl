<template>
  <bottom class="icon_box">
    <div class="icon_div" :key="key">
      <router-link to="/home/">
        <van-icon id="home" name="home-o" />
      </router-link>
      <router-link to="/dongtai/">
        <van-icon id="dongtai" name="service-o" />
      </router-link>
      <router-link to="/vip/">
        <van-icon name="refund-o" />
      </router-link>
      <router-link to="/my/">
        <van-icon name="friends-o" />
      </router-link>
    </div>
    <ul class="icon_ul">
      <li>首页</li>
      <li>动态</li>
      <li>会员购</li>
      <li>我的</li>
    </ul>
  </bottom>
</template>

<script>
export default {
  computed: {},
  methods: {},
};
</script>

<style lang='scss' scoped>
@import "@/style/mixin";
.icon_box {
  border-top: 0.1rem solid #a1a1a1;
  display: flex;
  flex-direction: column;
}
.icon_div {
  display: flex;
  justify-content: space-between;
}
.icon_ul {
  display: flex;
  justify-content: space-between;
  font-size: 0.3rem;
  padding-left: 0.2rem;
}
.van-icon {
  color: #000;
}
</style>