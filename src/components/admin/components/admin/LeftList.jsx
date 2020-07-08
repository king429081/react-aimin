import React from 'react'
import { Menu, Button } from 'antd';
import { Link } from 'react-router-dom'
import menuList from './menuConfig'
import userMessage from '../../userMessge'
import {
    AppstoreOutlined,
    PieChartOutlined,
} from '@ant-design/icons';
import SubMenu from 'antd/lib/menu/SubMenu';


export default class LeftList extends React.Component {
    componentDidMount() {
        //console.log(userMessage)
        // if(userMessage)
        // let userMenulist = this.props.userMenulist
        this.initusermenulist()
        console.log(this.state.usermenulist, userMessage.user.data.username)
        if (userMessage.user.data.username === "admin") {
            this.state.menu = menuList
            this.setState({ menu: this.state.menu })
        } else {
            this.state.menu = this.state.usermenulist
            this.setState({ menu: this.state.menu })
        }


    }
    state = {
        usermenulist: [],
        menu: []
    }
    // initusermenulist = () => {
    //     menuList.map((menu, index) => {
    //         //menuList=[]
    //         this.state.usermenulist.push({})
    //         userMessage.user.data.role.menus.map(role => {
    //             if (role == menu.key) {
    //                 //console.log(menu)
    //                 this.state.usermenulist[index] = {
    //                     icon: menu.icon,
    //                     key: menu.key,
    //                     title: menu.title,
    //                     children: []
    //                 }
    //                 this.setState({ usermenulist: this.state.usermenulist })
    //                 if (menu.children) {
    //                     //console.log("123")
    //                     menu.children.map(child => {
    //                         userMessage.user.data.role.menus.map(roleS => {
    //                             if (child.key == roleS) {
    //                                 this.state.usermenulist[index].children.push(child)
    //                                 this.setState({ usermenulist: this.state.usermenulist })
    //                                 //console.log(this.state.usermenulist)
    //                             }
    //                         })
    //                     })
    //                 }
    //             }
    //         })
    //     })
    //     // let userMenulist = this.state.usermenulist
    //     // console.log(userMenulist)
    //     this.state.usermenulist.map(item=>{

    //         if(item.children==![]){
    //             //console.log(item,"111")
    //             item.children = null
    //         }else{

    //         }

    //     })
    //     console.log(this.state.usermenulist,"159974")
    // }
    initusermenulist = () => {
        let menus = userMessage.user.data.role.menus
        menuList.map((menu, index) => {
            if (!menu.children) {
                menus.map(roles => {
                    if (roles == menu.key) {
                        this.state.usermenulist[index] = {
                            icon: menu.icon,
                            key: menu.key,
                            title: menu.title,
                        }
                        this.setState({ usermenulist: this.state.usermenulist })
                    }
                })
            } else {
                //console.log(menu)
                this.state.usermenulist[index] = {
                    icon: menu.icon,
                    key: menu.key,
                    title: menu.title,
                    children: []
                }
                this.setState({usermenulist:this.state.usermenulist})
                menu.children.map(item => {
                    menus.map(roles => {
                        if (roles == item.key) {
                            console.log(item)
                            
                            this.state.usermenulist[index].children.push({
                                icon: item.icon,
                                key: item.key,
                                title: item.title,
                            })
                        }
                    })
                })
            }
        })
        console.log(this.state.usermenulist, "1997")
    }

    getMenuNodes = (menuList) => {
        return menuList.map(item => {
            //console.log(item.title)
            if (!item.children) {
                //console.log(item.title)
                return (
                    <Menu.Item><Link to={item.key}>{item.title}</Link> </Menu.Item>
                )
            } else {
                return (
                    <SubMenu title={item.title}>

                        {item.children.map(item => {
                            return (<Menu.Item><Link to={item.key}>{item.title}</Link></Menu.Item>)
                        })}
                    </SubMenu>
                )
            }
        })
    }
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
                    {this.getMenuNodes(this.state.menu)}
                </Menu>
            </div>
        )
    }
} 