import Vue from 'vue'
import { IonicVueRouter } from '@ionic/vue'
Vue.use(IonicVueRouter)

import Home from '@/views/Home'

const router = new IonicVueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})

export default router
