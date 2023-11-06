

const router = require('express').Router()
const {registerUser, loginUser} = require("../controllers/authController")

router.post ("/registerUser", registerUser)
router.post ("/loginUser", loginUser)

module.exports = router