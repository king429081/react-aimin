import {createStore} from 'redux'
import reducer from '../reducers/index'
const state ={
    counter:99
}

let store = createStore(reducer,state)
export default store