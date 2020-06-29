import axios from 'axios'
import qs from 'qs'



//创建axios实例
const service = axios.create({})
//service/ axios.interceptors.request.use(config=>{
//     //请求头拦截器，看看是否有token，除了登陆界面都需要
//     let pathname = location.pathname;
//     console.log("ajax拦截请求",pathname)
//     if(localStorage.getItem('token')){
//         if(pathname!='/' && pathname !='/login'){
//             config.headers.common['token'] = localStorage.getItem('token')

//         }
//     }
//     return config;
// }),error=>{
//     //请求错误
//     return Promise.reject(error)
// }   


export default ajax = (url,data={},type="GET")=>{
    if(type=="GET"){
        axios.get(url,
            {
                params:data
            })
    }else if(type=="POST"){
        axios.post(url,data)
    }
}