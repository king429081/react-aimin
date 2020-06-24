
 export default function films(state=[],action){
    switch(action.type){
        case "GET_STATE":
            return action.value
        default:
            return state
    }
}