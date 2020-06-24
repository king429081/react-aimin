import axios from 'axios'

export function gets(value){
    return{
        type:'GET_STATE',
        value
    }
}
export function movie(){
    return{
        type:"ADD_MOVIE"
    }
}



export function getstateAsync(){
    return function(dispatch,getState){
        const url = 'https://mockapi.eolinker.com/2ZhGVxjacb39010e6753bd9c02ee803e6e3bfeab6e8007c/data2'
        axios.get(url).then(value=>{
            console.log(value)
            dispatch(gets(value.data.films))
        }).catch(result=>{
            console.log(result)
        })
    }
}