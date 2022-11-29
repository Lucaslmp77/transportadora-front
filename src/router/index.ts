import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/frete',
    name: 'Frete-List',
    component: () => import(/* webpackChunkName: "about" */ '../views/frete/FreteListView.vue')
  },
  {
    path: '/cadastrar-frete',
    name: 'Cadastrar-Frete',
    component: () => import(/* webpackChunkName: "about" */ '../views/frete/CadastrarFreteView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
