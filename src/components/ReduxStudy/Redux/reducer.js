import {INCREATE,DECREATE} from './action_types'

let ininState = 0;

export default function reducer(preState = ininState,action){
    const {type,data} = action
    switch(type){
        case INCREATE:
            return preState+data
        case DECREATE:
            return preState-data
        default:
            return preState
    }
}