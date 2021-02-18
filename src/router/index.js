import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Swap from '../views/Swap.vue'
import Earning from '../views/Earning.vue'
import Governance from '../views/Governance.vue'
import Auction from '../views/detail/auction.vue'
import Create from '../views/Create.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/swap',
    name: 'Swap',
    component: Swap
  },
  {
    path: '/earning',
    name: 'Earning',
    component: Earning
  },
  {
    path: '/governance',
    name: 'Governance',
    component: Governance 
  },
  {
    path: '/auction',
    name: 'Auction',
    component: Auction
  },
  {
    path: '/create',
    name: 'Create',
    component: Create
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
