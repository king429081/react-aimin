import React from 'react'
import userMessage from '../../userMessge'


export default class Heard extends React.Component{
    render(){
        return(
            <div className="heard_index">
                <div className="heard_top">
        <h3>welcome {userMessage.user.data.username}</h3> 
                </div>
                <div className="heard_bet"> 
        
                    <h3>首页</h3>
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