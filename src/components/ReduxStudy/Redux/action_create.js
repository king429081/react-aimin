import {INCREATE,DECREATE} from './action_types'

export const creareInReducer=value=>({type:INCREATE,data:value})
export const creareDeReducer=value=>({type:DECREATE,data:value})
