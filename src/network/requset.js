import axios from 'axios'
export function requset(config) {
    const instance = axios.create({
        baseURL: 'http://152.136.185.210:8000/api/w6',
        timeout: 15000
    });
    return instance(config)
}