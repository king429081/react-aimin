import React from 'react';
export default class App extends React.Component{
    render(){
        return(
            <li className= {this.props.todo.complete ? "todo complete" : "todo"}>
                <div className="view">
                    <input type="checkbox" className="toggle"
                    checked={this.props.todo.complete} 
                    onClick={()=>this.props.toggleTodo(this.props.todo)}
                    />
                    <label>{this.props.todo.content}</label>
                    <button className="destroy"
                    onClick={()=>this.props.delTodo(this.props.todo,this.props.index)}
                    ></button>
                </div>
                <input type="text" className="edit" style={{display:"none"}} />
            </li>
        )
    }
}
