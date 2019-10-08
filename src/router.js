import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index'
import Product from './views/Product'
import ProductDetail from './views/ProductDetail.vue'
import Reg from './views/Reg.vue'
import Login from './views/Login.vue'

import Carousel from './components/Carousel.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/carousel',
      component:Carousel
    },
    {
      path: '/',
      component:Index
    },
    
    {
      path: '/product',
      component:Product
    },
    {
      path: '/productdetail',
      component:ProductDetail
    },
    {
      path: '/Login',
      component:Login
    },
    {
      path: '/Reg',
      component:Reg
    },

  ]
})
