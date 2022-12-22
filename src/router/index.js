import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import CrearU from '../components/CrearU.vue'
import EditarU from '../components/EditarU.vue'
import ListarU from '../components/ListarU.vue'
import ComponenteDinamico from '../components/ComponenteDinamico.vue'
import ComponenteDinamico2 from '../components/ComponenteDinamico2.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/editar',
    name: 'Editar',
    component: EditarU
  },

  {
    path: '/crear',
    name: 'Crear',
    component: CrearU
  },

  {
    path: '/listar',
    name: 'Listar',
    component: ListarU
  },

  {
    path: '/dinamico',
    name: 'ComponenteDinamico',
    component: ComponenteDinamico
  },

  {
    path: '/dinamico2',
    name: 'ComponenteDinamico2',
    component: ComponenteDinamico2
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
