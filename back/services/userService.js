const pool = require("../config/database");

module.exports = {
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
    }
}