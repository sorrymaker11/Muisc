import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import lazyPlugin from 'vue3-lazy'
import getVant from './plugins';

const app=createApp(App)
app.use(store)
app.use(router).mount('#app')
getVant(app)
app.use(lazyPlugin, {
    loading: require('@/assets/favicon.png'), // 图片加载时默认图片
    // error: require('@/assets/images/error.png')// 图片加载失败时默认图片
  })