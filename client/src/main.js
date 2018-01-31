import Vue from 'vue'
import App from './App'

import VueResource from 'vue-resource'
import router from './router'

// import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false
Vue.use(VueResource)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
