import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '@/store/index.js';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  
  {
    path: '/itemMusic',
    name: 'ItemMusic',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "itemMusic" */ '../views/ItemMusic.vue')
  },
  {
    path: '/search',
    name: 'Search',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "itemMusic" */ '../views/Search.vue')
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "itemMusic" */ '../views/Login.vue')
  },
  
  {
    path: '/video',
    name: 'video',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "itemMusic" */ '../views/video.vue'),
    childern:[]
  },
  {
    path: '/videodetail/:id/:name',
    name: 'videodetail',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "itemMusic" */ '../components/video/videoDetail.vue')
  },
  {
    path: '/infoUser',
    name: 'InfoUser',
    beforeEnter(to, from, next) {
      if(store.state.User.isLogin){
        next();
      }else{
        next('/login')
      }
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "itemMusic" */ '../views/InfoUser.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to,from)=>{
  if(to.path==='/login'){
    store.state.User.showFooter=false
  }else{
    store.state.User.showFooter=true
  }
})

export default router
