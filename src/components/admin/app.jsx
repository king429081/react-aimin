import React from 'react'
import Admin from './components/admin/Admin'
import Login from './components/login/index'
import {Route,Switch,Redirect} from 'react-router-dom' 
import './app.css'
import userMessage from './userMessge'
import {saveUser,getUser,removeUser} from './localSAVE'


export default class  App extends React.Component{
    render(){
         userMessage.user = getUser()
        return(
            <div className="admin">
                <Switch>
                    <Route path="/admin" component={Admin}></Route>
                    <Route path="/login" component={Login}></Route>
                    <Redirect to="/admin"></Redirect>
                </Switch>

            </div>
        )
    }
}