

const router = require('express').Router()
const {registerUser,
    loginUser,
    getUser
} = require("../controllers/authController")

const auth = require('../middlewares/authentication')

router.post ("/registerUser", registerUser)
router.post ("/loginUser", loginUser)
router.get ('/user', auth, getUser)

module.exports = router