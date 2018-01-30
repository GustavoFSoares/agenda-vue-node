import http from '../client'

export const getContacts = () => {
    return http.get(`/`).then(res => res.data )
}

export const deleteContact = (id) => {
    return http.post(`/delete/${id}`).then(res => res.data)
}