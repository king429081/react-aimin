import React from 'react';
import Reg from './Reg';
import Login from './Login'
import {Route,Link} from 'react-router-dom';

export default class User extends React.Component{
    render(){
        return(
            <div>
                User
                <ul>
                    <li><Link to='/user/reg'>注册</Link></li>
                    <li><Link to='/user/login'>登录</Link></li>
                </ul>
                <Route path="/user/reg" component={Reg}></Route>
                <Route path="/user/login" component={Login}></Route>
            </div>
        )
    }
}