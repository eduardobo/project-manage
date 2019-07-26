import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.config.productionTip = false

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
//if you want to use font awesone you need to install with npm
//font-awesome, node-sass and sass-loader

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
