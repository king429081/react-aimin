import React from 'react';
import Todo from './Todo'
export default class TodoList extends React.Component{
    render(){
        return(
            <div>
                <section className="main">
                    <input type="checkbox" className="toggle-all" 
                    /> 
                    <ul className="todo-list">
                        {
                        this.props.todos && this.props.todos.map((todo,index)=>
                                <Todo
                                    todo={todo}
                                    index={index}
                                    key={index}
                                    toggleTodo={this.props.toggleTodo}
                                    delTodo={this.props.delTodo}
                                ></Todo>  
                        )
                        }
                        {/* {
                            this.props.todos.map((todo,index)=>
                            <Todo
                                todo = {todo}
                                key={index}
                                todoOne = {this.props.todoOne}
                                delete={this.props.delete}
                            ></Todo>
                            )
                        } */}
                        
                        
                    </ul>
			    </section> 
            </div>
        )
    }
}
