import React from 'react'
import userMessage from '../../userMessge'
import { Button } from 'antd'
import { removeUser } from '../../localSAVE'
import { Route, Switch, Redirect, withRouter, Link } from 'react-router-dom'
import { render } from '@testing-library/react'
import menuList from './menuConfig'
export default class Heard extends React.Component {


    //return(<Redirect to="/login"></Redirect>)
    componentDidMount(){
        
    }
    state={

    }

    render() {
        const exit = () => {
            removeUser()
            return (
                <Redirect to="/login"></Redirect>
            )
        }
        return (
            <div className="heard_index">
                <div className="heard_top">
                    <h3>welcome {userMessage.user.data.username}</h3>
                    <Link className="login-form-button" onClick={exit} >
                        退出
                    </Link>
                </div>
                <div className="heard_bet">

                    <div >首页</div>
                    <div className="bet_right">
                        <span>2020-6-26</span>
                        <img src="" alt="" />
                        <span>热</span>
                    </div>
                </div>
            </div>
        )
    }
}   