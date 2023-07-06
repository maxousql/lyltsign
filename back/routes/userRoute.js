const router = require("express").Router();
const { createUser, getUserByUserId, login } = require("../controllers/userController");
const { checkToken } = require("../auth/token_valid");

router.post("/", checkToken, createUser);
router.get("/:id", checkToken, getUserByUserId);
router.post("/login", login);

module.exports = router;