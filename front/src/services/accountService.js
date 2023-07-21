/**
 * La fonction `saveToken` enregistre un jeton dans le stockage local du navigateur s'il n'est pas
 * défini.
 * @param token - Le paramètre `token` est une variable qui représente une valeur de jeton.
 */
let saveToken = (token) => {
    if (token !== undefined) {
        localStorage.setItem('token', token)
    }
}

/**
 * La fonction `logout` supprime l'élément 'token' du localStorage.
 */
let logout = () => {
    localStorage.removeItem('token')
}

/**
 * La fonction vérifie si un jeton est stocké dans le stockage local du navigateur et renvoie une
 * valeur booléenne indiquant si l'utilisateur est connecté ou non.
 * @returns La fonction isLogged renvoie une valeur booléenne. Il renvoie vrai s'il y a un jeton stocké
 * dans le localStorage et faux s'il n'y a pas de jeton.
 */
let isLogged = () => {
    let token = localStorage.getItem('token')
    return !!token
}
/* Exporte un objet nommé `accountService` avec trois propriétés : `saveToken`, `logout` et `isLogged`. Ces propriétés sont
des fonctions qui peuvent être utilisées par d'autres modules qui importent `accountService`. */
export const accountService = {
    saveToken, logout, isLogged
}