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
    component: () => import(/* webpackChunkName: "itemMusic" */ '../views/ItemMusic.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import(/* webpackChunkName: "itemMusic" */ '../views/Search.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "itemMusic" */ '../views/Login.vue')
  },

  {
    path: '/dailySongs',
    name: 'dailySongs',
    component: () => import(/* webpackChunkName: "itemMusic" */ '../views/dailySongs.vue'),
  },

  {
    path: '/video',
    name: 'video',
    component: () => import(/* webpackChunkName: "itemMusic" */ '../views/video.vue'),
    meta:{
      keepAlive:true,
    }
  },

  {
    path: '/videodetail/:id/:name',
    name: 'videodetail',
    component: () => import(/* webpackChunkName: "itemMusic" */ '../views/videoDetail.vue')
  },
  // 歌手展示
  {
    path: '/showsinger',
    name: 'showsinger',
    component: () => import(/* webpackChunkName: "itemMusic" */ '../views/showSinger.vue'),
    child:[]
  },
  // 歌手详细信息
  {
    path: '/singerdetail/:id',
    name: 'singerdetail',
    component: () => import(/* webpackChunkName: "itemMusic" */ '../views/singerDetail.vue'),
    children:[
    ]
  },
    // 专辑信息
    {
      path: '/singerdetail/albumdetail/:id',
      name: 'albumdetail',
      component: () => import(/* webpackChunkName: "itemMusic" */ '../views/albumDetail.vue'),
    },// 专辑信息
    {
      path: '/musicComment',
      name: 'musicComment',
      component: () => import(/* webpackChunkName: "itemMusic" */ '../views/musicComment.vue'),
    },
  // 排行榜
  {
    path: '/ranklist',
    name: 'ranklist',
    component: () => import(/* webpackChunkName: "itemMusic" */ '../views/rankList.vue'),
  },
  //歌单
  {
    path: '/allSongList',
    name: 'allSongList',
    component: () => import(/* webpackChunkName: "itemMusic" */ '../views/allSongList.vue'),
  },
  //用户信息页面
  {
    path: '/infoUser',
    name: 'InfoUser',
    beforeEnter(to, from, next) {
      // ||store.state.User.isLogin
      if(localStorage.getItem('cookie')){
        next();
      }else{
        next('/login')
      }
    },
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
