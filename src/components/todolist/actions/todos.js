import {ADD_TODO,TOGGLE_TODO,DEL_TODO} from '../constants'
export function addTodo(content){
    return{
        type:ADD_TODO,
        content
    }
}
export  function toggleTodo(todo){
    return{
        type:TOGGLE_TODO,
        todo
    }
}
export function delTodo(todo,index){
    return{
        type:DEL_TODO,
        todo,
        index
    }
}