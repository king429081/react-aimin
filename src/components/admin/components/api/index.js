import axios from 'axios'

export const API_LOGIN=(values)=>{return axios.post('/login',values)}

//请求一级二级商品
export const API_GET_CATEGROY=(parentId)=>{return axios.get('/manage/category/list',{
    params:{
        parentId
    }
}
     )}
//添加分类
export const API_ADD_LOGIN=(parentId,categoryName)=>{return axios.post('/manage/category/add',{parentId,categoryName})}
//编辑分裂
export const API_UPDATA_LOGIN=(categoryId, categoryName)=>{return axios.post('/manage/category/update',{categoryId, categoryName})}
