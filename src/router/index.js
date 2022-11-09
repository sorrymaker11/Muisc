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
    meta:{
      keepAlive:true,
    }
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
      function getCookie(name){
        //1、先给cookie做一下字符串分割，
    var arr=document.cookie.split("; ");//分割后变为数组，a=12 b=5 c=8 d=99
        //2、循环数组
    for(var i=0;i<arr.length;i++){
        var arr2=arr[i].split("=");  //根据“=”再次分割
            //arr2[0]——》存储的名称 abcd
            //arr2[1]——》存储的值 12 5 8 99
        if(arr2[0]==name){  //代表找到我想要的东西了
            return arr2[1];
        }
    }
        //另一种可能，用户第一次来网站，还没有cookie，所以肯定什么也找不到。所以在循环一次后就直接return 一个字符串，告诉用户什么也没找到。
        return "";
} 
// ||store.state.User.isLogin
      if(getCookie("Hm_lvt_e65c90af3a617aaf0cd3c68f64796d47")){
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
