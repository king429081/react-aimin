import React from 'react'
import './css/index.css'
import { Layout } from 'antd';
import LeftList from './LeftList'
import Heard from './Heard'
import {Route,Switch,Redirect,withRouter} from 'react-router-dom'
import Index from './items/Index'
import UserAdmin from './items/UserAdmin'
import OrderAdmin from './items/OrderAdmin'
import ShopIndex from './items/shop/ShopIndex'
import ChartControl from './items/phone/ChartControl'
import SecondShopIndex from './items/shop/SecondShop'
import Role from './items/Role'
import userMessage from '../../userMessge'



//import ContentItem from './Content'
export default class  Admin extends React.Component{
    render(){
        let user = userMessage.user
        const { Header, Footer, Sider, Content } = Layout;
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
                        
                        <Content>
                            {/* <ContentItem></ContentItem> */}
                            <Switch>
                                <Route path="/admin/home" component={Index}></Route>
                                <Route path="/admin/user" component={UserAdmin}></Route>
                                <Route path="/admin/chart" component={ChartControl}></Route>
                                <Route path="/admin/shop" component={ShopIndex}></Route>
                                <Route path="/admin/secondshop" component={SecondShopIndex}></Route>
                                <Route path="/admin/order" component={OrderAdmin}></Route>
                                <Route path="/admin/role" component={Role}></Route>
                                <Redirect to="/admin/home"></Redirect>
                            </Switch>
                        </Content>
                        <Footer></Footer>
                    </Layout>
                </Layout>
            </div>
        )
    }
}