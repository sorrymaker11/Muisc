import axios from "axios";

let service=axios.create({
    baseURL:'http://localhost:3000/',
    timeout:3000
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

  axios.interceptors.response.use(
    response => {
      console.log('response:', response.data.code)
      store.commit('updateLoading')
      return response
    },
    error => {
      if (error.response) {
        console.log('response ERROR:', error.response)
        tryAgain(error)
        return Promise.reject(error.response.data)
      }
    })
  
export default service