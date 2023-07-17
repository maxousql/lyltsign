import Axios from "./callerService"

let login = (data) => {
    return Axios.post('/users/login', data)
}

export const reqApiService = {
    login
}