import axios from 'axios'
const baseUrl = 'http://localhost:3003/login'

export const postUser = async (userObj) => {
    const newUrl = `${baseUrl}/newuser`
    const response = await axios.post(newUrl, userObj)
    return response.data
}

export const verifyUser = async (username, password) => {
    const userObj = {
        username,
        password
    }
    const response = await axios.post(baseUrl, userObj)
    return response.data
}

export const getUserDetails = async (userId) => {
    const newUrl = `${baseUrl}/user`

    const response = await axios.post(newUrl, {
            id: userId
        })
    return response.data
}

export const verifyAdmin = async(username, password) => {
    const userObj = {
        username,
        password
    }
    const newUrl = `${baseUrl}/verifyAdmin`
    const response = await axios.post(newUrl, userObj)
    return response.data
}

export const getActiveCollectionRequest = async() => {
    const newUrl = `${baseUrl}/activeRequest`

    const response = await axios.post(newUrl)
    return response.data

}

export const getCompleteCollectionRequest = async() =>{
    const newUrl = `${baseUrl}/completeRequest`
    const response = await axios.post(newUrl)
    return response.data
}

export const getUserData = async(id) => {
    const newUrl = `${baseUrl}/getData`
    const response = await axios.post(newUrl,{id})
    return response.data
}

export const setApprove = async(id) =>{
    const newUrl = `${baseUrl}/approveRequest`
    const response = await axios.post(newUrl,{id})
    return response.data
}

export const setReject = async(requestID) => {
    const newUrl = `${baseUrl}/rejectRequest`
    const response = await axios.post(newUrl,{requestID})
    return response.data
}

export const getCollectionRequest = async(requestID) =>{
    const newUrl = `${baseUrl}/getCollectionRequest`
    const response = await axios.post(newUrl,{requestID})
    return response.data
}