import React from 'react'
import './css/index.css'
import { Layout } from 'antd';
import LeftList from './LeftList'
import Heard from './Heard'
import {Route,Switch,Redirect,withRouter} from 'react-router-dom'
import Index from './items/01admin/Index'
import UserAdmin from './items/03user/UserAdmin'
import OrderAdmin from './items/06order/OrderAdmin'
import ShopIndex from './items/02-1shop/ShopIndex1'
import Product from './items/02-2shop/Products'
import DetailProduct from './items/02-2shop/DetailProduct'
import ChartControl from './items/05-1phone/ChartControl'
import SecondShopIndex from './items/02-1shop/SecondShop'
import Role from './items/04role/Role'
import userMessage from '../../userMessge'
import ModifyProduct from './items/02-2shop/ModifyProduct'
export default class  Admin extends React.Component{
    render(){
        let user = userMessage.user
        const { Footer, Sider, Content } = Layout;
        if(!user || !user.data._id){
            return(
                <Redirect to="/login"></Redirect>
            )
        }
        
        //console.log(user) 
        return(
            <div className="admin_index">
                <Layout style={{height:"100%"}}> 
                    <Sider>
                        <div className="top"><h3>商品管理系统</h3></div>
                        <LeftList></LeftList>
                    </Sider>
                    <Layout>
                        <Heard></Heard>
                        <Content >
                            <Switch>
                                <Route path="/admin/home" component={Index}></Route>
                                <Route path="/admin/user" component={UserAdmin}></Route>
                                <Route path="/admin/chart" component={ChartControl}></Route>
                                <Route path="/admin/category" component={ShopIndex}></Route>
                                <Route path="/admin/product" component={Product}></Route>
                                <Route path="/admin/secondshop" component={SecondShopIndex}></Route>
                                <Route path="/admin/order" component={OrderAdmin}></Route>
                                <Route path="/admin/modifi" component={ModifyProduct}></Route>
                                <Route path="/admin/detail" component={DetailProduct}></Route>
                                <Route path="/admin/role" component={Role}></Route>
                                <Redirect to="/admin/home"></Redirect>
                            </Switch>
                        </Content>
                    </Layout>
                </Layout>
            </div>
        )
    }
}