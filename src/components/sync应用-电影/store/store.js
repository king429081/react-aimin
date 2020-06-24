import {createStore, applyMiddleware} from 'redux'
import reducer from '../reducer/reducer'

import thunkMiddleware from 'redux-thunk'

const state = {
    films:[]
}


const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore)

let store = createStoreWithMiddleware(reducer,state)
export default store