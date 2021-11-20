<template>
  <div id="app">
    <transition name="router-fade" mode="out-in">
			<keep-alive>
    <router-view v-if="$route.meta.keepAlive"></router-view>
			</keep-alive>
      </transition>
       <transition name="router-fade" mode="out-in">
			<router-view v-if="!$route.meta.keepAlive"></router-view>
		</transition>
    <svg-icon></svg-icon>	
  </div>
</template>

<script>
import SvgIcon from '../src/components/svg'// svg组件

export default {
      component:{
        SvgIcon
      }
}
</script>

<style lang='scss' scoped>
	@import './style/quanju';
	.router-fade-enter-active, .router-fade-leave-active {
	transition: opacity .3s;
	}
	.router-fade-enter, .router-fade-leave-active {
	opacity: 0;
	}
</style>