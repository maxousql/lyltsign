const router = require("express").Router();
const { createUser, getUserByUserId, getAllUsers, login } = require("../controllers/userController");
const { checkToken } = require("../auth/token_valid");

/* Définit les routes */
router.post("/", checkToken, createUser);
router.get("/:id", getUserByUserId);
router.get("/users", getAllUsers)
router.post("/login", login);

module.exports = router;