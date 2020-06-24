import {ADD_TODO,TOGGLE_TODO,DEL_TODO} from '../constants'

export default function todo(state=[],action){
    switch(action.type){
        case ADD_TODO:
            return [...state,{content:action.content,complete:false}]
        case TOGGLE_TODO:
            return state.map(todo=>{
                if(todo==action.todo){
                    return  Object.assign({},todo,{complete:!todo.complete})
                }
                return todo
            })
        case DEL_TODO:
            return []
        default:
            return state
    }
}