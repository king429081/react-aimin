import axios from 'axios'
import qs from 'qs'
//根据环境的不同进行不同的baseUrl的设置
/*  switch (prpcess_env_NODE_ENV) {
    case 'production':
        baseURL:""
        break;

    default:
        break;
 } */


//设置超时时间
axios.defaults.timeout=10000;
//设置是否可以携带凭证
axios.defaults.withCredentials=true

//将json格式的数据进行转换为 X-WWW-form-urlencoded (xxx=xxx&&xxx=xxx)格式
axios.defaults.headers['content-Type'='application/x-www/form-urlencoded']
axios.defaults.transformRequest=data=>{qs.stringify(data)}
//qs.parse将字符串转化为对象


//拦截器  有请求和回应两种方式  
    /* 
    *请求 ：就是在客户端向服务器请求数据时，
       进行拦截，在拦截时可以修改请求的配置
    响应拦截器同理 
    */
   axios.interceptors.request.use((config)=>{
       //config就是请求时，客户端给服务器发送的配置项
       //TOKEN检验  即在第一次请求过后，服务器会给客户端发送一个TOKEN，与客户端进行绑定，再次请求服务器时需要带上这个TOKEN
       let token =localStorage.getItem('token');
       token&&(config.headers.Authorization=token);
       return config;
   },error=>{
       return Promise.reject(error)
   })


/* 自定义响应成功的状态码，默认是200开头 */
//下面是2和3开头的都算成功
/* axios.defaults.validataStatus=status=>{
    return /^(2|3)d{2}$/.test(status)
} */

//响应拦截器
axios.interceptors.response.use(response=>{
    return response.data
},error=>{
    let {response} =error
    if(response){
        //服务器有回应
        switch (response.status) {
            case 401:    //未登录
                //可以进行跳转登录界面，亦可以进行提示
                break;
            case 403:    //TOKEN过期
                break
            case 404:    //找不到页面
                break
            default:
                break;
        }
    }else{
        //服务器没有回应 1服务器崩了  2断网
        if(!window.navigator.onLine){
            //断网处理  可以进行跳转断网界面，并且刷新
            return
        }
        return Promise.reject(error)
    }
})
//统一处理异常//在shi
function axios(url,data={},type='GET'){
    return new Promise((resolve,reject)=>{
        
    })
}



 export default axios
