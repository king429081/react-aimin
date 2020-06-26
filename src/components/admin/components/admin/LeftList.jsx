import React from 'react'
import { Menu, Button } from 'antd';
import {Link} from 'react-router-dom'
import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
  } from '@ant-design/icons';


export default class LeftList extends React.Component {



    render() {
        const { SubMenu } = Menu;

        return (
            <div style={{ width: "100%" }}>
                
            <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                >
                    <Menu.Item key="1"  icon={<PieChartOutlined />}><Link to="/admin/home">首页</Link></Menu.Item>  
                    <SubMenu   title="商品">
                        <Menu.Item key="5"><Link to="/admin/shop">商品</Link></Menu.Item>
                        <Menu.Item key="6"><Link to="/admin/shop">商品</Link></Menu.Item>
                        
                    </SubMenu>
                    <Menu.Item   icon={<PieChartOutlined />}><Link to="/admin/user">用户管理</Link></Menu.Item>  
                    <Menu.Item  icon={<PieChartOutlined />}><Link to="/admin/role">角色管理</Link></Menu.Item>  
                    <SubMenu key="sub2" icon={<AppstoreOutlined />} title="图形图表">
                        <Menu.Item key="9"><Link to="/admin/chart">用户管理</Link>Option 9</Menu.Item>
                        <Menu.Item key="10"><Link to="/admin/chart">用户管理</Link>Option 10</Menu.Item>
                    </SubMenu>
                    <Menu.Item  icon={<PieChartOutlined />}><Link to="/admin/order">订单管理</Link></Menu.Item>  

                </Menu>
            </div>
        )
    }
} 