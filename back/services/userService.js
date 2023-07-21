/* Exporte un objet qui contient plusieurs fonctions pour interagir avec une table de base de
données appelée "users". */
const pool = require("../config/database");

module.exports = {
    /* La fonction `create` est utilisée pour insérer un nouvel utilisateur dans la table "users" de la
    base de données. Il prend deux paramètres : `data` qui contient les informations de
    l'utilisateur (mail, mot de passe, rôle) et `callBack` qui est une fonction de rappel pour gérer
    le résultat de la requête de la base de données. */
    create: (data, callBack) => {
        pool.query(
            `INSERT INTO users(mail, password, role) values (?, ?, ?)`,
            [
                data.mail,
                data.password,
                data.role
            ],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        )
    },

    /* La fonction `getUserByUserId` est utilisée pour récupérer un utilisateur de la table "users"
    dans la base de données en fonction de son ID utilisateur. Il prend deux paramètres : `id` qui
    est l'ID de l'utilisateur et `callBack` qui est une fonction de rappel pour gérer le résultat de
    la requête de la base de données. */
    getUserByUserId: (id, callBack) => {
        pool.query(
            `SELECT * FROM users WHERE id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        )
    },

    /* La fonction `getUserByMail` est utilisée pour récupérer un utilisateur de la table "users" dans
    la base de données en fonction de son adresse e-mail. */
    getUserByMail: (mail, callBack) => {
        pool.query(
            `SELECT * FROM users WHERE mail = ?`,
            [mail],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        )
    },

    /* La fonction `getAllUsers` est utilisée pour récupérer tous les utilisateurs de la table "users"
    dans la base de données. Pour ce faire, il exécute une requête SQL qui sélectionne toutes les
    colonnes (`*`) de la table "users". La requête est exécutée à l'aide de la méthode `pool.query`,
    qui prend la requête SQL comme premier paramètre et une fonction de rappel comme second
    paramètre. */
    getAllUsers: () => {
        pool.query(
            `SELECT * FROM users`,
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        )
    }
}