import store from 'store2'
let USER = "USER"

export function saveUser(user){
    store.set(USER,user)
}
export function getUser(){
    return store.get(USER)
}
export function removeUser(){
    store.remove(USER)
}