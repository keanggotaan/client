import axios from 'axios';

const instance = axios.create({
    timeout: 30000,
    baseURL: 'http://localhost:3000'
})

export default instance;