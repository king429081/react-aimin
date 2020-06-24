import React  from 'react'
import moment from 'moment'
import './css/Home.css'
import { Carousel } from 'antd';
import {API_LATEST } from './api/index'
export default class Home extends React.Component{
    render(){
        return(
            <div className="homeBx">
                <header className="headerBox">
                    <div className="base">
                        <span className="time">
                        {this.handTime(this.state.time,0)}
                        <em>{this.handTime(this.state.time,1)}月</em>
                        </span>
                        <h1 className="title">知乎日报</h1>
                    </div>
                    <div className="user"></div>
                </header>
                {/* 轮播图位置 */}
                <div className="bannerBox">
                {/* <Carousel autoplay>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                </Carousel> */}
                </div>
                {/*  */}
                <div className="newsBox" >
                    <div className="itemBox">
                        <h4 className="time" >
                            <span>123</span>
                            <i>111</i>
                        </h4>
                        <ul className="content">
                            <li className="item" >
                                <div className="con">
                                <h4>000</h4>
                                <span>000</span>
                                </div>
                                <div className="img">
                                </div>
                            </li>
                        </ul>
                    </div>   
                </div>   
            </div>
        )
    }
    componentDidMount(){
        API_LATEST().then((res)=>{
            console.log(res)
        })
    }
    state={
        time:moment().format("YYYY-MM-DD"),
    }
    handTime(time,index=0){
        let month = parseInt(time.substr(4,2)),
        day = parseInt(time.substr(6)),
        arr=[
            "",
            "一",
            "二",
            "三",
            "四",
            "五",
            "六",
            "七",
            "八",
            "九",
            "十",
            "十一",
            "十二"
        ];
        return [day,arr[month][index]]

    }
    
}