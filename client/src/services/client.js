import axios from 'axios'

const client = axios.create({
    baseURL: 'http://localhost:8081/contact',
    withCredentials: false,
    headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
    }
})

export default client
