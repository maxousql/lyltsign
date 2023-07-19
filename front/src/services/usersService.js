import Axios from '../services/callerService';

let getAllUsers = () => {
    return Axios.get('/users')
}

let getUser = (uid) => {
    return Axios.get('/users/'+uid)
}

export const usersService = {
    getAllUsers, getUser
}