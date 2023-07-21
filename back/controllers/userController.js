/* Importent des fonctions et des modules depuis les modules
"../services/userService" et "bcrypt". */
const { create, getUserByUserId, getUserByMail, getAllUsers } = require("../services/userService");
const { hashSync, genSaltSync, compareSync } = require("bcrypt");


/* `const { sign } = require("jsonwebtoken");` importe la fonction `sign` du module `jsonwebtoken`.
Cette fonction est utilisée pour générer un jeton Web JSON (JWT) à des fins d'authentification et
d'autorisation. */
const { sign } = require("jsonwebtoken");

module.exports = {
    /* La fonction `createUser` est une fonction de contrôleur responsable de la création d'un nouvel
    utilisateur dans la base de données. */
    createUser: (req, res) => {
        const { body } = req;
        console.log('valeur du body', body);
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);

        create(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            })
        });
    },

    /* La fonction `getUserByUserId` est une fonction de contrôleur chargée de récupérer un utilisateur
    de la base de données en fonction de son ID utilisateur. */
    getUserByUserId: (req, res) => {
        const id = req.params.id;
        getUserByUserId(id, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "Record not Found"
                });
            }
            results.password = undefined;
            return res.json({
                success: 1,
                data: results
            });
        });
    },

    /* La fonction `getAllUsers` est une fonction de contrôleur chargée de récupérer tous les
    utilisateurs de la base de données. Il prend les objets `req` (demande) et `res` (réponse) comme
    paramètres. */
    getAllUsers: (req, res) => {
        const {body} = req;
        getAllUsers(err, results => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "Record not Found"
                })
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },

    /* La fonction "login" est une fonction de contrôleur responsable de la gestion de la
    fonctionnalité de connexion. */
    login: (req, res) => {
        const { body } = req;
        getUserByMail(body.mail, (err, results) => {
            if (err) {
                console.log(err);
            }
            if (!results) {
                return res.json({
                    success: 0,
                    data: "Invalid email or password"
                });
            }
            const result = compareSync(body.password, results.password);
            if (result) {
                results.password = undefined;
                const token = sign({ result: results }, "qwe1234", {
                    expiresIn: "1h"
                });
                return res.json({
                    success: 1,
                    message: "Login successfully",
                    token: token
                });
            } else {
                return res.json({
                    success: 0,
                    data: "Invalid email or password"
                });
            }
        });
    }
}