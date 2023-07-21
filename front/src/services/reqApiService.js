/**
  * Le code exporte deux fonctions, `login` et `getUserInfo`, qui effectuent des requêtes API à l'aide d'Axios.
  * @param data - Le paramètre "data" est un objet qui contient les informations nécessaires pour l'API
  * demande. Il peut inclure des éléments tels que les identifiants de connexion de l'utilisateur ou tout autre paramètre supplémentaire
  * Requis par le point de terminaison de l'API.
  * @returns L'objet `reqApiService` est renvoyé, qui contient le `login` et `getUserInfo`
  * les fonctions.
  */
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