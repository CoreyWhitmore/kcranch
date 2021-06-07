import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import HorsePoweredReading from '../views/HorsePoweredReading.vue'
import BuckysSoap from '../views/BuckysSoap.vue'
import BarnArt from '../views/BarnArt.vue'
import OurTeam from '../views/OurTeam.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/HorsePoweredReading',
    name: 'HorsePoweredReading',
    component: HorsePoweredReading
  },
  {
    path: '/BuckysSoap',
    name: 'BuckysSoap',
    component: BuckysSoap
  },
  {
    path: '/BarnArt',
    name: 'BarnArt',
    component: BarnArt
  },
  {
    path: '/OurTeam',
    name: 'OurTeam',
    component: OurTeam
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
