const { verify } = require("jsonwebtoken");

module.exports = {
    /* La fonction `checkToken` est une fonction middleware utilisée pour vérifier l'authenticité d'un
    jeton dans une requête. */
    checkToken: (req, res, next) => {
        let token = req.get("authorization");
        console.log(token);
        if (token) {
            token = token.slice(7);
            verify(token, "qwe1234", (err, decoded) => {
                if (err) {
                    res.json({
                        success: 0,
                        message: "Invalid token"
                    });
                } else {
                    next();
                }
            });
        } else {

            res.json({
                success: 0,
                message: "Access denied! Unautorized user"
            })
        }
    }
}