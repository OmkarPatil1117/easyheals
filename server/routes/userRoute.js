const express = require("express");
const { loginController, registerController, authController } = require("../controllers/userCtrl");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router()

//routess
//LOGIN // POST
router.post("/login", loginController)

//REGISTER // POST
router.post("/register", registerController)

//Auth || POST
router.post("/getUserData", authMiddleware, authController)


module.exports = router
