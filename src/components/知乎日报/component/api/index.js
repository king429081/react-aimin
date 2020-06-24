import axios from './axios'

export function API_LATEST(){
    return axios.get('/news/latest')
}