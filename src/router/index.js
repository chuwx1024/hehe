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
        meta: {
          title: '工作台'
        },
        component: Home
      },
      {
        path: '/info',
        name: 'Info',
        meta: {
          title: '账户信息'
        },
        component: () => import('@/views/info')
      },
      {
        path: '/data',
        name: 'Data',
        meta: {
          title: '数据管理'
        },
        component: () => import('@/views/data')
      },
      {
        path: '/item',
        name: 'Item',
        meta: {
          title: '项目管理'
        },
        component: () => import('@/views/item')
      },
      {
        path: '/point',
        name: 'Point',
        meta: {
          title: '站点管理'
        },
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
