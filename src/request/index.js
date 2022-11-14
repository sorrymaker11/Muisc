import axios from "axios";

let service=axios.create({
    baseURL:'http://localhost:3000/',
    timeout:5000,
    widthCredentials: true
})

axios.interceptors.request.use(
    config => {
      store.commit('updateLoading')
      return config
    },
    error => {
    //   store.commit('updateLoading')
      return Promise.reject(error)
    })

  
export default service