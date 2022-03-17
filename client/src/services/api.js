import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.15.78:3001',
    withCredentials: true
})

export default api;