import axios from './axios'

export function API_LOGIN(){
    return axios.post('/login')
}