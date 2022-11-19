import axios from "axios";
import store from '@/store'

let service=axios.create({
    baseURL:'http://localhost:3000/',
    timeout:5000,
    widthCredentials: true,
})

service.interceptors.request.use(function(config) {
  store.commit('Loading/updateIsLoading',true)
  const cookie=localStorage.getItem('cookie');
  // console.log(cookie);
  //判断请求的类型：如果是post请求就把默认参数拼到data里面；如果是get请求就拼到params里面
  if (config.method === 'post') {
      config.data = {
        cookie: cookie,
      }
  } else if (config.method === 'get') {
      config.params = {
        cookie: cookie,
      }
  }
  config.headers = {
      'Content-Type': 'application/x-www-form-urlencoded'
  };
  return config;
}, function(error) {
  return Promise.reject(error);
})

service.interceptors.response.use(function(config){
  store.commit('Loading/updateIsLoading',false)
  return config
})

export default service