import Axios from "./callerService"

let login = (data) => {
    return Axios.post('/users/login', data)
}

let getUserInfo = (data) => {
    return Axios.get('/users/', data)
}

export const reqApiService = {
    login, getUserInfo
}