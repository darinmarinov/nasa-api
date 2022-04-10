import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/earth',
    name: 'Earth',
    component: () => import('../views/Earth.vue')
  },
  {
    path: '/epic',
    name: 'Epic',
    component: () => import('../views/Epic.vue')
  },
  {
    name: 'SignIn',
    path: "/sign-in",
    component: () => import("../views/SignIn.vue"),
  },
  {
    name: 'Register',
    path: "/register",
    component: () => import("../views/Register.vue"),
  },
  // {
  //   path: '/:catchAll(.*)',
  //   name: 'PageNotFound',
  //   component: () => import('../views/PageNotFound.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const menu = routes

export {
  router as default,
  menu
}