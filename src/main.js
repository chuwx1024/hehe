import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css/normalize.css'
import '@/assets/iconfont/iconfont.js'
import '@/assets/styles/index.css'

import 'ant-design-vue/dist/antd.css'
import '@/utils/ant-design'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
