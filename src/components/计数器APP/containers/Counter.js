import Show from '../components/Show'
import Add from '../components/Add'
import Sub from '../components/Sub'
import React from 'react'

import { connect } from "react-redux"
import { bindActionCreators } from 'redux'
import * as actions from '../actions/index'


//将该组件变为智能组件，可以得到仓库中的数据和方法，传给后代。
    //"react-redux" 中的 connect 方法可以将其变为智能组件
    //引入，
    //使用方法 
    function mapStateToProps(state){
        return{
            counter:state.counter
        }
    }
    function mapDispatchToProps(dispatch){
        return bindActionCreators(actions,dispatch)
    }


 class Counter extends React.Component{
    render(){
        return(
            <div>
                <Show num={this.props.counter}></Show>
                <Add addnum = {this.props.addnum}></Add>
                <Sub subnum = {this.props.subnum}></Sub>
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);
