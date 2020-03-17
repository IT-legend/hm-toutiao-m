import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant' // 引入vant组件库
import 'vant/lib/index.css' // 引入vant的所有样式组件
import 'amfe-flexible' // 安装插件-根据屏幕变化，产生不同的font-size
import '@/styles/index.less' // 引入我们自定义的全局样式，用来覆盖vant的默认样式
Vue.use(Vant) // 注册vant所有组件，任意位置即可使用，实际上是调用install的方法

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
