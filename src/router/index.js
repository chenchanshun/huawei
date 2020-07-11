import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Fate from '../components/Fate'
import Videos from '../components/video'
import inter from '../components/interface'
import daily from '../components/daily'
Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/daily' },

  {
    path: '/daily',
    name: 'daily',
    component: daily
  },
  {
    path: '/fate',
    name: 'Fate',
    component: Fate
  },
  {
    path: '/video',
    name: 'videos',
    component: Videos
  }, 
  {
    path: '/interface',
    name: 'interface',
    component: inter
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
