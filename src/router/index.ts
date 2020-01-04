import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/audio_analyzer',
    name: 'audioAnalyzer',
    component: () => import(/* webpackChunkName: "audioAnalyzer" */ '../views/AudioAnalyzer.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
