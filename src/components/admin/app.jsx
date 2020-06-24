import React from 'react'
import Admin from './components/admin/index'
import Login from './components/login/index'
import {Route,Link,Switch} from 'react-router-dom' 
import './app.css'

export default class  App extends React.Component{
    render(){
        return(
            <div className="admin">
                
                <Switch>
                    <Route path="/" exact component={Admin}></Route>
                    <Route path="/login" component={Login}></Route>
                </Switch>
            </div>
        )
    }
}