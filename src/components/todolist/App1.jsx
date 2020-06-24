import React from 'react';
import AddList from './components/AddList'
import TodoList from './components/TodoList'
import Footer from './components/Footer'
import '../../styles/todo-mvc.css'

export default class App extends React.Component{
    state={
        todos:[
            {content:"学习vue",complete:true},
            {content:"学习react",complete:false},
            {content:"学习jq",complete:true},
            {content:"打游戏",complete:false},
        ],
        visibility:"all"
    }
    addTodo=(todo)=>{
        this.state.todos.push(todo);
        this.setState({
            todos:this.state.todos
        }) 
    }
    togAll=(done)=>{
        this.state.todos.forEach(todo=>{
            todo.complete = done
        })
        this.setState({
            todos:this.state.todos
        })

    }
    todoOne=(todo)=>{
        let index  = this.state.todos.findIndex(t=>t == todo)
        this.state.todos[index].complete = !this.state.todos[index].complete
        this.setState({
            todos:this.state.todos
        })
    }
    checkedAll=()=>{
        return this.state.todos.every(todo=>todo.complete)
    }
    delete=(todo)=>{
        let index = this.state.todos.findIndex(t=>t==todo)
        this.state.todos.splice(index,1);
        this.setState({
            todos:this.state.todos
        })
    }
    filteredTodos=()=>{
        switch(this.state.visibility){
            case "all":
                return this.state.todos;
            case "active":
                return this.state.todos.filter(todo=>!todo.complete)
            case "completed":
                return this.state.todos.filter(todo=>todo.complete)
            default:
                break
               
        }
    }
    setVisilibity=(filter)=>{
        this.setState({
            visibility:filter
        })
    }
    render(){
        
        return(
            <div>
                <section className="todoapp">
                    <AddList addTodo={this.addTodo}></AddList>
                    <TodoList 
                    todos = {this.filteredTodos()}
                    togAll = {this.togAll}
                    todoOne = {this.todoOne}
                    checkedAll = {this.checkedAll()}
                    delete={this.delete}
                    ></TodoList>
                    <Footer
                    setVisilibity={this.setVisilibity}
                    visibility={this.state.visibility}
                    ></Footer>
                </section>
            </div>
        )
    }
}
