import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import CrearU from '../components/CrearU.vue'
import EditarU from '../components/EditarU.vue'
import ListarU from '../components/ListarU.vue'

import PostC from '../components/PostC.vue'
import ListarP from '../components/ListarP.vue'
import EditarP from '../components/EditarP.vue'

import NuevoHilo from '../components/NuevoHilo.vue'
import ListarH from '../components/ListarH.vue'
import EditarH from '../components/EditarH.vue'

import ReplyTo from '../components/ReplyTo.vue'
import ListarR from '../components/ListarR.vue'
import EditarR from '../components/EditarR.vue'

import LoginN from '../components/LoginN.vue'

import ComponenteDinamico from '../components/ComponenteDinamico.vue'
import ComponenteDinamico2 from '../components/ComponenteDinamico2.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/editarusuario/:id',
    name: 'Editar',
    component: EditarU
  },
  
  {
    path: '/editapos/:id',
    name: 'EditarP',
    component: EditarP
  },

  {
    path: '/editath/:id',
    name: 'EditarH',
    component: EditarH
  },

  {
  path: '/editare/:id',
  name: 'EditarR',
  component: EditarR
  },

  {
    path: '/crearusuario',
    name: 'Crear',
    component: CrearU
  },

  {
    path: '/crearpost',
    name: 'PostC',
    component: PostC
  },

  {
    path: '/crearhilo',
    name: 'NuevoHilo',
    component: NuevoHilo
  },

  {
    path: '/responder',
    name: 'ReplyTo',
    component: ReplyTo
  },

  {
    path: '/usuarios',
    name: 'Listar',
    component: ListarU
  },
  
  {
    path: '/publicaciones',
    name: 'ListarP',
    component: ListarP
  },

  {
    path: '/hilos',
    name: 'ListarH',
    component: ListarH
  },

  {
    path: '/respuestas',
    name: 'ListarR',
    component: ListarR
  },

  {
    path: '/login',
    name: 'LoginN',
    component: LoginN
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
