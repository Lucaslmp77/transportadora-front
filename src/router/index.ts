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
  // {
  //   path: '/frete',
  //   name: 'Frete-List',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/frete/FreteListView.vue')
  // },
  // {
  //   path: '/cadastrar-frete',
  //   name: 'Cadastrar-Frete',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/frete/CadastrarFreteView.vue')
  // },
  // {
  //   path: '/status-frete-transporte/:id',
  //   name: 'Status-Frete',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/frete/StatusFreteTransporteView.vue')
  // },
  // {
  //   path: '/status-interrompido/:id',
  //   name: 'Status-Interrompido',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/frete/StatusInterrompidoView.vue')
  // },
  // {
  //   path: '/status-cancelado/:id',
  //   name: 'Status-Cancelado',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/frete/StatusCanceladoView.vue')
  // },
  // {
  //   path: '/status-faturado/:id',
  //   name: 'Status-Faturado',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/frete/StatusFaturadoView.vue')
  // },
  // {
  //   path: '/status-carga/:id',
  //   name: 'Status-Carga',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/frete/StatusCargaView.vue')
  // },
  // {
  //   path: '/status-descarga/:id',
  //   name: 'Status-Descarga',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/frete/StatusDescargaView.vue')
  // },
  // {
  //   path: '/detalhar-frete/:id',
  //   name: 'Detalhar-Frete',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/frete/DetalharFreteView.vue')
  // },


  ////////////////////////////////////////
  {
    path: '/produtos',
    name: 'Listar-Produtos',
    component: () => import(/* webpackChunkName: "about" */ '../views/ListarProdutosView.vue')
  },
  {
    path: '/cadastrar-produto',
    name: 'Cadastrar-Produto',
    component: () => import(/* webpackChunkName: "about" */ '../views/CadastrarProdutoView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
