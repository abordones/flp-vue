import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import CrearU from '../components/CrearU.vue'
import EditarU from '../components/EditarU.vue'
import ListarU from '../components/ListarU.vue'
import BorrarU from '../components/BorrarU.vue'

import PostC from '../components/PostC.vue'
import ListarP from '../components/ListarP.vue'
import BorrarP from '../components/BorrarP.vue'
import EditarP from '../components/EditarP.vue'



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
    path: '/crearusuario',
    name: 'Crear',
    component: CrearU
  },

  {
    path: '/usuarios',
    name: 'Listar',
    component: ListarU
  },

  {
    path: '/borrarusuario',
    name: 'Borrar',
    component: BorrarU
  },
  
  {
    path: '/publicaciones',
    name: 'ListarP',
    component: ListarP
  },

  {
    path: '/crearpost',
    name: 'PostC',
    component: PostC
  },

  {
    path: '/editapost',
    name: 'EditarP',
    component: EditarP
  },

  {
    path: '/borrarpost',
    name: 'BorrarP',
    component: BorrarP
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
