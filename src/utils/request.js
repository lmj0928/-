import axios from 'axios'
import router from '../router'
const request=axios.create({
  baseURL:"http://localhost:3000"
});

//添加请求拦截器

request.interceptors.request.use((config)=>{
  return {
    ...config,
    headers:{
      ...config.headers,
      token:window.localStorage.getItem('token')
    }
  }
},(error)=>{
  return Promise.reject(error)
})

//响应前拦截
request.interceptors.response.use((response)=>{
  // console.log(response)
  return response.data;
},(error)=>{
 const response=error.response;
 const status=response.status;
 if(status>400){
   switch(status){
     case 401:
        router.push('/login')
        break;
      case 404:
        alert('页面丢失')
        break;
   }
 }
return Promise.reject(error)
})


export default {
  get(url,data){
    return request.get(url,{
      params:data
    })
  },
  post(url,data){
    return request.post(url,data)
  }
}
