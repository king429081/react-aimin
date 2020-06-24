export default function counter(state=0,action){
    switch(action.type){
        case "ADDNUM":
            return state+1
        case "SUBNUM":
            return state-1
        default:
            return state
    }
}