import React from 'react'
import {creareInReducer,creareDeReducer} from './Redux/action_create'

export default class App extends React.Component{
    addnum=()=>{
        let state = this.refs.selectNum.value;

        this.props.store.dispatch(creareInReducer(state*1))
    };
    delnum=()=>{
        let state = this.refs.selectNum.value;

        this.props.store.dispatch(creareDeReducer(state*1))
    };

    render(){
        let state = this.props.store.getState();
        
        return(
            <div>
                <h3>数据是{state}</h3>
                <select ref="selectNum">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </select>
                <button onClick={this.addnum}>加</button>
                <button onClick={this.delnum}>减</button>
            </div>
        )
    }
}