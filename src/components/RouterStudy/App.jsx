import React  from 'react';
import {Route,Link,Switch,Redirect} from 'react-router-dom';
import Home from './Home'
import List from './List'
import User from './User'
import Detail from "./Detail"
import Error from './Error'

export default  class AppTwo extends React.Component{
    render(){
        return(
            <div>
                <h3>app</h3>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/list">列表</Link></li>
                    <li><Link to={{pathname:"/user",search:"?username=admin"}}>123</Link></li>

                </ul>
                <Switch>
                    <Redirect from="/cart" to="/"></Redirect>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/list" component={List}></Route>
                    <Route path="/user" component={User}></Route>
                    <Route path="/detail/:id" component={Detail}></Route>
                    <Route component={Error}></Route>
                </Switch>
            </div>
        )
            
        
    }
}