import React from 'react'

import {connect} from 'react-redux'
import {addTodo,toggleTodo,delTodo} from '../actions/todos'

import AddList from '../components/AddList'
import Footer from '../components/Footer'
import TodoList from '../components/TodoList'

class Counter extends React.Component{
    render(){
        return(
            <div>
                <AddList addTodo={this.props.addTodo}></AddList>
                <TodoList 
                todos = {this.props.todos}
                toggleTodo={this.props.toggleTodo}
                delTodo={this.props.delTodo}
                ></TodoList>
                <Footer></Footer>
            </div>
        )
    }
}
export default  connect(state=>({todos:state.todos}),{addTodo,toggleTodo,delTodo})(Counter)