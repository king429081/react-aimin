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
//获取product
export const API_GET_PRODUCTLIST = (pageNum,pageSize)=>{return axios.get('/manage/product/list',{params:{pageNum,pageSize}})}  
//search请求
export const API_GET_PRODUCTSEARCH = (pageNum,pageSize,productName,productDesc)=>{return axios.get('/manage/product/search',{params:{pageNum,pageSize,productName,productDesc}})}
//添加产品
export const API_POST_ADDPRODUCT =(categoryId,pCategoryId,name,desc,price,detail,imgs) =>{return axios.post('/manage/product/add',{categoryId,pCategoryId,name,desc,price,detail,imgs})}
export const API_POST_UPDATAPRODUCT =(_id,categoryId,pCategoryId,name,desc,price,detail,imgs) =>{return axios.post('/manage/product/update',{_id,categoryId,pCategoryId,name,desc,price,detail,imgs})}
export const API_POST_UPSTATUSPRODUCT =(productId,status) =>{return axios.post('/manage/product/updateStatus',{productId,status})}