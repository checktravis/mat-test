import Vue from 'vue'
import App from './app'
import router from './router'
import store from './store'

import './assets/scss/index.scss' // Customize UI <---

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
