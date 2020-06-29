import React from 'react'
import userMessage from '../../userMessge'
import { Button} from 'antd'
import {removeUser} from '../../localSAVE'
import {Route,Switch,Redirect,withRouter} from 'react-router-dom'
import { render } from '@testing-library/react'

export default class Heard extends React.Component{
    
    exit=()=>{
        removeUser()
        //this.props.history.push('/login')
        
            return(
                <Redirect to="/login"></Redirect>
            )
        }
        //return(<Redirect to="/login"></Redirect>)
        
    
    render(){
         
        return(
            <div className="heard_index">
                <div className="heard_top">
        <h3>welcome {userMessage.user.data.username}</h3> 
                </div>
                <div className="heard_bet"> 

                <Button type="primary"  className="login-form-button" onClick={this.exit}>
                                退出
                            </Button>
                    <div className="bet_right">
                        <span>2020-6-26</span>
                        <img src="" alt=""/>
                        <span>热</span>
                    </div>
                </div>
            </div>
        )
    }
}