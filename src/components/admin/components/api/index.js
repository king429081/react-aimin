import axios from 'axios'

export const API_LOGIN=(values)=>{return axios.post('/login',values)}