import Vue from 'vue'
import App from './app'
import router from './router'
import store from './store'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

// https://vuematerial.io/themes/configuration/
import 'vue-material/dist/theme/default.css' // This line here
// default-dark
// black-green-dark
// black-green-light

Vue.use(VueMaterial)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
