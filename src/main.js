import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"
Vue.prototype.axios=axios

 import header from './components/MyHeader.vue'
 Vue.component('my-header',header)
 import footer from './components/Footer.vue'
 Vue.component('my-footer',footer)
//  import carousel from './components/Carousel.vue'
//  Vue.component('carousel',carousel)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
