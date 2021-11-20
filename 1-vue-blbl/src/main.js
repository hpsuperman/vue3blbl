import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from '../src/router/index'
// 如果使用次数很多，那么可以在main.js中引入，这样就不需要在每个组件中单独引用了
import { Button } from 'vant'
import './config/rem'
import { Icon } from 'vant';
 
Vue.use(Icon);
Vue.use(Button)
Vue.use(VueRouter)
Vue.config.productionTip = false
const router = new VueRouter({
  routes,
})
new Vue({
  el:'#app',
  router,
  render: h=> h(App)
}).$mount('#app')
