import http from '../client'

export const getContacts = () => {
    return http.get('/').then(res => res.data )
}