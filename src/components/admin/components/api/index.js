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

//删除图片
export const API_POST_DELIMG = (name)=>{return axios.post("/manage/img/delete",{name})}



//获取角色
export const API_GET_ROLELIST = () =>{ return axios.get('/manage/role/list') }
//添加角色
export const API_POST_ADDROLE = (roleName) =>{ return axios.post('/manage/role/add',{roleName}) }
//更新角色
export const API_POST_UPDATAROLE = (_id,menus,auth_time,auth_name) =>{ return axios.post('/manage/role/update',{_id,menus,auth_time,auth_name}) }



//获取用户
export const API_GET_USERLIST = () =>{ return axios.get('/manage/user/list') }
//添加用户
export const API_POST_USERADD = (username,password,phone,email,role_id) =>{ return axios.post('/manage/user/add',{username,password,phone,email,role_id}) }
//更新用户
export const API_GET_USERUPDATA = (_id,username,phone,email,role_id) =>{ return axios.post('/manage/user/update',{_id,username,phone,email,role_id}) }
//删除用户
export const API_GET_USERDELETE = (_id) =>{ return axios.post('/manage/user/delete',{_id}) }
