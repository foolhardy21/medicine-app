const router = require('express').Router()
const loginController = require('../controllers/loginController')

router.get('/', loginController.postUser)

module.exports = router