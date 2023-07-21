/**
  * Le code exporte un objet de service qui contient des fonctions permettant de faire des requêtes HTTP pour récupérer tous
  * utilisateurs ou un utilisateur spécifique.
  * @returns L'objet `usersService` est renvoyé, qui contient deux méthodes : `getAllUsers` et
  * `getUser`.
  */
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