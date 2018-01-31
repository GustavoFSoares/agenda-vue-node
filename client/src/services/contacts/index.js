import http from '../client'

export const getContacts = () => {
    return http.get(`/`).then( res => res.data )
}

export const addContact = (contact) => {
    return http.post(`/add`).then( res => res.data )
}

export const getContact = (id) => {
    return http.get(`/find/${id}`).then( res => res.data )
}

export const editContact = (id, contact) => {
    return http.put(`/edit/${id}`).then( res => res.data )
}

export const deleteContact = (id) => {
    return http.post(`/delete/${id}`).then(res => res.data)
}