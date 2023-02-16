import api from "./auth.js"

export const getComments = async () => {
    try {
        const response = await api.get('/comments/')
        return response.data
    } catch (error) {
        throw error
    }
}

export const getComment = async id => {
    try {
        const response = await api.get(`/comments/${id}/`)
        return response.data
    } catch (error) {
        throw error
    }
}

export const createComment = async comment => {
    try {
        const response = await api.post('/comments/', comment)
        return response.data
    } catch (error) {
        throw error
    }
}

export const updateComment = async (id, comment) => {
    try {
        const response = await api.put(`/comments/${id}/`, comment)
        return response.data
    } catch (error) {
        throw error
    }
}

export const deleteComment = async id => {
    try {
        const response = await api.delete(`/comments/${id}/`)
        return response.data
    } catch (error) {
        throw error
    }
}