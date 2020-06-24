import {createStore ,applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducer from '../reducers/reducer'
const state = {
    todos:[
        {content:"学习vue",complete:true},
        {content:"学习react",complete:false},
        {content:"学习jq",complete:true},
        {content:"打游戏",complete:false},
    ],
    visibility:"all"
}
const createStoreWithThunk=applyMiddleware(thunkMiddleware)(createStore)
let store = createStoreWithThunk(reducer,state)
export default store