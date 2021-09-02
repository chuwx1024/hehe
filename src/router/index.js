import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout/layout.vue'
import Login from '@/views/login'
import Home from '@/views/home/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: '/home',
        name: 'Home',
        component: Home
      },
      {
        path: '/info',
        name: 'Info',
        component: () => import('@/views/info')
      },
      {
        path: '/data',
        name: 'Data',
        component: () => import('@/views/data')
      },
      {
        path: '/item',
        name: 'Item',
        component: () => import('@/views/item')
      },
      {
        path: '/point',
        name: 'Point',
        component: () => import('@/views/point')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
